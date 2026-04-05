import { defineType, defineField } from "sanity";

export const heroStat = defineType({
  name: "heroStat",
  title: "Hero Stat",
  type: "document",
  fields: [
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      description: 'The main number/value displayed (e.g. "1,492%", "21.3%", "#1")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: 'Label below the value (e.g. "Absolute Returns")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subheading",
      title: "Subheading",
      type: "string",
      description: 'Optional smaller text below the heading (e.g. "vs 14% benchmark")',
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
      title: "value",
      subtitle: "heading",
    },
  },
});
