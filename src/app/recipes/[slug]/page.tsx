import ContentfulImage from "@app/components/ContentfulImage";
import { contentFulClient } from "@services/contentful";
import { PageParams } from "@typings/PageParams";
import { TypeRecipeSkeleton } from "@typings/contentful/generated-types";
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

export default async function RecipePage({ params }: PageParams) {
  const recipe = await getRecipe(params.slug);

  return (
    <div className="relative h-screen bg-black">
      {/* Image container */}
      <div className="absolute top-0 h-3/5 w-full">
        {recipe.image && (
          <ContentfulImage
            alt={recipe.image.fields.title || ""}
            src={recipe.image.fields.file?.url || ""}
            priority
          />
        )}

        {/* Custom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 flex justify-center">
        <div className="bg-white text-black rounded-t-lg shadow-lg p-5 w-11/12 mt-[300px] space-y-4">
          <h1 className="font-semibold text-lg">{recipe.name}</h1>

          <p className="flex justify-between text-green">
            <span>{recipe.level}</span>
            <span>{recipe.time} minutes</span>
          </p>

          <div>{documentToReactComponents(recipe.ingredients)}</div>

          <div>{documentToReactComponents(recipe.instruction)}</div>
        </div>
      </div>
    </div>
  );
}
