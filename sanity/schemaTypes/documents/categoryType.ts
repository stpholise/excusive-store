import { defineType, defineField } from "sanity";

export const categoryType = defineType({
  name: "category",
  type: "document",
  title: "category",
  fields: [
    defineField({
      name: "categoryName",
      type: "string",
      title: "Category Name",
      validation: (rule) => rule.required().error("This Field is Required"),
    }),
    defineField({
      name: "categoryIcon",
      type: "image",
      title: "Category Icon",
      options: {
        hotspot: true,
        accept: "image/svg+xml",
      },
      description: "upload an svg icon for each this category ",
      validation: (rule) => [rule.required().error("this Field is Required")],
    }),
  ],
});
