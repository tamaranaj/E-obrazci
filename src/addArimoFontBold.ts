import { jsPDF } from "jspdf";
import { ArimoBoldBase64 } from "./ArimoBoldBase64";

export function addArimoFontBold(doc: jsPDF) { 
  
  doc.addFileToVFS('Arimo-Bold.ttf',ArimoBoldBase64);
  doc.addFont(
    "Arimo-Bold.ttf",
    "ArimoBold",
    "bold"
  );
}
