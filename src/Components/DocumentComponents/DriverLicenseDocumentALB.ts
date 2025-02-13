import jsPDF from "jspdf";
import { addNotoSerifFont } from "../../addNotoSerifFont";
import { addArimoFontBold } from "../../addArimoFontBold";
import { PersonalDetailsID, DriverLicense } from "../../Types/interfaces";

export const generateDriverLicenseALB = (driverLic: DriverLicense, personalInfo: PersonalDetailsID)=>{

const doc = new jsPDF()
    addNotoSerifFont(doc)
    addArimoFontBold(doc);
    doc.setFont("NotoSerif", "normal");
    doc.setFontSize(8.5);
    doc.text('Образец бр.2', 190, 20, { align: 'right' });
    doc.text('Formulari nr. 2', 190, 25, { align: 'right' });
    doc.text('ДО: МИНИСТЕРСТВО ЗА ВНАТРЕШНИ РАБОТИ', 20, 20,{align: 'left'})
    doc.text('DERI TE: MINISTRIA PËR PUNË TË BRENDSHME', 20, 25,{align: 'left'})
    doc.text('БАРАЊЕ ЗА ИЗДАВАЊЕ НА ЛИЧНА КАРТА/KËRKESË PËR LËSHIM TË LETËRNJOFTIMIT', 40, 33,);
    doc.setLineWidth(0.5)
    doc.line(20, 35, 190, 35); 
    doc.setLineWidth(0.1)
    doc.save('driversLicense.pdf');
}
