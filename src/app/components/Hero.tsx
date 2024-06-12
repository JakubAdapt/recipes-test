import type { Hero } from "@/types/Hero";
import ContentfulImage from "@/app/components/ContentfulImage";

const Hero = ({ hero }: { hero: Hero }) => {
  const { image } = hero.fields;

  return (
    <div className="relative w-full h-60">
      {image && (
        <ContentfulImage
          alt={image.fields.title || ""}
          src={image.fields.file?.url || ""}
        />
      )}

      <h1 className="absolute top-0 left-0 right-0 bottom-0 text-center">
        {hero.fields.heading}
      </h1>
    </div>
  );
};

export default Hero;
