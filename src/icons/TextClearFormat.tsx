import type { SVGProps } from "react";
const SvgTextClearFormat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#212529"
      d="m29.438 16.572-7.985-7.986a2 2 0 0 0-2.829 0l-5.358 5.358L9 2H7L2 16h2l.999-3h6l.803 2.408-7.216 7.216a2 2 0 0 0 0 2.829L9.132 30h9.59l10.716-10.717a1.915 1.915 0 0 0 0-2.712zM5.665 11l2.331-7 2.336 7zm12.23 17H9.96L6 24.038l6.312-6.311 7.928 7.927zm3.76-3.76-7.928-7.927L20.039 10l7.927 7.927z"
    />
  </svg>
);
export default SvgTextClearFormat;
