import { EditableInput } from "../EditableInput";
import { EducationItem, Language } from "../../types/cv";
import { t } from "../../utils/translations";

type EducationSectionProps = {
  items: EducationItem[];
  language: Language;
  onUpdate: (id: string, field: keyof EducationItem, value: string) => void;
  onRemove: (id: string) => void;
};

export function EducationSection({
  items,
  language,
  onUpdate,
  onRemove
}: EducationSectionProps) {
  return (
    <section className="cv-section">
      <h2>{t(language, "education")}</h2>

      {items.map((item) => (
        <article className="cv-item" key={item.id}>
          <button
            type="button"
            className="remove-button no-pdf"
            onClick={() => onRemove(item.id)}
          >
            {t(language, "remove")}
          </button>

          <EditableInput
            className="item-title"
            value={item.school}
            onChange={(value) => onUpdate(item.id, "school", value)}
          />

          <EditableInput
            className="item-subtitle"
            value={item.field}
            onChange={(value) => onUpdate(item.id, "field", value)}
          />

          <div className="date-row">
            <EditableInput
              className="date-input"
              value={item.startDate}
              onChange={(value) => onUpdate(item.id, "startDate", value)}
            />
            <span>—</span>
            <EditableInput
              className="date-input"
              value={item.endDate}
              onChange={(value) => onUpdate(item.id, "endDate", value)}
            />
          </div>
        </article>
      ))}
    </section>
  );
}
