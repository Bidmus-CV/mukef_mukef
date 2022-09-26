import { InputHTMLAttributes, DetailedHTMLProps } from "react";
import "./Input.scss";

type InputProps = {
  customClasses?: string;
  icon?: string;
  password?: string;
  color?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
const Input = ({
  placeholder,
  customClasses,
  required = true,
  color,
  ...props
}: InputProps) => {
  return (
    <div className="input-style">
      <div className="input-container">
        <input
          placeholder={placeholder}
          required={required}
          className={`border-0 outline-none text-black font-normal bg-transparent  ${customClasses}`}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
