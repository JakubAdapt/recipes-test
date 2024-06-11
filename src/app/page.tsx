import { contentFulClient } from "@/lib/contentful";
import { TypeLandingPageSkeleton } from "@/types/contentful/generated-types";
import Link from "next/link";
import Hero from "@/app/components/Hero";

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
  const hero = page.hero;

  console.log(hero);

  return (
    <main className="">
      <h1>{page.internalTitle}</h1>

      {hero && <Hero hero={hero} />}

      <Link href="/recipes">Go to Recipes Page</Link>
    </main>
  );
}
