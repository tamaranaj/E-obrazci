import { jsPDF } from "jspdf";

export function addNotoSerifFont(doc: jsPDF) {
  // Adding the font data to jsPDF's VFS (Virtual File System)
  doc.addFileToVFS(
    "NotoSerif-VariableFont_wdth,wght.ttf",
  );

  // Registering the font with jsPDF
  doc.addFont(
    "NotoSerif-VariableFont_wdth,wght.ttf",
    "NotoSerif",
    "normal"
  );
}