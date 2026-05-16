import { Language } from "../types/cv";

type TranslationKey =
  | "appTitle"
  | "appSubtitle"
  | "template"
  | "classic"
  | "modern"
  | "creative"
  | "language"
  | "addExperience"
  | "addEducation"
  | "downloadPdf"
  | "downloadJson"
  | "importJson"
  | "reset"
  | "profile"
  | "skills"
  | "experience"
  | "education"
  | "contact"
  | "remove"
  | "clearData";

const translations: Record<Language, Record<TranslationKey, string>> = {
  pl: {
    appTitle: "Kreator CV",
    appSubtitle: "Wybierz szablon, kliknij tekst na CV i wpisz swoje dane.",
    template: "Szablon CV",
    classic: "Klasyczny",
    modern: "Nowoczesny",
    creative: "Kreatywny",
    language: "Język nagłówków",
    addExperience: "Dodaj doświadczenie",
    addEducation: "Dodaj edukację",
    downloadPdf: "Pobierz PDF",
    downloadJson: "Pobierz dane CV",
    importJson: "Importuj dane CV",
    reset: "Przywróć przykład",
    profile: "Profil zawodowy",
    skills: "Umiejętności",
    experience: "Doświadczenie",
    education: "Edukacja",
    contact: "Kontakt",
    remove: "usuń",
    clearData: "Wyczyść dane"
  },
  en: {
    appTitle: "CV Creator",
    appSubtitle: "Choose a template, click the text on the CV and enter your data.",
    template: "CV template",
    classic: "Classic",
    modern: "Modern",
    creative: "Creative",
    language: "Headings language",
    addExperience: "Add experience",
    addEducation: "Add education",
    downloadPdf: "Download PDF",
    downloadJson: "Download CV data",
    importJson: "Import CV data",
    reset: "Restore example",
    profile: "Professional profile",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    remove: "remove",
    clearData: "Clear data"
  }
};

export const t = (language: Language, key: TranslationKey): string => {
  return translations[language][key];
};
