import type { SVGProps } from "react";
const SvgImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#212529"
      d="M19 14a3 3 0 1 0 0-5.999A3 3 0 0 0 19 14m0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
    />
    <path
      fill="#212529"
      d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H6v-6l5-5 5.59 5.59a2 2 0 0 0 2.82 0L21 19l5 5zm0-4.83-3.59-3.59a2 2 0 0 0-2.82 0L18 19.17l-5.59-5.59a2 2 0 0 0-2.82 0L6 17.17V6h20z"
    />
  </svg>
);
export default SvgImage;
