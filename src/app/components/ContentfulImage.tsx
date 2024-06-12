import Image from "next/image";

type Props = {
  alt: string;
  src: string;
};

const ContentfulImage = ({ alt, src }: Props) => {
  return (
    <Image
      src={src.replace("//", "https://")}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "auto", height: "100%" }}
      // loader={() => `${src}?w=${width}&q=75`}
    />
  );
};

export default ContentfulImage;
