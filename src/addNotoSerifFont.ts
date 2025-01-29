import { jsPDF } from "jspdf";
import { notoSerifBase64 } from "./NotoSerifBase64";

export function addNotoSerifFont(doc: jsPDF) {
  doc.addFileToVFS(
    "NotoSerif-VariableFont_wdth,wght.ttf",
    notoSerifBase64
  );

  doc.addFont(
    "NotoSerif-VariableFont_wdth,wght.ttf",
    "NotoSerif",
    "normal"
  );
}
