import { contentFulClient } from "@/services/contentful";
import {
  TypeLandingPageSkeleton,
  TypeRecipeSkeleton,
} from "@/types/contentful/generated-types";
import RecipeCard from "@/app/components/RecipeCard";
import Hero from "@/app/components/Hero";

async function getPage() {
  const res =
    await contentFulClient.withoutUnresolvableLinks.getEntries<TypeLandingPageSkeleton>(
      {
        content_type: "landingPage",
        "fields.slug": "recipes",
        include: 2,
      }
    );

  return res.items[0].fields;
}

async function getRecipes() {
  const res = await contentFulClient.getEntries<TypeRecipeSkeleton>({
    content_type: "recipe",
  });

  return res.items;
}

export default async function RecipesPage() {
  const page = await getPage();
  const recipes = await getRecipes();

  const hero = page.hero;

  return (
    <div>
      {hero && <Hero data={hero} />}

      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} data={recipe} />
      ))}
    </div>
  );
}
