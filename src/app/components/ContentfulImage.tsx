import Image from "next/image";

type Props = {
  alt: string;
  src: string;
  width: number;
  height: number;
};

const ContentfulImage = ({ alt, src, width, height }: Props) => {
  return (
    <Image
      src={src.replace("//", "https://")}
      {...{ alt, width, height }}
      // loader={() => `${src}?w=${width}&q=75`}
    />
  );
};

export default ContentfulImage;
