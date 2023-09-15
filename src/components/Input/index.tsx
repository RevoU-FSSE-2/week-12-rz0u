import { Input as BaseInput, InputProps } from "antd";

interface Props extends InputProps {
  name?: string;
}

const Input: React.FC<Props> = (props) => {
  return <BaseInput {...props} />;
};

export default Input;
