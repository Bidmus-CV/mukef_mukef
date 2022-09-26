import * as React from "react";
import { SVGProps } from "react";

const GreenBulletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#189D4D" d="M0 .5h8v8H0z" />
  </svg>
);

export default GreenBulletIcon;
