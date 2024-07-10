import type { ButtonType } from "@typings/Button";
import Link from "next/link";

type Props = {
  data: ButtonType;
};

const Button = ({ data }: Props) => {
  const buttonTag = (
    <button className="bg-orange-400 py-2 px-4 rounded w-full">
      {data.fields.label}
    </button>
  );

  if (data.fields.link) {
    return <Link href={data.fields.link}>{buttonTag}</Link>;
  }

  return buttonTag;
};

export default Button;
