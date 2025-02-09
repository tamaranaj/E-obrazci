import jsPDF from "jspdf";
import { IDCardDocument} from "../../Types/interfaces";

export const checkIdCardNameLanguage=(doc:jsPDF, idCardDocument:IDCardDocument)=>{

    if(idCardDocument.nameLanguage===''){
        return
    }else{
        if(idCardDocument.nameLanguage ==='турски'){
            doc.setFontSize(10)
            doc.text('х',36, 143)
            doc.setFontSize(8);
            doc.setLineWidth(0.3)
            doc.rect(36,141, 2,2)
            doc.setLineWidth(0.1)
        }
        if(idCardDocument.nameLanguage ==='влашки'){
            doc.setFontSize(10)
            doc.text('х',55, 143)
            doc.setFontSize(8);
            doc.setLineWidth(0.3)
            doc.rect(55,141, 2,2)
            doc.setLineWidth(0.1)
        }
        if(idCardDocument.nameLanguage ==='српски'){
            doc.setFontSize(10)
            doc.text('х',73, 143)
            doc.setFontSize(8);
            doc.setLineWidth(0.3)
            doc.rect(73,141, 2,2)
            doc.setLineWidth(0.1)
        }
        if(idCardDocument.nameLanguage ==='ромски'){
            doc.setFontSize(10)
            doc.text('х',92, 143)
            doc.setFontSize(8);
            doc.setLineWidth(0.3)
            doc.rect(92,141, 2,2)
            doc.setLineWidth(0.1)
        }
        if(idCardDocument.nameLanguage ==='босански'){
            doc.setFontSize(10)
            doc.text('х',113, 143)
            doc.setFontSize(8);
            doc.setLineWidth(0.3)
            doc.rect(113,141, 2,2)
            doc.setLineWidth(0.1)
        }
    }
}

export const checkIdCardLanguage=(doc:jsPDF, idCardDocument:IDCardDocument)=>{

    if(idCardDocument.cardLanguage===''){
        return
    }else{
        if(idCardDocument.cardLanguage ==='турски'){
            doc.setFontSize(10)
            doc.text('х',37, 131)
            doc.setFontSize(8);
            doc.setLineWidth(0.3)
            doc.rect(36,129, 2,2)
            doc.setLineWidth(0.1)
          }
          if(idCardDocument.cardLanguage ==='влашки'){
            doc.setFontSize(10)
            doc.text('х',55, 131)
            doc.setFontSize(8);
            doc.setLineWidth(0.3)
            doc.rect(55,129, 2,2)
            doc.setLineWidth(0.1)
          }
          if(idCardDocument.cardLanguage ==='српски'){
            doc.setFontSize(10)
            doc.text('х',73, 131)
            doc.setFontSize(8);
            doc.setLineWidth(0.3)
            doc.rect(73,129, 2,2)
            doc.setLineWidth(0.1)
          }
          if(idCardDocument.cardLanguage ==='ромски'){
            doc.setFontSize(10)
            doc.text('х',92, 131)
            doc.setFontSize(8);
            doc.setLineWidth(0.3)
            doc.rect(92,129, 2,2)
            doc.setLineWidth(0.1)
          }
          if(idCardDocument.cardLanguage ==='босански'){
            doc.setFontSize(10)
            doc.text('х',113, 131)
            doc.setFontSize(8);
            doc.setLineWidth(0.3)
            doc.rect(113,129, 2,2)
            doc.setLineWidth(0.1)
          }
      
    }
}

