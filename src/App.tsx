import Wysiwyg from "./components/Input/Input";
// import { useState } from "react";
// import ColorPickerList from "./components/ColorPickerList/ColorPickerList";
// import Dropdown from "./components/Dropdown/Dropdown";
// import MenuBarButton from "./components/MenuBarButton/MenuBarButton";
// import { TextAlignLeft } from "./icons";

// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <Dropdown
//         isOpen={isOpen}
//         onOpen={setIsOpen}
//         dropdown={
//           <ColorPickerList
//             selected="blue-5"
//             onSelect={(ev) => {
//               console.log("selected", ev);
//             }}
//           />
//         }
//       >
//         <MenuBarButton is_open={isOpen}>
//           <TextAlignLeft  />
//         </MenuBarButton>
//       </Dropdown>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <Wysiwyg />
    </div>
  );
}

export default App;
