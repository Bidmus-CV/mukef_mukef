import { SVGProps } from "react";

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.75 1a.75.75 0 0 0-1.5 0v4.25H1a.75.75 0 0 0 0 1.5h4.25V11a.75.75 0 0 0 1.5 0V6.75H11a.75.75 0 0 0 0-1.5H6.75V1Z"
      fill="#797979"
    />
  </svg>
);

export default PlusIcon;
