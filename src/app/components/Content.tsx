import { Entry, EntrySkeletonType } from 'contentful'
import Button from '@app/components/button'
import { isButton } from '@utils/isButton'
import { ReactNode } from 'react'

type Props = {
  contentBody: (Entry<EntrySkeletonType, 'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined)[]
}

const Content = ({ contentBody }: Props) => {
  const displayContent: ReactNode[] = []

  contentBody.forEach((section) => {
    if (section) {
      if (isButton(section)) {
        displayContent.push(<Button data={section} />)
      }
    }
  })

  return (
    <div className="px-4">
      {displayContent.map((content, index) => (
        <div key={index}>{content}</div>
      ))}
    </div>
  )
}

export default Content
