import type { SVGProps } from "react";
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path fill="#212529" d="m16 10 10 10-1.4 1.4-8.6-8.6-8.6 8.6L6 20z" />
  </svg>
);
export default SvgChevronUp;
