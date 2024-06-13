import { Entry, EntrySkeletonType } from "contentful";
import Button from "@/app/components/Button";
import { isButton } from "@/utils/isButton";
import { ReactNode } from "react";

type Props = {
  content: (
    | Entry<EntrySkeletonType, "WITHOUT_UNRESOLVABLE_LINKS", string>
    | undefined
  )[];
};

const Content = ({ content }: Props) => {
  const displayContent: ReactNode[] = [];

  content.forEach((section) => {
    if (section) {
      if (isButton(section)) {
        displayContent.push(<Button data={section} />);
      }
    }
  });

  return (
    <div className="px-4">
      {displayContent.map((content, index) => (
        <div key={index}>{content}</div>
      ))}
    </div>
  );
};

export default Content;
