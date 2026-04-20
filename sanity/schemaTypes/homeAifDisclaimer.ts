import { defineType, defineField } from "sanity";

export const homeAifDisclaimer = defineType({
  name: "homeAifDisclaimer",
  title: "Home AIF Disclaimer",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "Disclaimer Text",
      type: "string",
      description:
        'Shown below the AIF cards on the home page. e.g. "*as on 31st March 2026 \u00B7 net of all expenses/fees"',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare({ title }) {
      return {
        title: "Home AIF Disclaimer",
        subtitle: title,
      };
    },
  },
});
