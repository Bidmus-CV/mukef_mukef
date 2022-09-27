import * as React from "react";
import { SVGProps } from "react";

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={9}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.884.98a.735.735 0 0 0-1.037 0l-2.64 2.604L1.604.98A.735.735 0 1 0 .567 2.025l3.118 3.118a.736.736 0 0 0 1.044 0l3.155-3.118a.735.735 0 0 0 0-1.045Z"
      fill="#858585"
    />
  </svg>
);

export default ArrowDownIcon;
