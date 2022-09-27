import * as React from "react";
import { SVGProps } from "react";

const SlashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.61 1.344.96 30.024"
      stroke="#858585"
      strokeWidth={1.324}
      strokeLinecap="round"
    />
  </svg>
);

export default SlashIcon;
