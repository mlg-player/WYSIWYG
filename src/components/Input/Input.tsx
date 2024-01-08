import { memo, useState } from "react";
import textFormatter from "./formatter";

const Wysiwyg = memo(() => {
  const [value, setValue] = useState("");
  const formatted = textFormatter(value);
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ width: "100%", height: "200px" }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: formatted }}
        style={{ width: "100%", height: "200px" }}
      />
    </div>
  );
});

export default Wysiwyg;
