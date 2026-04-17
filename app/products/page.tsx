import { client } from "@/sanity/lib/client";
import { PMS_PRODUCTS_QUERY, AIF_PRODUCTS_QUERY } from "@/sanity/lib/queries";

type ProductField = {
  label: string;
  value: string;
  fullWidth?: boolean;
};

type Product = {
  _id: string;
  name: string;
  fields: ProductField[];
  order: number;
};

export default async function ProductsPage() {
  const [pmsProducts, aifProducts] = await Promise.all([
    client.fetch<Product[]>(PMS_PRODUCTS_QUERY),
    client.fetch<Product[]>(AIF_PRODUCTS_QUERY),
  ]);

  return (
    <main className="w-full bg-white">

      {/* ═══ PMS Section ═══ */}
      <section id="pms" className="pt-14 md:pt-18 pb-12 md:pb-14 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto">

          <h1 className="text-[32.5px] sm:text-[37.5px] md:text-[44.5px] lg:text-[49px] text-black leading-[1.18] tracking-tight">
            Our PMS Strategies
          </h1>
          <div className="mt-4 h-[2px] w-10 bg-accent" />

          <div className="mt-8 md:mt-10 space-y-6">
            {pmsProducts.map((product) => (
              <div
                key={product._id}
                className="border border-border overflow-hidden"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 px-6 md:px-8 py-5 border-b border-border bg-surface border-l-4 border-l-accent">
                  <h3 className="text-[23px] md:text-[28px] font-semibold text-accent tracking-tight">{product.name}</h3>
                </div>

                {/* Card Body */}
                <div className="px-6 md:px-8 py-6 md:py-7 grid sm:grid-cols-2 gap-x-10 gap-y-6">
                  {product.fields.map((f, i) => (
                    <div key={`${product._id}-${i}`} className={f.fullWidth ? "sm:col-span-2" : ""}>
                      <p className="text-black/50 text-[13px] uppercase tracking-[0.18em] mb-1.5 font-medium">
                        {f.label}
                      </p>
                      <p className="text-[16px] md:text-[17.5px] text-black/75 leading-[1.7] whitespace-pre-line">
                        {f.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AIF Section ═══ */}
      <section id="aif" className="bg-surface pt-14 md:pt-18 pb-14 md:pb-18 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1280px] mx-auto">

          <h1 className="text-[32.5px] sm:text-[37.5px] md:text-[44.5px] lg:text-[49px] text-black leading-[1.18] tracking-tight">
            Our AIF Strategies
          </h1>
          <div className="mt-4 h-[2px] w-10 bg-accent" />

          <div className="mt-8 md:mt-10 space-y-6">
            {aifProducts.map((product) => (
              <div
                key={product._id}
                className="border border-border overflow-hidden bg-white"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 px-6 md:px-8 py-5 border-b border-border bg-white border-l-4 border-l-accent">
                  <h3 className="text-[23px] md:text-[28px] font-semibold text-accent tracking-tight">{product.name}</h3>
                </div>

                {/* Card Body */}
                <div className="px-6 md:px-8 py-6 md:py-7 grid sm:grid-cols-2 gap-x-10 gap-y-6 bg-white">
                  {product.fields.map((f, i) => (
                    <div key={`${product._id}-${i}`} className={f.fullWidth ? "sm:col-span-2" : ""}>
                      <p className="text-black/50 text-[13px] uppercase tracking-[0.18em] mb-1.5 font-medium">
                        {f.label}
                      </p>
                      <p className="text-[16px] md:text-[17.5px] text-black/75 leading-[1.7] whitespace-pre-line">
                        {f.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
