import { Button as BaseButton, ButtonProps } from "antd";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  title?: string;
  children: ReactNode;
}

const Button: React.FC<Props> = ({ title, children }: Props) => {
  return <BaseButton title={title}>{children}</BaseButton>;
};

export default Button;
