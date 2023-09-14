import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: "h1" | "h2" | "h3" | "p" | "span";
}

const Text = ({ children, type }: Props) => {
  if (type === "h1") {
    return <h1>{children}</h1>;
  }

  if (type === "h2") {
    return <h2>{children}</h2>;
  }

  if (type === "h3") {
    return <h3>{children}</h3>;
  }

  if (type === "span") {
    return <span>{children}</span>;
  }

  return <p>{children}</p>;
};

export default Text;
