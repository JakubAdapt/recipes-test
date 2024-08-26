import Hero from '@app/components/hero'
import { getPage } from '@services/getPage'
import { getRecipes } from '@services/getRecipes'
import RecipesList from '@app/components/recipes-list'
import { FiltersContainer } from '@app/components/filters-container'

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const page = await getPage('recipes')
  const recipes = await getRecipes(searchParams.search)

  if (recipes.isErr() || !recipes.value) {
    throw new Error('Failed to load recipes')
  }

  let hero

  if (page.isOk() && page.value) {
    hero = page.value[0].hero
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {hero && <Hero image={hero.image} heading={hero.heading} />}

      <FiltersContainer />

      <RecipesList recipes={recipes.value} />
    </div>
  )
}
