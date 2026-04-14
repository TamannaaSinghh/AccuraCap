import { defineType, defineField } from "sanity";

export const pmsProduct = defineType({
  name: "pmsProduct",
  title: "PMS Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      description: 'e.g. "Alpha10", "PicoPower", "Dynamo", "AlphaGen"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fields",
      title: "Detail Fields",
      type: "array",
      description:
        "Each row shown on the card. Mark a row as full width to make it span both columns (e.g. Product Profile).",
      of: [
        {
          type: "object",
          name: "productField",
          title: "Field",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description:
                'e.g. "Product Profile", "Universe of Investments", "CAGR since inception"',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "value",
              title: "Value",
              type: "text",
              rows: 4,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "fullWidth",
              title: "Full Width",
              type: "boolean",
              description:
                "If true, this field spans both columns (use for Product Profile).",
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "value",
            },
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
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
      title: "name",
    },
  },
});
