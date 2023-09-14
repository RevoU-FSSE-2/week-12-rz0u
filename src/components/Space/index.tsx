import { Space as BaseSpace } from "antd";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return <BaseSpace>{children}</BaseSpace>;
};

export default Card;
