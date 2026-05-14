import { EditableInput } from "../components/EditableInput";
import { EditableTextarea } from "../components/EditableTextarea";
import { EducationSection } from "../components/sections/EducationSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { CvData, EducationItem, ExperienceItem, Language } from "../types/cv";
import { t } from "../utils/translations";

type ModernTemplateProps = {
  cvData: CvData;
  language: Language;
  onUpdateField: (field: keyof CvData, value: string) => void;
  onUpdateExperience: (
    id: string,
    field: keyof ExperienceItem,
    value: string
  ) => void;
  onUpdateEducation: (
    id: string,
    field: keyof EducationItem,
    value: string
  ) => void;
  onRemoveExperience: (id: string) => void;
  onRemoveEducation: (id: string) => void;
};

export function ModernTemplate({
  cvData,
  language,
  onUpdateField,
  onUpdateExperience,
  onUpdateEducation,
  onRemoveExperience,
  onRemoveEducation
}: ModernTemplateProps) {
  return (
    <div className="cv-template modern-template">
      <aside className="modern-sidebar">
        <EditableInput
          className="modern-name"
          value={cvData.firstName}
          onChange={(value) => onUpdateField("firstName", value)}
        />
        <EditableInput
          className="modern-name"
          value={cvData.lastName}
          onChange={(value) => onUpdateField("lastName", value)}
        />
        <EditableInput
          className="modern-position"
          value={cvData.jobTitle}
          onChange={(value) => onUpdateField("jobTitle", value)}
        />

        <h2>{t(language, "contact")}</h2>
        <EditableInput
          value={cvData.email}
          onChange={(value) => onUpdateField("email", value)}
        />
        <EditableInput
          value={cvData.phone}
          onChange={(value) => onUpdateField("phone", value)}
        />
        <EditableInput
          value={cvData.city}
          onChange={(value) => onUpdateField("city", value)}
        />

        <h2>{t(language, "skills")}</h2>
        <EditableTextarea
          value={cvData.skills}
          onChange={(value) => onUpdateField("skills", value)}
        />
      </aside>

      <main className="modern-content">
        <section className="cv-section">
          <h2>{t(language, "profile")}</h2>
          <EditableTextarea
            value={cvData.summary}
            onChange={(value) => onUpdateField("summary", value)}
          />
        </section>

        <ExperienceSection
          items={cvData.experience}
          language={language}
          onUpdate={onUpdateExperience}
          onRemove={onRemoveExperience}
        />

        <EducationSection
          items={cvData.education}
          language={language}
          onUpdate={onUpdateEducation}
          onRemove={onRemoveEducation}
        />
      </main>
    </div>
  );
}
