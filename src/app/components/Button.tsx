import type { ButtonType } from '@typings/Button'
import Link from 'next/link'

type Props = {
  data: ButtonType
}

const Button = ({ data }: Props) => {
  const buttonTag = (
    <button className="w-full rounded bg-orange px-4 py-2 text-off-black">
      {data.fields.label}
    </button>
  )

  if (data.fields.link) {
    return <Link href={data.fields.link}>{buttonTag}</Link>
  }

  return buttonTag
}

export default Button
