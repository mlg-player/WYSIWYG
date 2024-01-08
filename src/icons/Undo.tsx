import type { SVGProps } from "react";
const SvgUndo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#212529"
      d="M20 10H7.815l3.587-3.586L10 5l-6 6 6 6 1.402-1.415L7.818 12H20a6 6 0 1 1 0 12h-8v2h8a8 8 0 0 0 0-16"
    />
  </svg>
);
export default SvgUndo;
