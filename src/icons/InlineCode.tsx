import type { SVGProps } from "react";
const SvgInlineCode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#212529"
      d="m31 16-7 7-1.41-1.41L28.17 16l-5.58-5.59L24 9zM1 16l7-7 1.41 1.41L3.83 16l5.58 5.59L8 23z"
    />
  </svg>
);
export default SvgInlineCode;
