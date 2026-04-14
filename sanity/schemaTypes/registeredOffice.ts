import { defineType, defineField } from "sanity";

export const registeredOffice = defineType({
  name: "registeredOffice",
  title: "Registered Office",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: 'Label shown above the address (e.g. "Registered Office")',
      initialValue: "Registered Office",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "addressLine1",
      title: "Address Line 1",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "addressLine2",
      title: "Address Line 2",
      type: "string",
    }),
    defineField({
      name: "addressLine3",
      title: "Address Line 3",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "heading",
      subtitle: "addressLine1",
    },
  },
});
