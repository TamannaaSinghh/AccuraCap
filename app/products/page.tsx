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
      <section id="pms" className="pt-28 px-3 md:px-4">
        <div className="max-w-[1400px] mx-auto px-0 md:px-4 lg:px-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-black leading-tight">
            Our PMS Strategies
          </h1>
          <div className="mt-5 h-[2px] w-16 bg-accent" />

          <div className="mt-12 space-y-7">
            {pmsProducts.map((product) => (
              <div
                key={product._id}
                className="border border-border overflow-hidden"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 px-8 py-6 border-b border-border bg-surface border-l-4 border-l-accent">
                  <h3 className="text-2xl md:text-3xl font-bold text-accent">{product.name}</h3>
                </div>

                {/* Card Body */}
                <div className="px-8 py-8 grid sm:grid-cols-2 gap-x-12 gap-y-7">
                  {product.fields.map((f, i) => (
                    <div key={`${product._id}-${i}`} className={f.fullWidth ? "sm:col-span-2" : ""}>
                      <p className="text-black/50 text-sm uppercase tracking-wider mb-2 font-medium">
                        {f.label}
                      </p>
                      <p className="text-base md:text-lg text-black/75 leading-relaxed whitespace-pre-line">
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
      <section id="aif" className="bg-surface pb-16 pt-20 md:pt-24 px-3 md:px-4">
        <div className="max-w-[1400px] mx-auto px-0 md:px-4 lg:px-6">

          <h1 className="text-3xl sm:text-4xl md:text-5xl text-black leading-tight">
            Our AIF Strategies
          </h1>
          <div className="mt-5 h-[2px] w-16 bg-accent" />

          <div className="mt-12 space-y-7">
            {aifProducts.map((product) => (
              <div
                key={product._id}
                className="border border-border overflow-hidden"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 px-8 py-6 border-b border-border bg-white border-l-4 border-l-accent">
                  <h3 className="text-2xl md:text-3xl font-bold text-accent">{product.name}</h3>
                </div>

                {/* Card Body */}
                <div className="px-8 py-8 grid sm:grid-cols-2 gap-x-12 gap-y-7 bg-white">
                  {product.fields.map((f, i) => (
                    <div key={`${product._id}-${i}`} className={f.fullWidth ? "sm:col-span-2" : ""}>
                      <p className="text-black/50 text-sm uppercase tracking-wider mb-2 font-medium">
                        {f.label}
                      </p>
                      <p className="text-base md:text-lg text-black/75 leading-relaxed whitespace-pre-line">
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
