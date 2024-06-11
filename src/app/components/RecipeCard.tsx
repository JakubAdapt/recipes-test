import { Recipe } from "@/types/Recipe";

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="border border-black border-solid bg-slate-400 p-5 w-64">
      <h2>{recipe.fields.name}</h2>
      <p>{recipe.fields.level}</p>
      <p>{recipe.fields.time}</p>
    </div>
  );
};

export default RecipeCard;
