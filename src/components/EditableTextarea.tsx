import { CSSProperties } from "react";

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
  return (
    <textarea
      className={`editable-field editable-textarea ${className}`}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      style={style}
    />
  );
}
