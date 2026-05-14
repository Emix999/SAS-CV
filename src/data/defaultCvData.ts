import { CvData } from "../types/cv";

export const defaultCvData: CvData = {
  firstName: "Jan",
  lastName: "Kowalski",
  jobTitle: "Programista Frontend",
  email: "jan.kowalski@email.com",
  phone: "123 456 789",
  city: "Poznań",
  summary:
    "Jestem początkującym programistą frontend. Interesuję się Reactem, TypeScriptem oraz tworzeniem przejrzystych aplikacji internetowych.",
  skills: "React, TypeScript, HTML, CSS, Git, praca zespołowa",
  experience: [
    {
      id: "exp-1",
      position: "Praktykant IT",
      company: "Firma XYZ",
      startDate: "2024",
      endDate: "2025",
      description:
        "Pomoc przy tworzeniu prostych stron internetowych, poprawianie stylów CSS oraz testowanie formularzy."
    }
  ],
  education: [
    {
      id: "edu-1",
      school: "Technikum Informatyczne",
      field: "Technik programista",
      startDate: "2021",
      endDate: "2026"
    }
  ]
};
