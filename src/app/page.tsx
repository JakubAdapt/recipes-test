import Hero from '@app/components/Hero'
import Content from '@app/components/Content'
import CategoriesList from '@app/components/CategoriesList'
import { getPage } from '@services/getPage'

export default async function Home() {
  const page = await getPage('home')
  const { hero, sections } = page

  return (
    <div className="space-y-4 pb-4">
      {hero && <Hero image={hero.fields.image} heading={hero.fields.heading} />}

      <CategoriesList />

      {sections && <Content content={sections} />}
    </div>
  )
}
