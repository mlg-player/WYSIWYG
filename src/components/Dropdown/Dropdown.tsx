import { CSSProperties, useEffect, useMemo, useState } from "react";
import cn from "../../utils/classNames";
import css from "./Dropdown.module.css";
import "./Dropdown.css";
import { createPortal } from "react-dom";

type DropdownProps = {
  children: React.ReactNode;
  dropdown: React.ReactNode;
  fullWidth?: boolean;
  isOpen?: boolean;
  onOpen?: (value: boolean) => void;
};
let portalRoot: HTMLDivElement | null = null;

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { children, dropdown, fullWidth, isOpen: is_open, onOpen } = props;

  const [style, setStyle] = useState<CSSProperties>({});
  const listener = () => {
    if (onOpen) {
        onOpen(false);
    }
    window.removeEventListener("click", listener)
  };
  const handleOpen: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (is_open === false && portalRoot) {
      const coords = event.currentTarget.getBoundingClientRect();
      if (!coords) return;
      document.body.appendChild(portalRoot);
      const { x, y, height } = coords;
      const newStyle: CSSProperties = {
        left: x,
        top: y + height + 4,
        width: fullWidth ? coords.width : undefined,
      };
      setStyle(newStyle);
      setTimeout(() => {
        window.addEventListener("click", listener);
      }, 0);
    } else if (portalRoot) {
      document.body.removeChild(portalRoot);
    }
    if (onOpen) onOpen(!is_open);
  };

  const dropdownRenderer = useMemo(() => {
    if (!is_open) return null;
    return (
      <div
        className={cn({
          [css.dropdown__dropdown]: true,
        })}
        style={style}
      >
        {dropdown}
      </div>
    );
  }, [dropdown, is_open, style]);

  return (
    <div
      onClick={handleOpen}
      className={cn({
        [css.dropdown]: true,
      })}
    >
      {children}
      <DropdownPortal>{dropdownRenderer}</DropdownPortal>
    </div>
  );
};

type DropdownPortalProps = {
  children: React.ReactNode;
};

const DropdownPortal: React.FC<DropdownPortalProps> = (props) => {
  const { children } = props;

  useEffect(() => {
    if (!portalRoot) {
      portalRoot = document.createElement("div");
      portalRoot.classList.add("dropdown-portal-root");
    }
  }, []);
  if (!portalRoot) return null;
  return createPortal(children, portalRoot);
};

export default Dropdown;
