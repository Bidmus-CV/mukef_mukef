import * as React from "react";
import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.973 12.526 11.5 10.073a6 6 0 1 0-.927.926l2.454 2.454a.665.665 0 0 0 .946 0 .667.667 0 0 0 0-.927ZM6.833 11a4.666 4.666 0 1 1 0-9.332 4.666 4.666 0 0 1 0 9.332Z"
      fill="#757886"
    />
  </svg>
);

export default SearchIcon;
