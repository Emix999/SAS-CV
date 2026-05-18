import { ChangeEvent } from "react";
import { Language, TemplateName } from "../types/cv";
import { t } from "../utils/translations";

type ToolbarProps = {
  template: TemplateName;
  language: Language;
  onTemplateChange: (template: TemplateName) => void;
  onLanguageChange: (language: Language) => void;
  onAddExperience: () => void;
  onAddEducation: () => void;
  onExportPdf: () => void;
  onExportJson: () => void;
  onImportJson: (file: File) => void;
  onReset: () => void;
};

export function Toolbar({
  template,
  language,
  onTemplateChange,
  onLanguageChange,
  onAddExperience,
  onAddEducation,
  onExportPdf,
  onExportJson,
  onImportJson,
  onReset
}: ToolbarProps) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      onImportJson(file);
    }

    event.target.value = "";
  };

  return (
    <aside className="toolbar">
      <h1>{t(language, "appTitle")}</h1>
      <p>{t(language, "appSubtitle")}</p>

      <label className="toolbar-label" htmlFor="template-select">
        {t(language, "template")}
      </label>
      <select
        id="template-select"
        value={template}
        onChange={(event) => onTemplateChange(event.target.value as TemplateName)}
      >
        <option value="classic">{t(language, "classic")}</option>
        <option value="modern">{t(language, "modern")}</option>
        <option value="creative">{t(language, "creative")}</option>
      </select>

      <label className="toolbar-label" htmlFor="language-select">
        {t(language, "language")}
      </label>
      <select
        id="language-select"
        value={language}
        onChange={(event) => onLanguageChange(event.target.value as Language)}
      >
        <option value="pl">Polski</option>
        <option value="en">English</option>
      </select>

      <button type="button" onClick={onAddExperience}>
        {t(language, "addExperience")}
      </button>

      <button type="button" onClick={onAddEducation}>
        {t(language, "addEducation")}
      </button>

      <button type="button" className="primary-button" onClick={onExportPdf}>
        {t(language, "downloadPdf")}
      </button>

      <button type="button" onClick={onExportJson}>
        {t(language, "downloadJson")}
      </button>

      <label className="file-button">
        {t(language, "importJson")}
        <input type="file" accept="application/json" onChange={handleFileChange} />
      </label>

      <button type="button" onClick={onReset}>
        {t(language, "reset")}
      </button>
    </aside>
  );
}
