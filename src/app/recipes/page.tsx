import Hero from '@app/components/Hero'
import { getPage } from '@services/getPage'
import { getRecipes } from '@services/getRecipes'
import RecipesList from '@app/components/RecipesList'

export default async function RecipesPage() {
  const page = await getPage('recipes')
  const recipes = await getRecipes()

  const hero = page.hero

  return (
    <div className="space-y-4">
      {hero && <Hero image={hero.fields.image} heading={hero.fields.heading} />}

      <RecipesList recipes={recipes} />
    </div>
  )
}
