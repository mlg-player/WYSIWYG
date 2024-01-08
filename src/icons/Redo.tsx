import type { SVGProps } from "react";
const SvgRedo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#212529"
      d="M12 10h12.185l-3.587-3.586L22 5l6 6-6 6-1.402-1.415L24.182 12H12a6 6 0 1 0 0 12h8v2h-8a8 8 0 0 1 0-16"
    />
  </svg>
);
export default SvgRedo;
