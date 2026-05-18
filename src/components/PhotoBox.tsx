import { ChangeEvent } from "react";

type PhotoBoxProps = {
  photo: string;
  initials: string;
  onPhotoChange: (photo: string) => void;
  className?: string;
};

export function PhotoBox({
  photo,
  initials,
  onPhotoChange,
  className = ""
}: PhotoBoxProps) {
  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Wybierz plik graficzny.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        onPhotoChange(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  const visibleInitials = initials.trim() || "CV";

  return (
    <div className={`photo-wrapper ${className}`}>
      <label className="photo-box">
        {photo ? (
          <img src={photo} alt="Zdjęcie do CV" />
        ) : (
          <span>{visibleInitials}</span>
        )}

        <input
          className="no-pdf"
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
        />
      </label>

      {photo && (
        <button
          type="button"
          className="photo-remove no-pdf"
          onClick={() => onPhotoChange("")}
        >
          usuń zdjęcie
        </button>
      )}
    </div>
  );
}
