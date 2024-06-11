import { contentFulClient } from "@/lib/contentful";
import {
  TypeLandingPageSkeleton,
  TypeRecipeSkeleton,
} from "@/types/contentful/generated-types";
import RecipeCard from "@/app/components/RecipeCard";

async function getPage() {
  const res = await contentFulClient.getEntries<TypeLandingPageSkeleton>({
    content_type: "landingPage",
    "fields.slug": "recipes",
  });

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

  return (
    <div>
      <h1>{page.internalTitle}</h1>

      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  );
}
