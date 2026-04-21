import { defineType, defineField } from "sanity";

export const heroStatsDisclaimer = defineType({
  name: "heroStatsDisclaimer",
  title: "Hero Stats Disclaimer",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "Disclaimer Text",
      type: "string",
      description:
        'Shown below the hero stats strip on the home page. e.g. "*as on 31st Jan 2026 · net of all expenses/fees"',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare({ title }) {
      return {
        title: "Hero Stats Disclaimer",
        subtitle: title,
      };
    },
  },
});
