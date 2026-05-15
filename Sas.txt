import { CSSProperties, useEffect, useRef } from "react";

type EditableInputProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  style?: CSSProperties;
};

export function EditableInput({
  value,
  onChange,
  className = "",
  style
}: EditableInputProps) {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!divRef.current) {
      return;
    }

    if (document.activeElement !== divRef.current) {
      divRef.current.textContent = value;
    }
  }, [value]);

  return (
    <div
      ref={divRef}
      className={`editable-field editable-input ${className}`}
      contentEditable
      suppressContentEditableWarning
      onInput={(event) => {
        const text = event.currentTarget.textContent ?? "";
        onChange(text.replace(/\n/g, " "));
      }}
      style={style}
    >
      {value}
    </div>
  );
}