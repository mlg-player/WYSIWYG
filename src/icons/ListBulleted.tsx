import type { SVGProps } from "react";
const SvgListBulleted = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#212529"
      d="M7 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 26a3 3 0 1 0 0-6 3 3 0 0 0 0 6M16 22h14v2H16zm0-14h14v2H16z"
    />
  </svg>
);
export default SvgListBulleted;
