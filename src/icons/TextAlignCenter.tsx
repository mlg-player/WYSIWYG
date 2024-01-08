import type { SVGProps } from "react";
const SvgTextAlignCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#212529"
      d="M6 6h20v2H6zm4 6h12v2H10zm-4 6h20v2H6zm4 6h12v2H10z"
    />
  </svg>
);
export default SvgTextAlignCenter;
