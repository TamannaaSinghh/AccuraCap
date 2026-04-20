import { defineType, defineField } from "sanity";

export const homeAifCard = defineType({
  name: "homeAifCard",
  title: "Home AIF Card",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Fund Title",
      type: "string",
      description: 'e.g. "Vectra Fund", "AlphaGen Next Fund"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: 'e.g. "CAT III Long Only"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "returns",
      title: "Returns",
      type: "string",
      description: 'Hero number shown on the card, e.g. "231%"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "marketCap",
      title: "Market Cap",
      type: "string",
      description: 'e.g. "Small & Micro Cap"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "stocks",
      title: "Stocks",
      type: "string",
      description: 'e.g. "30\u201350"',
    }),
    defineField({
      name: "benchmark",
      title: "Benchmark",
      type: "string",
      description: 'e.g. "vs 285% S&P BSE 500 TRI"',
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
