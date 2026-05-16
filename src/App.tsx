import { useRef, useState } from "react";
import "./App.css";
import { Toolbar } from "./components/Toolbar";
import { defaultCvData } from "./data/defaultCvData";
import { ClassicTemplate } from "./templates/ClassicTemplate";
import { CreativeTemplate } from "./templates/CreativeTemplate";
import { ModernTemplate } from "./templates/ModernTemplate";
import { CvData, EducationItem, ExperienceItem, Language, TemplateName } from "./types/cv";
import { createId } from "./utils/id";
import { exportCvDataToJson, readCvDataFromJson } from "./utils/jsonFile";
import { exportCvToPdf } from "./utils/pdf";

const emptyCvData: CvData = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  email: "",
  phone: "",
  city: "",
  photo: "",
  summary: "",
  skills: "",
  experience: [],
  education: []
};

function App() {
  const [cvData, setCvData] = useState<CvData>(defaultCvData);
  const [template, setTemplate] = useState<TemplateName>("classic");
  const [language, setLanguage] = useState<Language>("pl");
  const cvRef = useRef<HTMLDivElement | null>(null);

  const updateField = (field: keyof CvData, value: string) => {
    setCvData((previousData) => ({
      ...previousData,
      [field]: value
    }));
  };

  const updateExperience = (
    id: string,
    field: keyof ExperienceItem,
    value: string
  ) => {
    setCvData((previousData) => ({
      ...previousData,
      experience: previousData.experience.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const updateEducation = (
    id: string,
    field: keyof EducationItem,
    value: string
  ) => {
    setCvData((previousData) => ({
      ...previousData,
      education: previousData.education.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const addExperience = () => {
    const newExperience: ExperienceItem = {
      id: createId("exp"),
      position: "Nowe stanowisko",
      company: "Nazwa firmy",
      startDate: "2025",
      endDate: "obecnie",
      description: "Opisz swoje obowiązki, zadania i osiągnięcia."
    };

    setCvData((previousData) => ({
      ...previousData,
      experience: [...previousData.experience, newExperience]
    }));
  };

  const addEducation = () => {
    const newEducation: EducationItem = {
      id: createId("edu"),
      school: "Nazwa szkoły",
      field: "Kierunek / profil",
      startDate: "2021",
      endDate: "2026"
    };

    setCvData((previousData) => ({
      ...previousData,
      education: [...previousData.education, newEducation]
    }));
  };

  const removeExperience = (id: string) => {
    setCvData((previousData) => ({
      ...previousData,
      experience: previousData.experience.filter((item) => item.id !== id)
    }));
  };

  const removeEducation = (id: string) => {
    setCvData((previousData) => ({
      ...previousData,
      education: previousData.education.filter((item) => item.id !== id)
    }));
  };

  const handleExportPdf = () => {
    if (!cvRef.current) {
      return;
    }

    exportCvToPdf(cvRef.current, cvData);
  };

  const handleImportJson = (file: File) => {
    readCvDataFromJson(
      file,
      (importedData) => setCvData(importedData),
      () => alert("Nie udało się wczytać pliku. Wybierz poprawny plik cv-data.json.")
    );
  };

  const renderSelectedTemplate = () => {
    const commonProps = {
      cvData,
      language,
      onUpdateField: updateField,
      onUpdateExperience: updateExperience,
      onUpdateEducation: updateEducation,
      onRemoveExperience: removeExperience,
      onRemoveEducation: removeEducation
    };

    if (template === "modern") {
      return <ModernTemplate {...commonProps} />;
    }

    if (template === "creative") {
      return <CreativeTemplate {...commonProps} />;
    }

    return <ClassicTemplate {...commonProps} />;
  };

  return (
    <div className="app">
      <Toolbar
        template={template}
        language={language}
        onTemplateChange={setTemplate}
        onLanguageChange={setLanguage}
        onAddExperience={addExperience}
        onAddEducation={addEducation}
        onExportPdf={handleExportPdf}
        onExportJson={() => exportCvDataToJson(cvData)}
        onImportJson={handleImportJson}
        onReset={() => setCvData(defaultCvData)}
        onClearData={() => setCvData(emptyCvData)}
      />

      <main className="preview">
        <div className="cv-page" ref={cvRef}>
          {renderSelectedTemplate()}
        </div>
      </main>
    </div>
  );
}

export default App;
