import { defineType, defineField } from "sanity";

export const pmsDocument = defineType({
  name: "pmsDocument",
  title: "PMS Document",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Document heading (e.g. \"AccuraCap Disclosure\")",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "displayType",
      title: "Display Type",
      type: "string",
      options: {
        list: [
          { title: "Embed (PDF viewer)", value: "embed" },
          { title: "Download Link", value: "download" },
        ],
        layout: "radio",
      },
      initialValue: "embed",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "file",
      title: "File",
      type: "file",
      description: "Upload a PDF or any other file (e.g. Excel)",
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
