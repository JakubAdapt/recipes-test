import Hero from '@app/components/molecules/hero'
import { getPage } from '@services/getPage'
import { getRecipes } from '@services/getRecipes'
import RecipesList from '@app/components/lists/recipes-list'
import { FiltersContainer } from '@app/components/molecules/filters-container'

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const page = await getPage('recipes')
  const { search, level, category, tag } = searchParams
  const recipes = await getRecipes(search, level, category, tag)

  if (recipes.isErr()) {
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

      {!recipes.value ? (
        <div className="text-center text-yellow">No recipes found</div>
      ) : (
        <RecipesList recipes={recipes.value} />
      )}
    </div>
  )
}
