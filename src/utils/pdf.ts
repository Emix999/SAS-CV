import html2pdf from "html2pdf.js";
import { CvData } from "../types/cv";

export const exportCvToPdf = async (
  element: HTMLElement,
  cvData: CvData
): Promise<void> => {
  element.classList.add("pdf-mode");

  const fileName = `${cvData.firstName}_${cvData.lastName}_CV.pdf`
    .replaceAll(" ", "_")
    .replaceAll("__", "_");

  const options = {
    margin: 0,
    filename: fileName,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait"
    }
  };

  try {
    await html2pdf().set(options).from(element).save();
  } finally {
    element.classList.remove("pdf-mode");
  }
};
