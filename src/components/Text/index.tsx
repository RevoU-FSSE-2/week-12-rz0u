import { ReactNode } from "react";
import { Typography } from "antd";

interface Props {
  children?: ReactNode;
  font?: "default" | "secondary" | "strong";
}

const Text = ({ children, font }: Props) => {
  if (font === "secondary") {
    return <Typography.Text type="secondary">{children}</Typography.Text>;
  }

  if (font === "strong") {
    return <Typography.Text strong>{children}</Typography.Text>;
  }

  return <Typography.Text>{children}</Typography.Text>;
};

export default Text;
