import Hero from '@app/components/hero'
import RecipesList from '@app/components/recipes-list'
import { getCategories } from '@services/getCategories'
import { getRecipesByCategory } from '@services/getRecipesByCategory'
import { PageParams } from '@typings/PageParams'

export default async function CategoryPage({ params }: PageParams) {
  const categories = await getCategories(params.slug)
  const recipes = await getRecipesByCategory(params.slug)

  let hero

  if (categories.isOk() && categories.value) {
    hero = {
      image: categories.value[0].image,
      heading: categories.value[0].title,
    }
  }

  return (
    <div className="space-y-4 md:space-y-6">
      {hero && <Hero image={hero.image} heading={hero.heading} />}

      {/* <RecipesList recipes={recipes} /> */}
    </div>
  )
}
