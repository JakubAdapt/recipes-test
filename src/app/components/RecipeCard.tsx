import { Recipe } from "@/types/Recipe";
import Link from "next/link";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <Link
      href={`recipes/${recipe.fields.slug}`}
      className="border border-black border-solid bg-slate-400 p-5 w-64"
    >
      <h2>{recipe.fields.name}</h2>
      <p>{recipe.fields.level}</p>
      <p>{recipe.fields.time}</p>
    </Link>
  );
};

export default RecipeCard;
