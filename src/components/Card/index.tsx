import { Card as BaseCard, CardProps } from "antd";
import { ReactNode } from "react";

interface Props extends CardProps {
  title?: string;
  children: ReactNode;
}

const Card = ({ title, children }: Props) => {
  return <BaseCard title={title}>{children}</BaseCard>;
};

export default Card;
