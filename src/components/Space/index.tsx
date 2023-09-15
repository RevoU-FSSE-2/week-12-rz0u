import { Space as BaseSpace, SpaceProps } from "antd";
import { ReactNode } from "react";

interface Props extends SpaceProps {
  children: ReactNode;
}

const Space = ({ children }: Props) => {
  return <BaseSpace>{children}</BaseSpace>;
};

export default Space;
