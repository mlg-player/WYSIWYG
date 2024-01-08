const linkComponentProps = {
  target: "_blank",
  rel: "noopener noreferrer",
  className: "link",
  href: "",
};

const textFormatter = (value: string) => {
  value = value.replace(/</g, "&lt;");
  value = value.replace(/>/g, "&gt;");
  value = value.replace(/\[a[^\]]*\](.*?)\[\/a\]/g, (val, innerText) => {
    const properties = val
      .match(/\[a[^\]]*\]/g)?.[0]
      .replace("[a", "")
      .replace("]", "")
      .split(/\s+/g)
      .reduce((acc, curr) => {
        const [key, value] = curr.replace(/"$/g, "").split("=");
        if (key in linkComponentProps && value) {
          const newValue = value.replace(/"([^"]*)/, "$1");
          acc[key as keyof typeof linkComponentProps] = newValue;
        }
        return acc;
      }, linkComponentProps);

    return `<a ${Object.entries(properties ?? {})
      .map(([key, value]) => {
        if (key && value) {
          return `${key}="${value.replace(/"/g, "")}"`;
        } else {
          return "";
        }
      })
      .join(" ")}>${innerText}</a>`;
  });
  value = value.replace("[/a]", "</a>");

  return value;
};

export default textFormatter;
