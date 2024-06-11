import { Entry } from "contentful";
import { TypeRecipeSkeleton } from "@/types/contentful/generated-types/TypeRecipe";

export type Recipe = Entry<TypeRecipeSkeleton, undefined, string>;
