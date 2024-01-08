import type { SVGProps } from "react";
const SvgTextAlignRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#212529"
      d="M6 6h14v2H6zm4 6h10v2H10zm-4 6h14v2H6zm4 6h10v2H10zM24 4h2v24h-2z"
    />
  </svg>
);
export default SvgTextAlignRight;
