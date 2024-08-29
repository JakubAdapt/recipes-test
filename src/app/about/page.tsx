import Hero from '@app/components/molecules/hero'
import { getPage } from '@services/getPage'

export default async function AboutPage() {
  const page = await getPage('about')

  let hero

  if (page.isOk() && page.value) {
    hero = page.value[0].hero
  }

  return <div>{hero && <Hero image={hero.image} heading={hero.heading} />}</div>
}
