import { EditableInput } from "../components/EditableInput";
import { EditableTextarea } from "../components/EditableTextarea";
import { EducationSection } from "../components/sections/EducationSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { CvData, EducationItem, ExperienceItem, Language } from "../types/cv";
import { t } from "../utils/translations";

type CreativeTemplateProps = {
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

export function CreativeTemplate({
  cvData,
  language,
  onUpdateField,
  onUpdateExperience,
  onUpdateEducation,
  onRemoveExperience,
  onRemoveEducation
}: CreativeTemplateProps) {
  return (
    <div className="cv-template creative-template">
      <header className="creative-header">
        <div className="creative-initials">
          {cvData.firstName.charAt(0)}
          {cvData.lastName.charAt(0)}
        </div>

        <div className="creative-name-box">
          <EditableInput
            className="creative-name"
            value={cvData.firstName}
            onChange={(value) => onUpdateField("firstName", value)}
          />
          <EditableInput
            className="creative-name"
            value={cvData.lastName}
            onChange={(value) => onUpdateField("lastName", value)}
          />
          <EditableInput
            className="creative-position"
            value={cvData.jobTitle}
            onChange={(value) => onUpdateField("jobTitle", value)}
          />
        </div>
      </header>

      <div className="creative-contact">
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
      </div>

      <section className="cv-section">
        <h2>{t(language, "profile")}</h2>
        <EditableTextarea
          value={cvData.summary}
          onChange={(value) => onUpdateField("summary", value)}
        />
      </section>

      <section className="cv-section">
        <h2>{t(language, "skills")}</h2>
        <EditableTextarea
          value={cvData.skills}
          onChange={(value) => onUpdateField("skills", value)}
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
    </div>
  );
}
