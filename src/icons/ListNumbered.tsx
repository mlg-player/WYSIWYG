import type { SVGProps } from "react";
const SvgListNumbered = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#212529"
      d="M16 22h14v2H16zm0-14h14v2H16zm-8 4V4H6v1H4v2h2v5H4v2h6v-2zm2 16H4v-4a2 2 0 0 1 2-2h2v-2H4v-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6v2h4z"
    />
  </svg>
);
export default SvgListNumbered;
