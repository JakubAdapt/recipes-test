import { Recipe } from "@/types/Recipe";
import Link from "next/link";

type Props = {
  data: Recipe;
};

const RecipeCard = ({ data }: Props) => {
  return (
    <Link href={`recipes/${data.fields.slug}`}>
      <div className="border border-black border-solid bg-slate-400 p-5 w-64">
        <h2>{data.fields.name}</h2>
        <p>{data.fields.level}</p>
        <p>{data.fields.time}</p>
      </div>
    </Link>
  );
};

export default RecipeCard;
