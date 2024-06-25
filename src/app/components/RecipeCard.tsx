import { Recipe } from "@/types/Recipe";
import Link from "next/link";
import ContentfulImage from "./ContentfulImage";

type Props = {
  data: Recipe;
};

const RecipeCard = ({ data }: Props) => {
  const { image, name, level, time } = data.fields;
  return (
    <Link href={`recipes/${data.fields.slug}`} className="block">
      <div className="p-5 w-full flex gap-2">
        <div className="w-1/3 h-24">
          {image && (
            <ContentfulImage
              alt={image.fields.title || ""}
              src={image.fields.file?.url || ""}
            />
          )}
        </div>
        <div className="w-2/3 flex flex-col justify-between">
          <h2 className="text-lg">{name}</h2>

          <div className="flex gap-2 text-sm">
            <span>{level}</span>
            <span>{time} mins</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
