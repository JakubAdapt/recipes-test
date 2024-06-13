import { contentFulClient } from "@/services/contentful";
import { TypeCategorySkeleton } from "@/types/contentful/generated-types";

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
    <div className="px-4 space-y-2 space-x-2 flex flex-wrap">
      {categories.map((category, index) => (
        <div key={index} className="p-2 w-1/3 bg-orange-300">
          {category.fields.title}
        </div>
      ))}
    </div>
  );
};

export default CategoriesList;
