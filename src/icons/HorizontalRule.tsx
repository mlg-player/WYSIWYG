import type { SVGProps } from "react";
const SvgHorizontalRule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path fill="#212529" d="M4 15h24v2H4z" />
  </svg>
);
export default SvgHorizontalRule;
