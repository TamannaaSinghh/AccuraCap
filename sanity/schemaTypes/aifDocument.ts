import { defineType, defineField } from "sanity";

export const aifDocument = defineType({
  name: "aifDocument",
  title: "AIF Document",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'Document heading (e.g. "AIF Voting Policy")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "file",
      title: "PDF File",
      type: "file",
      options: { accept: ".pdf" },
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
    },
  },
});
