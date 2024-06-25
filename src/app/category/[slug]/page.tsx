import ContentfulImage from "@/app/components/ContentfulImage";
import RecipeCard from "@/app/components/RecipeCard";
import { contentFulClient } from "@/services/contentful";
import { PageParams } from "@/types/PageParams";
import { TypeCategorySkeleton } from "@/types/contentful/generated-types/TypeCategory";
import { TypeRecipeSkeleton } from "@/types/contentful/generated-types/TypeRecipe";

async function getCategory(category: string) {
  const res =
    await contentFulClient.withoutUnresolvableLinks.getEntries<TypeCategorySkeleton>(
      {
        content_type: "category",
        "fields.slug": category,
      }
    );

  return res.items[0].fields;
}

async function getRecipesByCategory(category: string) {
  const res =
    await contentFulClient.withoutUnresolvableLinks.getEntries<TypeRecipeSkeleton>(
      {
        content_type: "recipe",
        "fields.category.sys.contentType.sys.id": "category",
        "fields.category.fields.slug": category,
        include: 2,
      }
    );

  return res.items;
}

export default async function CategoryPage({ params }: PageParams) {
  const category = await getCategory(params.slug);
  const recipes = await getRecipesByCategory(params.slug);

  return (
    <div>
      {category.image && (
        <ContentfulImage
          alt={category.image.fields.title || ""}
          src={category.image.fields.file?.url || ""}
        />
      )}

      <h1 className="text-center">{category.title}</h1>

      <div className="space-y-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.sys.id} data={recipe} />
        ))}
      </div>
    </div>
  );
}
