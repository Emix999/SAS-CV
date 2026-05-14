import { CSSProperties } from "react";

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
  return (
    <input
      className={`editable-field editable-input ${className}`}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      style={style}
    />
  );
}
