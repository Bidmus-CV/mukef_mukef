import * as React from "react";
import { SVGProps } from "react";

const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.344 1.017a42.252 42.252 0 0 1 9.311 0c1.713.192 3.095 1.541 3.296 3.26a40.65 40.65 0 0 1 0 9.445c-.201 1.72-1.583 3.07-3.296 3.26-3.069.344-6.242.344-9.31 0-1.713-.19-3.095-1.54-3.296-3.26a40.652 40.652 0 0 1 0-9.444c.2-1.72 1.583-3.07 3.295-3.26ZM9 4.007a.75.75 0 0 1 .75.75V8.25h3.492a.75.75 0 0 1 0 1.5H9.75v3.493a.75.75 0 0 1-1.5 0V9.75H4.757a.75.75 0 0 1 0-1.5H8.25V4.757a.75.75 0 0 1 .75-.75Z"
      fill="#0C0C0C"
    />
  </svg>
);

export default AddIcon;
