import { type SchemaTypeDefinition } from "sanity";
import { collectionType } from "./documents/collectionType";
import { productType } from "./documents/productType";
import { tags } from "./documents/tags";
import { categoryType } from "./documents/categoryType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [collectionType, productType, tags, categoryType],
};
