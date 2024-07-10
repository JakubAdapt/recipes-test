import { Entry } from "contentful";
import { TypeRecipeSkeleton } from "@typings/contentful/generated-types/TypeRecipe";

export type Recipe = Entry<
  TypeRecipeSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS",
  string
>;
