import { client } from "@/sanity/lib/client";
import { AIF_DOCUMENTS_QUERY } from "@/sanity/lib/queries";

type AifDocument = {
  _id: string;
  title: string;
  fileUrl: string;
  order: number;
};

export default async function AIFPage() {
  const documents = await client.fetch<AifDocument[]>(AIF_DOCUMENTS_QUERY);

  return (
    <main className="w-full bg-white pt-28 md:pt-32 pb-20 md:pb-24 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1280px] mx-auto">

        <h1 className="text-[30px] sm:text-[34.5px] md:text-[41px] lg:text-[45.5px] text-black leading-[1.18] tracking-tight">
          AIF
        </h1>
        <div className="mt-4 h-[2px] w-10 bg-accent" />

        {/* Details */}
        <div className="mt-10 md:mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-[720px]">
          {[
            { label: "AIF Category", value: "Category III Investment Fund" },
            { label: "Registration Number", value: "IN/AIF3/17-18/0521" },
            { label: "Minimum Investment", value: "1 Crore" },
            { label: "Fund Manager", value: "Accuracap Technologies LLP" },
            { label: "Sponsor", value: "Accuracap Consultancy Services Pvt Ltd" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-muted/60 text-[12px] uppercase tracking-[0.18em] mb-1.5">{item.label}</p>
              <p className="text-[15px] md:text-[16px] text-black">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Documents — driven entirely by Sanity CMS */}
        {documents.length > 0 && (
          <div className="mt-16 md:mt-20">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32.5px] text-black mb-8 md:mb-10 leading-[1.2] tracking-tight">
              Policies &amp; Voting Records
            </h2>

            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {documents.map((doc) => (
                <div key={doc._id} className="border border-border overflow-hidden">
                  <div className="px-5 md:px-6 py-3.5 bg-surface border-b border-border">
                    <h3 className="text-[15px] md:text-[16px] font-semibold text-black">{doc.title}</h3>
                  </div>
                  <iframe src={doc.fileUrl} className="w-full h-[280px] md:h-[340px]" />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
