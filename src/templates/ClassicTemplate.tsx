import { EditableInput } from "../components/EditableInput";
import { EditableTextarea } from "../components/EditableTextarea";
import { EducationSection } from "../components/sections/EducationSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { CvData, EducationItem, ExperienceItem, Language } from "../types/cv";
import { t } from "../utils/translations";
import { PhotoBox } from "../components/PhotoBox";

type ClassicTemplateProps = {
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

export function ClassicTemplate({
  cvData,
  language,
  onUpdateField,
  onUpdateExperience,
  onUpdateEducation,
  onRemoveExperience,
  onRemoveEducation
}: ClassicTemplateProps) {
  return (
    <div className="cv-template classic-template">
      <header className="classic-header">
  <div className="classic-person">
    <PhotoBox
      photo={cvData.photo}
      initials={`${cvData.firstName.charAt(0)}${cvData.lastName.charAt(0)}`}
      onPhotoChange={(value) => onUpdateField("photo", value)}
    />

    <div>
      <EditableInput
        className="first-name"
        value={cvData.firstName}
        onChange={(value) => onUpdateField("firstName", value)}
      />
      <EditableInput
        className="last-name"
        value={cvData.lastName}
        onChange={(value) => onUpdateField("lastName", value)}
      />
      <EditableInput
        className="job-title"
        value={cvData.jobTitle}
        onChange={(value) => onUpdateField("jobTitle", value)}
      />
    </div>
  </div>

        <div className="classic-contact">
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
      </header>

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
