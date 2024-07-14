import RecipeCard from '@app/components/RecipeCard'
import Hero from '@app/components/Hero'
import { getPage } from '@services/getPage'
import { getRecipes } from '@services/getRecipes'

export default async function RecipesPage() {
  const page = await getPage('recipes')
  const recipes = await getRecipes()

  const hero = page.hero

  return (
    <div>
      {hero && <Hero data={hero} />}

      <div className="space-y-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} data={recipe} />
        ))}
      </div>
    </div>
  )
}
