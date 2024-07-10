import { contentFulClient } from "@services/contentful";
import { TypeCategorySkeleton } from "@typings/contentful/generated-types";
import ContentfulImage from "@app/components/ContentfulImage";
import Link from "next/link";

async function getCategories() {
  const res =
    await contentFulClient.withoutUnresolvableLinks.getEntries<TypeCategorySkeleton>(
      {
        content_type: "category",
      }
    );

  return res.items;
}

const CategoriesList = async () => {
  const categories = await getCategories();

  return (
    <div className="px-4 grid grid-cols-2 gap-4">
      {categories.map((category, index) => (
        <Link
          href={`category/${category.fields.slug}`}
          key={index}
          className="block w-full pb-6 bg-orange"
        >
          {category.fields.image && (
            <ContentfulImage
              alt={category.fields.image.fields.title || ""}
              src={category.fields.image.fields.file?.url || ""}
            />
          )}
          <p className="text-center">{category.fields.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesList;
