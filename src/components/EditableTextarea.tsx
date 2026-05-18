import { CSSProperties, useEffect, useRef } from "react";

type EditableTextareaProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  style?: CSSProperties;
};

export function EditableTextarea({
  value,
  onChange,
  className = "",
  style
}: EditableTextareaProps) {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!divRef.current) {
      return;
    }

    if (document.activeElement !== divRef.current) {
      divRef.current.innerText = value;
    }
  }, [value]);

  return (
    <div
      ref={divRef}
      className={`editable-field editable-textarea ${className}`}
      contentEditable
      suppressContentEditableWarning
      onInput={(event) => {
        const text = event.currentTarget.innerText;
        onChange(text);
      }}
      onPaste={(event) => {
        event.preventDefault();
        const text = event.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);
      }}
      style={style}
    >
      {value}
    </div>
  );
}
