import jsPDF from "jspdf";
import { Passport } from "../../Types/interfaces";

export const checkPassportNameLanguage = (doc: jsPDF, passport: Passport)=>{
    if(passport.nameLanguage===''){
        return
    }else{
        if(passport.nameLanguage ==='турски'){
            doc.text('X',36.5, 151.7)
            doc.setLineWidth(0.3)
            doc.rect(36,149, 3,3)
            doc.setLineWidth(0.1)
          }
          if(passport.nameLanguage ==='влашки'){
            doc.text('X',57.5,  151.7)
            doc.setLineWidth(0.3)
            doc.rect(57,149, 3,3)
            doc.setLineWidth(0.1)
          }
          if(passport.nameLanguage ==='српски'){
            doc.text('X',77.5,  151.7)
            doc.setLineWidth(0.3)
            doc.rect(77,149, 3,3)
            doc.setLineWidth(0.1)
          }
          if(passport.nameLanguage ==='ромски'){
            doc.text('X',98.5,  151.7)
            doc.setLineWidth(0.3)
            doc.rect(98,149,  3,3)
            doc.setLineWidth(0.1)
          }
          if(passport.nameLanguage ==='босански'){
            doc.text('X',121.5, 151.7)
            doc.setLineWidth(0.3)
            doc.rect(121,149, 3,3)
            doc.setLineWidth(0.1)
          }
    }
}
export const checkPassportCardLanguage = (doc: jsPDF, passport: Passport)=>{
  if(passport.cardLanguage===''){
      return
  }else{
    if(passport.cardLanguage ==='турски'){
      doc.text('X',36.5, 134.7) 
      doc.setLineWidth(0.3)
      doc.rect(36,132, 3,3) 
      doc.setLineWidth(0.1)
    }
    if(passport.cardLanguage ==='влашки'){
      doc.text('X',57.5, 134.7)
      doc.setLineWidth(0.3)
      doc.rect(57,132, 3,3)
      doc.setLineWidth(0.1)
    }
    if(passport.cardLanguage ==='српски'){
      doc.text('X',77.5, 134.7)
      doc.setLineWidth(0.3)
      doc.rect(77,132, 3,3)
      doc.setLineWidth(0.1)
    }
    if(passport.cardLanguage ==='ромски'){
      doc.text('X',98.5, 134.7)
      doc.setLineWidth(0.3)
      doc.rect(98,132,  3,3)
      doc.setLineWidth(0.1)
    }
    if(passport.cardLanguage ==='босански'){
      doc.text('X',122.5, 134.7)
      doc.setLineWidth(0.3)
      doc.rect(121,132, 3,3)
      doc.setLineWidth(0.1)
    }
  }
}
export const checkFormLanguage = (doc: jsPDF, passport: Passport)=>{
  if(passport.formLanguage===''){
      return
  }else{
    if(passport.formLanguage ==='турски'){
      doc.text('X',36.5, 163.7)
      doc.setLineWidth(0.3)
      doc.rect(36,161, 3,3)
      doc.setLineWidth(0.1)
    }
    if(passport.formLanguage ==='влашки'){
      doc.text('X',57.5, 163.7)
      doc.setLineWidth(0.3)
      doc.rect(57,161, 3,3)
      doc.setLineWidth(0.1)
    }
    if(passport.formLanguage ==='српски'){
      doc.text('X',77.5, 163.7)
      doc.setLineWidth(0.3)
      doc.rect(77,161, 3,3)
      doc.setLineWidth(0.1)
    }
    if(passport.formLanguage ==='ромски'){
      doc.text('X',98.5, 163.7)
      doc.setLineWidth(0.3)
      doc.rect(98,161,  3,3)
      doc.setLineWidth(0.1)
    }    
    if(passport.formLanguage ==='босански'){
      doc.text('X',121.5, 163.7)
      doc.setLineWidth(0.3)
      doc.rect(121,161, 3,3)
      doc.setLineWidth(0.1)
    }
  }
}
