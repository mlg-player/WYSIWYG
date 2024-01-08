import type { SVGProps } from "react";
const SvgTextUnderline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#212529"
      d="M4 26h24v2H4zm12-3a7 7 0 0 1-7-7V5h2v11a5 5 0 1 0 10 0V5h2v11a7 7 0 0 1-7 7"
    />
  </svg>
);
export default SvgTextUnderline;
