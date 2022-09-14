import { SVGProps } from "react";

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={10}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.86 8.027 5 10.893 2.14 8.027a.67.67 0 1 0-.947.946l3.333 3.334a.668.668 0 0 0 .947 0l3.333-3.334a.67.67 0 1 0-.946-.946ZM2.14 4.973 5 2.107l2.86 2.866a.667.667 0 0 0 1.092-.217.667.667 0 0 0-.146-.73L5.473.694a.667.667 0 0 0-.947 0L1.193 4.027a.67.67 0 1 0 .947.946Z"
      fill="#434343"
    />
  </svg>
);

export default ArrowIcon;
