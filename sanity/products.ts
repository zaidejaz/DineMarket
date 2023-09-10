import { defineField } from "sanity";

export default {
  name: "products",
  type: "document",
  title: "Products",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Product Name",
      validation: (rule:any) => rule.required(),
    },
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      options: {
        list: [
          { title: "Male", value: "male" },
          { title: "Female", value: "female" },
          { title: "Kids", value: "kids" },
        ],
      },
      validation: (rule:any) => rule.required(),
    },
    {
      name: "type",
      type: "string",
      title: "Type",
    },
    {
      name: "image",
      type: "image",
      title: "Product Image",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      name: "sizes",
      type: "array",
      title: "Sizes",
      of: [{ type: "string" }],
    },
  ],
};
