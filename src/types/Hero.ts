import { Entry } from "contentful";
import { TypeHeroSkeleton } from "@/types/contentful/generated-types/TypeHero";

export type Hero = Entry<
  TypeHeroSkeleton,
  "WITHOUT_UNRESOLVABLE_LINKS",
  string
>;
