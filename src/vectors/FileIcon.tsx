import * as React from "react";
import { SVGProps } from "react";

const FileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.295 4.132V1.465m5.334 2.667V1.465m-6 5.333h6.666m-8 6.667h9.334c.736 0 1.333-.597 1.333-1.333v-8c0-.737-.597-1.334-1.333-1.334H3.295c-.736 0-1.333.597-1.333 1.334v8c0 .736.597 1.333 1.333 1.333Z"
      stroke="#858585"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FileIcon;
