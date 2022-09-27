import * as React from "react";
import { SVGProps } from "react";

const ColoredFileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={13}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.357.6a.8.8 0 0 0-.8.8v.8h-.8a1.6 1.6 0 0 0-1.6 1.6v8a1.6 1.6 0 0 0 1.6 1.6h9.6a1.6 1.6 0 0 0 1.6-1.6v-8a1.6 1.6 0 0 0-1.6-1.6h-.8v-.8a.8.8 0 1 0-1.6 0v.8h-4.8v-.8a.8.8 0 0 0-.8-.8Zm0 4a.8.8 0 1 0 0 1.6h6.4a.8.8 0 1 0 0-1.6h-6.4Z"
      fill="#0B8EC2"
    />
  </svg>
);

export default ColoredFileIcon;
