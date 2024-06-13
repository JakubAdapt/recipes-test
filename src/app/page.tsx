import { contentFulClient } from "@/services/contentful";
import { TypeLandingPageSkeleton } from "@/types/contentful/generated-types";
import Hero from "@/app/components/Hero";
import Content from "./components/Content";

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
    <main className="space-y-4">
      {hero && <Hero data={hero} />}

      {sections && <Content content={sections} />}
    </main>
  );
}
