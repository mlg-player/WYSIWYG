import type { SVGProps } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.3222 12.2385C11.5766 12.9573 10.3987 12.9665 9.64207 12.2593L8.89713 11.563C8.53849 11.2278 7.97779 11.2403 7.63453 11.5913V11.5913C7.28456 11.9491 7.29221 12.5232 7.6516 12.8716L9.0374 14.2148C10.1451 15.2884 11.9094 15.2747 13.0003 14.184L17.2773 9.90761C17.6019 9.58306 17.6228 9.06363 17.3254 8.71401V8.71401C16.9962 8.32707 16.4089 8.29806 16.0432 8.65067L12.3222 12.2385Z"
      fill="white"
    />
  </svg>
);
export default SvgCheck;
