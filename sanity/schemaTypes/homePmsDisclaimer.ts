import { defineType, defineField } from "sanity";

export const homePmsDisclaimer = defineType({
  name: "homePmsDisclaimer",
  title: "Home PMS Disclaimer",
  type: "document",
  fields: [
    defineField({
      name: "text",
      title: "Disclaimer Text",
      type: "string",
      description:
        'Shown below the PMS cards on the home page. e.g. "*as on 31st Jan 2026 \u00B7 net of all expenses/fees"',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare({ title }) {
      return {
        title: "Home PMS Disclaimer",
        subtitle: title,
      };
    },
  },
});
