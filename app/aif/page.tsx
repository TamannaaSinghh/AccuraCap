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
    <main className="w-full bg-white py-28 px-6">
      <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">

        {/* Header */}
        {/* <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
            Investor Information
          </span>
        </div> */}

        <h1 className="text-3xl sm:text-4xl md:text-5xl text-black leading-tight">
          AIF
        </h1>
        <div className="mt-4 h-[2px] w-12 bg-accent" />

        {/* Details */}
        <div className="mt-12 grid sm:grid-cols-2 gap-x-12 gap-y-5 max-w-3xl">
          {[
            { label: "AIF Category", value: "Category III Investment Fund" },
            { label: "Registration Number", value: "IN/AIF3/17-18/0521" },
            { label: "Minimum Investment", value: "1 Crore" },
            { label: "Fund Manager", value: "Accuracap Technologies LLP" },
            { label: "Sponsor", value: "Accuracap Consultancy Services Pvt Ltd" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-muted/60 text-xs uppercase tracking-wider mb-1">{item.label}</p>
              <p className="text-sm md:text-base text-black">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Documents — driven entirely by Sanity CMS */}
        {documents.length > 0 && (
          <div className="mt-20">
            {/* <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
                Documents &amp; Disclosures
              </span>
            </div> */}

            <h2 className="text-2xl sm:text-3xl md:text-4xl text-black mb-10">
              Policies &amp; Voting Records
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {documents.map((doc) => (
                <div key={doc._id} className="border border-border overflow-hidden">
                  <div className="px-6 py-4 bg-surface border-b border-border">
                    <h3 className="text-base md:text-lg font-semibold text-black">{doc.title}</h3>
                  </div>
                  <iframe src={doc.fileUrl} className="w-full h-[350px]" />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
