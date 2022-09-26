import * as React from "react";
import { SVGProps } from "react";

const GrayBulletIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={8}
    height={9}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#999" d="M0 .5h8v8H0z" />
  </svg>
);

export default GrayBulletIcon;
