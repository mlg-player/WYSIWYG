import type { SVGProps } from "react";
const SvgTextItalic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#212529"
      d="M25 9V7H12v2h5.14l-4.37 14H7v2h13v-2h-5.14l4.37-14z"
    />
  </svg>
);
export default SvgTextItalic;
