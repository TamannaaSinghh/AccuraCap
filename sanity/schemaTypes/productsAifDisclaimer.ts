import { defineType, defineField } from "sanity";

export const productsAifDisclaimer = defineType({
  name: "productsAifDisclaimer",
  title: "Products AIF Disclaimer",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "Disclaimer Text",
      type: "text",
      rows: 4,
      description:
        'Shown below the AIF section on the Products page. Supports multi-line text.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare({ title }) {
      return {
        title: "Products AIF Disclaimer",
        subtitle: title,
      };
    },
  },
});
