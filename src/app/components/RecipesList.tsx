import { RecipeFields } from '@services/getRecipes'
import RecipeCard from '@app/components/RecipeCard'

type Props = {
  recipes: RecipeFields[]
}

const RecipesList = ({ recipes }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 px-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.slug} data={recipe} />
      ))}
    </div>
  )
}

export default RecipesList
