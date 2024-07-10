import { contentFulClient } from "@services/contentful";
import Hero from "@app/components/Hero";
import Content from "@app/components/Content";
import CategoriesList from "@app/components/CategoriesList";
import { TypeLandingPageSkeleton } from "@typings/contentful/generated-types/TypeLandingPage";

async function getPage() {
  const res =
    await contentFulClient.withoutUnresolvableLinks.getEntries<TypeLandingPageSkeleton>(
      {
        content_type: "landingPage",
        "fields.slug": "home",
        include: 2,
      }
    );

  return res.items[0].fields;
}

export default async function Home() {
  const page = await getPage();
  const { hero, sections } = page;

  return (
    <div className="space-y-4">
      {hero && <Hero data={hero} />}

      <CategoriesList />

      {sections && <Content content={sections} />}
    </div>
  );
}
