import Hero from '@app/components/hero'
import { getPage } from '@services/getPage'
import { getRecipes } from '@services/getRecipes'
import RecipesList from '@app/components/recipes-list'

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const page = await getPage('recipes')
  const recipes = await getRecipes(searchParams.search)

  let hero

  if (page.isOk() && page.value) {
    hero = page.value[0].hero
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {hero && <Hero image={hero.image} heading={hero.heading} />}

      {recipes.isOk() && recipes.value ? (
        <RecipesList recipes={recipes.value} />
      ) : (
        <div>Failed to load recipes</div>
      )}
    </div>
  )
}
