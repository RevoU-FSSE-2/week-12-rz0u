import { Button as BaseButton } from "antd";
import { ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
}

const Button = ({ title, children }: Props) => {
  return <BaseButton title={title}>{children}</BaseButton>;
};

export default Button;
