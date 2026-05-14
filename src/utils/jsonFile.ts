import { CvData } from "../types/cv";

export const exportCvDataToJson = (data: CvData): void => {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "cv-data.json";
  link.click();

  URL.revokeObjectURL(url);
};

export const readCvDataFromJson = (
  file: File,
  onSuccess: (data: CvData) => void,
  onError: () => void
): void => {
  const reader = new FileReader();

  reader.onload = () => {
    try {
      const result = reader.result;

      if (typeof result !== "string") {
        onError();
        return;
      }

      const parsedData = JSON.parse(result) as CvData;

      if (
        typeof parsedData.firstName !== "string" ||
        typeof parsedData.lastName !== "string" ||
        !Array.isArray(parsedData.experience) ||
        !Array.isArray(parsedData.education)
      ) {
        onError();
        return;
      }

      onSuccess(parsedData);
    } catch {
      onError();
    }
  };

  reader.readAsText(file);
};
