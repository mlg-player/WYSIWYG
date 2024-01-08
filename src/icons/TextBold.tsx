import type { SVGProps } from "react";
const SvgTextBold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#212529"
      d="M18.25 25H9V7h8.5a5.25 5.25 0 0 1 4 8.65A5.25 5.25 0 0 1 18.25 25M12 22h6.23a2.249 2.249 0 1 0 0-4.5H12zm0-7.5h5.5a2.249 2.249 0 1 0 0-4.5H12z"
    />
  </svg>
);
export default SvgTextBold;
