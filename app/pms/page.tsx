import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { PMS_DOCUMENTS_QUERY } from "@/sanity/lib/queries";

type PmsDocument = {
  _id: string;
  title: string;
  displayType: "embed" | "download";
  fileUrl: string;
  order: number;
};

export default async function PMSPage() {
  const allDocs = await client.fetch<PmsDocument[]>(PMS_DOCUMENTS_QUERY);

  return (
    <main className="w-full bg-white py-28 px-6">
      <div className="max-w-[1400px] mx-auto px-0 md:px-10 lg:px-18">

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
            Investor Information
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
          PMS
        </h1>
        <div className="mt-4 h-[2px] w-12 bg-accent" />

        {/* Details */}
        <div className="mt-12 grid md:grid-cols-2 gap-10 items-center">

          {/* Left — info */}
          <div className="space-y-5">
            <div>
              <p className="text-muted/60 text-xs uppercase tracking-wider mb-1">SEBI Registration Number</p>
              <p className="text-sm text-black">INP000008844</p>
            </div>

            <div>
              <p className="text-muted/60 text-xs uppercase tracking-wider mb-1">UPI ID for Additional Investment</p>
              <p className="text-sm text-black font-medium">accuracap.pms@validibl</p>
            </div>

            <div>
              <p className="text-muted/60 text-xs uppercase tracking-wider mb-1">Authorised Person</p>
              <p className="text-sm text-muted">Motilal Oswal Financial Services Pvt Ltd</p>
              <p className="text-xs text-muted mt-1">NSE: AP0297117363, BSE: AP01044601104990</p>
            </div>
          </div>

          {/* Right — QR centered */}
          <div className="flex flex-col items-center">
            <div className="border border-border rounded-lg p-6 bg-surface shadow-sm">
              <Image
                src="/pms-qr.png"
                alt="QR Code"
                width={220}
                height={220}
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-xs text-muted tracking-wide uppercase">Scan to invest</p>
          </div>

        </div>

        {/* Documents — driven entirely by Sanity CMS */}
        {allDocs.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-muted text-xs tracking-[0.3em] uppercase font-medium">
                Documents
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl text-black mb-10">
              Disclosures &amp; Compliance
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {allDocs.map((doc) =>
                doc.displayType === "download" ? (
                  <div key={doc._id} className="border border-border p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="text-base md:text-lg font-semibold text-black mb-4">{doc.title}</h3>
                    <a
                      href={`${doc.fileUrl}?dl=`}
                      download
                      className="text-accent text-sm font-medium hover:text-accent-dark transition-colors"
                    >
                      Click here to download
                    </a>
                  </div>
                ) : (
                  <div key={doc._id} className="border border-border overflow-hidden">
                    <div className="px-6 py-4 bg-surface border-b border-border">
                      <h3 className="text-base md:text-lg font-semibold text-black">{doc.title}</h3>
                    </div>
                    <iframe src={doc.fileUrl} className="w-full h-[300px]" />
                  </div>
                )
              )}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
