import { defineType, defineField } from "sanity";

export const homePmsCard = defineType({
  name: "homePmsCard",
  title: "Home PMS Card",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Product Title",
      type: "string",
      description: 'e.g. "Alpha10", "PicoPower"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: 'e.g. "Large Cap", "Mid & Small Cap"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "returns",
      title: "Returns",
      type: "string",
      description: 'Hero number shown on the card, e.g. "493%"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "marketCap",
      title: "Market Cap",
      type: "string",
      description: 'e.g. "Top 200 companies"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "stocks",
      title: "Stocks",
      type: "string",
      description: 'e.g. "10\u201320"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "benchmark",
      title: "Benchmark",
      type: "string",
      description: 'e.g. "vs 492% Nifty 50 TRI"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
    },
  },
});
