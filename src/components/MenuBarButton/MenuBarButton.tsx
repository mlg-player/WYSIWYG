import { ChevronDown } from "../../icons";
import cn from "../../utils/classNames";
import css from "./MenuBarButton.module.css";

type MenuBarButtonProps = {
  children: React.ReactNode;
  is_open?: boolean;
};

const MenuBarButton: React.FC<MenuBarButtonProps> = (props) => {
  const { children, is_open } = props;

  return (
    <div
      className={cn(css.container, {
        [css.open]: is_open,
      })}
    >
      {children}
      <ChevronDown
        className={cn(css.icon, {
          [css.open]: is_open,
        })}
      />
    </div>
  );
};

export default MenuBarButton;
