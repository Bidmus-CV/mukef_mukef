import * as React from "react";
import { SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.801 3.365a1.531 1.531 0 1 0-2.165-2.166L9.5 7.335 3.364 1.199A1.531 1.531 0 1 0 1.2 3.364L7.334 9.5 1.2 15.636A1.531 1.531 0 0 0 3.364 17.8L9.5 11.666l6.136 6.135a1.531 1.531 0 1 0 2.165-2.165L11.665 9.5l6.136-6.136Z"
      fill="#AF6363"
    />
  </svg>
);

export default CloseIcon;
