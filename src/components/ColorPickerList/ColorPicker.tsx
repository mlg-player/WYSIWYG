import { memo } from "react";
import css from "./ColorPickerList.module.css";
import cn from "../../utils/classNames";

export type ColorPickerProps = {
  color: string;
  is_selected: boolean;
  onClick: (color: string) => void;
};

export const ColorPicker: React.FC<ColorPickerProps> = memo((props) => {
  const { color, is_selected, onClick } = props;
  const style = {
    backgroundColor: `var(--oc-${color})`,
  };

  return (
    <div
      style={{
        border: `1px solid var(--oc-${color})`,
      }}
      onClick={() => onClick(color)}
      className={cn(css.colorPicker, {
        [css.selected]: is_selected,
      })}
    >
      <div style={style} className={css.colorPicker__color} />
      <div className={css.icon} />
    </div>
  );
});

export default ColorPicker;
