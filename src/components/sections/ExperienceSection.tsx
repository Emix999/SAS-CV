import { EditableInput } from "../EditableInput";
import { EditableTextarea } from "../EditableTextarea";
import { ExperienceItem, Language } from "../../types/cv";
import { t } from "../../utils/translations";

type ExperienceSectionProps = {
  items: ExperienceItem[];
  language: Language;
  onUpdate: (id: string, field: keyof ExperienceItem, value: string) => void;
  onRemove: (id: string) => void;
};

export function ExperienceSection({
  items,
  language,
  onUpdate,
  onRemove
}: ExperienceSectionProps) {
  return (
    <section className="cv-section">
      <h2>{t(language, "experience")}</h2>

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
            value={item.position}
            onChange={(value) => onUpdate(item.id, "position", value)}
          />

          <EditableInput
            className="item-subtitle"
            value={item.company}
            onChange={(value) => onUpdate(item.id, "company", value)}
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

          <EditableTextarea
            value={item.description}
            onChange={(value) => onUpdate(item.id, "description", value)}
          />
        </article>
      ))}
    </section>
  );
}
