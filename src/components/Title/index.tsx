import { Typography, TypographyProps } from "antd";
import { ReactNode } from "react";

interface Props extends TypographyProps {
  children: ReactNode;
}

const { Title } = Typography;

const Head: React.FC<Props> = ({ children }: Props) => {
  <Title>{children}</Title>;
};
