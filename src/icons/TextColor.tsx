import type { SVGProps } from "react";
const SvgTextColor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#212529"
      d="M22 21h2L17 4h-2L8 21h2l1.61-4h8.74zm-9.57-6 3.44-8.37h.26L19.54 15zM6 24h20v4H6z"
    />
  </svg>
);
export default SvgTextColor;
