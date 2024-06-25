import { Entry } from "contentful";
import { TypeRecipeSkeleton } from "@/types/contentful/generated-types/TypeRecipe";

export type Recipe = Entry<
  TypeRecipeSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS",
  string
>;
