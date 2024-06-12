import ContentfulImage from "@/app/components/ContentfulImage";
import { contentFulClient } from "@/lib/contentful";
import { TypeRecipeSkeleton } from "@/types/contentful/generated-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getRecipe(slug: string) {
  const res =
    await contentFulClient.withoutUnresolvableLinks.getEntries<TypeRecipeSkeleton>(
      {
        content_type: "recipe",
        "fields.slug": slug.replace("/recipes/", ""),
        include: 2,
      }
    );

  return res.items[0].fields;
}

export default async function RecipePage({
  params,
}: {
  params: { slug: string };
}) {
  const recipe = await getRecipe(params.slug);

  return (
    <div>
      {recipe.image && (
        <ContentfulImage
          alt={recipe.image.fields.title || ""}
          src={recipe.image.fields.file?.url || ""}
        />
      )}

      <h1>{recipe.name}</h1>

      <p>{documentToReactComponents(recipe.ingredients)}</p>

      <p>{documentToReactComponents(recipe.instruction)}</p>

      <p>{recipe.time} minutes</p>

      <p>Diffuculty {recipe.level}</p>
    </div>
  );
}
