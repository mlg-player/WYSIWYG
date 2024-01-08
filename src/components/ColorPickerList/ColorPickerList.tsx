import css from "./ColorPickerList.module.css";
import { colorsList } from "./colors";
import ColorPicker from "./ColorPicker";

interface ColorPickerListProps {
  selected: string;
  onSelect: (color: string) => void;
}

const ColorPickerList: React.FC<ColorPickerListProps> = (props) => {
  const { onSelect, selected } = props;

  return (
    <div className={css.colorPickerList}>
      {colorsList.map((color) => (
        <ColorPicker
          key={color}
          color={color}
          is_selected={color === selected}
          onClick={onSelect}
        />
      ))}
    </div>
  );
};
export default ColorPickerList;
