import type { Hero } from "@/types/Hero";
import ContentfulImage from "@/app/components/ContentfulImage";

const Hero = ({ hero }: { hero: Hero }) => {
  const { image } = hero.fields;

  return (
    <div>
      <p>{hero.fields.heading}</p>

      {image && (
        <ContentfulImage
          alt={image.fields.title || ""}
          src={image.fields.file?.url || ""}
          width={image.fields.file?.details.image?.width || 100}
          height={image.fields.file?.details.image?.height || 100}
        />
      )}
    </div>
  );
};

export default Hero;
