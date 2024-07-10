import type { HeroType } from '@typings/Hero'
import ContentfulImage from '@app/components/ContentfulImage'

type Props = {
  data: HeroType
}

const Hero = ({ data }: Props) => {
  const { image } = data.fields

  return (
    <div className="relative h-60 w-full bg-gray">
      {image && (
        <ContentfulImage
          alt={image.fields.title || ''}
          src={image.fields.file?.url || ''}
          className="opacity-50"
        />
      )}

      <h1 className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-xl font-semibold text-off-black [text-shadow:0_0_1px_var(--color-orange)]">
        {data.fields.heading}
      </h1>
    </div>
  )
}

export default Hero
