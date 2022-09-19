import { InputHTMLAttributes, DetailedHTMLProps } from "react";
import "./Input.scss";

type InputProps = {
  icon?: string;
  password?: string;
  color?: string;
  variant?: "small" | "large";
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = ({
  placeholder = "",
  required = true,
  color,
  variant = "large",
  ...props
}: InputProps) => {
  return (
    <div className="input-style">
      <div className="input-container">
        <input placeholder={placeholder} required={required} {...props} />
      </div>
    </div>
  );
};

export default Input;
