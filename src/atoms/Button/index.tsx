import React, { ReactNode } from "react";

type propType = {
  children: ReactNode;
  customClasses?: string;
  outline?: Boolean;
};
const Button = ({ children, customClasses, outline }: propType) => {
  return (
    <button
      className={`h-[3.125rem] w-full flex items-center justify-center ${
        outline && "border"
      } ${customClasses}`}
    >
      {children}
    </button>
  );
};

export default Button;
