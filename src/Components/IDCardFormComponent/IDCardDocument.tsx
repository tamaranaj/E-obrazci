import { useContext } from 'react';
import { GeneralContext } from '../../context/general.context';
import jsPDF from 'jspdf';
import { addNotoSerifFont } from "../../addNotoSerifFont";
import { addNotoSerifFontBold } from '../../addNotoSerifFontBold';
import Button from '@mui/material/Button';
// import font from  './assets/';
export interface DocumentProps{

  props?: {reason: string,
    firstName: string,
    lastName: string,
    cardLanguage: string,
    nameLanguage: string,
    marriedLastName: string,
    fatherName:string,
    motherName: string,
    birth: string,
    placeBirth: string,
    socialNumber: string,
    gender: string,
    address: string,}
  
}


// Create Document Component
export const IDCardDocument = () => {
  const{personalDetailsID,idCardDocument} = useContext(GeneralContext)

  const generatePDF = () =>{
    const doc = new jsPDF()
    // doc.text(`Name: ${props.firstName} ${props.lastName}`, 10, 10)
  //  doc.setLanguage('ru-MO')
  addNotoSerifFont(doc);
  // addNotoSerifFontBold(doc)
  doc.setFont("NotoSerif", "normal");
  
  doc.setFontSize(9);
    doc.text('Образец бр.1', 185, 25, { align: 'right' });
    doc.setFontSize(11);
    
    // doc.setFont('NotoSerifBold', 'bold')
    doc.text('ДО:', 25, 35,{align: 'left'})
    doc.text('МИНИСТЕРСТВО ЗА ВНАТРЕШНИ РАБОТИ НА РЕПУБЛИКА СЕВЕРНА МАКЕДОНИЈА', 25, 40,{align: 'left'})
    // Add subtitles
    doc.setFontSize(10);
    doc.text('БАРАЊЕ ЗА ИЗДАВАЊЕ НА ЛИЧНА КАРТА', 100, 47, { align: 'center' });
    doc.setLineWidth(0.5)
    doc.line(25, 48, 185, 48); // Line for separator
    doc.setLineWidth(0.1)
    doc.setFontSize(10);
    doc.text('ТИП-А', 25, 52,{align: 'left'})
    doc.line(25, 53, 185, 53); // Line for separator

    // Add section headers and text
    doc.setFontSize(11);
    
    doc.text('1. Причина за барање (да се заокружи еден од основните)', 25, 65, {align: 'left'});

    doc.setFontSize(10);
    doc.text('1.1  Прв пат', 30, 70, {align:'left'})
    if(idCardDocument.reason==='прв пат'){
      doc.roundedRect(29,67,7,4,2,3 )
    }
    doc.text('1.2  Замена поради истечен рок на важење', 30, 75, {align:'left'})
    if(idCardDocument.reason==='замена поради истечен рок на важење'){
      doc.roundedRect(29,72,7,4,2,3 )
    }
    doc.text('1.3  Дупликат лична карта(изгубена, кражба или исчезнување', 30, 80, {align:'left'})
    if(idCardDocument.reason==='дупликат лична карта(изгубена, кражба или исчезнување)'){
      doc.roundedRect(29,77,7,4,2,3 )
    }
    
    doc.text('1.4  Предвремена поради оштетување, промена на лични податоци, промена на адреса', 30, 85, {align:'left'})
    doc.text(' на живеење, промена на живеалиште и др.', 35,90,{align:'left'})
    if(idCardDocument.reason==='предвремена поради оштетување, промена на лични податоци, промена на адреса на живеење, промена на живеалиште и др.'){
      doc.roundedRect(29,82,7,4,2,3 )
    }
    

    doc.setFontSize(11);

    doc.text('2. Податоци за поднесителот на барањето', 25,100,{align: 'left'})
    doc.setFontSize(10);
    doc.text('2.1', 30, 108, {align: 'left'})
    doc.line(20, 110, 190, 110); // Line for separator
    doc.line(20,110,20,135)
    doc.line(190,110,190,135)
    doc.line(105, 110,105, 135)
    doc.line(20, 115, 190, 115); // 
    doc.line(20, 135, 190, 135); // Line for separator
    
    doc.text('ИМЕ',55, 114 )  
    doc.text('ПРЕЗИМЕ',137, 114 ) 
    doc.setFontSize(9);
    doc.text('1.македонски.јазик',22,129)
    doc.line(55,129,100,129)
    doc.text(personalDetailsID.firstName,58,128)
    doc.line(60,134,75,134)
    doc.line(144,129,159,129)
    doc.text('1.македонски.јазик',107,124)
    doc.line(140, 124, 185, 124 )
    doc.text(personalDetailsID.lastName, 144,123)
    doc.setFontSize(10);
    doc.text('2.2', 30, 145, {align: 'left'})
    doc.line(20, 146, 190, 146); // Line for separator
    doc.line(20, 158, 190, 158)
    doc.line(20, 171,190,171)
    doc.line(20,146,20,171)
    doc.line(190,146,190,171)
    doc.setFontSize(8);
    doc.text('Барам образецот да биде изготвен на еден од наведените јазици и писмо',22,149 )
    doc.text('1. турски', 22, 153)
    doc.rect(36,151, 2,2)
    if(idCardDocument.cardLanguage ==='турски'){
      doc.setFontSize(10)
      doc.text('х',36, 153)
      doc.setFontSize(8);
    }
    doc.text('2. влашки', 40, 153)
    doc.rect(55,151, 2,2)
    if(idCardDocument.cardLanguage ==='влашки'){
      doc.setFontSize(10)
      doc.text('х',55, 153)
      doc.setFontSize(8);
    }
    doc.text('3. српски', 59, 153)
    doc.rect(73,151, 2,2)
    if(idCardDocument.cardLanguage ==='српски'){
      doc.setFontSize(10)
      doc.text('х',73, 153)
      doc.setFontSize(8);
    }

    doc.text('4. ромски', 77, 153)
    doc.rect(92,151, 2,2)
    if(idCardDocument.cardLanguage ==='ромски'){
      doc.setFontSize(10)
      doc.text('х',92, 153)
      doc.setFontSize(8);
    }

    
    doc.text('5. босански', 96, 153)
    doc.rect(113,151, 2,2)
    if(idCardDocument.cardLanguage ==='босански'){
      doc.setFontSize(10)
      doc.text('х',113, 153)
      doc.setFontSize(8);
    }

    doc.text('(се одбира еден од наведените јазици)', 117, 153)


    doc.text('Барам податоците за личното име во образецот да бидат испишани на еден од наведените јазици и писмо', 22,161)

    doc.text('1. турски', 22, 165)
    doc.rect(36,163, 2,2)
    if(idCardDocument.nameLanguage ==='турски'){
      doc.setFontSize(10)
      doc.text('х',36, 165)
      doc.setFontSize(8);
    }
    doc.text('2. влашки', 40, 165)
    doc.rect(55,163, 2,2)
    if(idCardDocument.nameLanguage ==='влашки'){
      doc.setFontSize(10)
      doc.text('х',55, 165)
      doc.setFontSize(8);
    }
    doc.text('3. српски', 59, 165)
    doc.rect(73,163, 2,2)
    if(idCardDocument.nameLanguage ==='српски'){
      doc.setFontSize(10)
      doc.text('х',73, 165)
      doc.setFontSize(8);
    }

    doc.text('4. ромски', 77, 165)
    doc.rect(92,163, 2,2)
    if(idCardDocument.nameLanguage ==='ромски'){
      doc.setFontSize(10)
      doc.text('х',92, 165)
      doc.setFontSize(8);
    }

    
    doc.text('5. босански', 96, 165)
    doc.rect(113,163, 2,2)
    if(idCardDocument.nameLanguage ==='босански'){
      doc.setFontSize(10)
      doc.text('х',113, 165)
      doc.setFontSize(8);
    }

    doc.text('(се одбира еден од наведените јазици)', 117, 165)


    //TABELA 3

    doc.line(20, 181, 190, 181); // Line for separator
    doc.line(20, 190, 190, 190)
    doc.line(20, 195,190,195)
    doc.line(20,204,190,204)
    doc.line(20,214,190,214)
    doc.line(20,227,190,227)
    doc.line(20,232,190,232)
    doc.line(20,237,190,237)
    doc.line(20,242,190,242)
    doc.line(20,181,20,242)
    doc.line(190,181,190,242)
    //tekst tabela 3
    doc.setFontSize(10)
    doc.text('ЗА ОМАЖЕНИ-ОЖЕНЕТИ ', 22, 185)
    doc.setFontSize(8)
    doc.text('(презиме пред склучување на брак)', 68, 185)
    if(personalDetailsID.marriedLastName){
      doc.setFontSize(10)
      doc.text(personalDetailsID.marriedLastName, 130, 188)
      doc.setFontSize(8)
    }
    doc.line(120,189,185,189)
    doc.setFontSize(10)
    doc.text('ИМЕ НА РОДИТЕЛИТЕ', 80, 194)
    doc.text('ДЕН,МЕСЕЦ И ГОДИНА НА РАЃАЊЕ', 22,208)
    doc.text('МЕСТО НА РАЃАЊЕ ',22,217)
    doc.text('МАТИЧЕН БРОЈ', 22,231)
    doc.text('ПОЛ', 22,236)
    doc.text('ЖИВЕАЛИШТЕ И АДРЕСА', 22,241)
    doc.line(90,213,185,213)
    doc.text(personalDetailsID.birth,120,212 )
    doc.text(personalDetailsID.placeBirth,120,225 )
    doc.text(personalDetailsID.socialNumber,90,231)
    doc.text(personalDetailsID.address,90, 241)
    if(personalDetailsID.gender === 'машки'){
      doc.text('Х', 79.5,235.5)
    }else{
      doc.text('Х', 120.5,235.5)
    }
    doc.setFontSize(8)
    doc.text('(лице родено во странство ја запишува и државата)',57,217)
    doc.text('машки', 67,235.5)
    doc.text('женски', 107,235.5)
  
    doc.rect(79,233,3,3)
    doc.rect(120,233,3,3)
    doc.line(90,226,185,226)
    
    doc.text('Татко', 22, 198)
    doc.setFontSize(10)
    doc.text(personalDetailsID.fatherName, 60,202)
    doc.text(personalDetailsID.motherName,145, 202)
    doc.setFontSize(8)
    doc.line(40,203,100,203)
    doc.line(105,195,105,204)
    doc.text('Мајка', 107, 198)
    doc.line(125,203,185,203)

    
    //Soglasnost od roditeli
    doc.setFontSize(9.5)
    doc.text('3.СОГЛАСНОСТ ОД РОДИТЕЛИТЕ-СТАРАТЕЛОТ ЗА ИЗДАВАЊЕ НА ЛИЧНА КАРТА НА ЛИЦЕ ОД 15-18',22,250,{align:'justify'})
    doc.text('ГОДИНИ РОДИТЕЛИ СТАРАТЕЛИ',22,255)

    //cetvrta tabela
    doc.line(20,260,190,260)
    doc.line(20,265,190,265)
    doc.line(20,274,190,274)
    doc.line(20,283,190,283)
    doc.line(20,260,20,283)
    doc.line(30,260,30,283)
    doc.line(80,260,80,283)
    doc.line(120,260,120,283)
    doc.line(150,260,150,283)
    doc.line(190,260,190,283)
    doc.text(('Име и презиме'),42,264)
    doc.text('Матичен број', 88, 264)
    doc.text('Сродство', 127,264)
    doc.text('Потпис', 163,264)
    doc.text('1',24,271)
    doc.text('2',24,280)
    //vtora strana
    doc.addPage()
    //prva tabela
    doc.text('4. ПОДАТОЦИ ОД ПРЕТХОДЕН ДОКУМЕНТ НА ПОДНОСИТЕЛОТ', 25, 25)
    doc.line(20,32,190,32)
    doc.line(20,37,190,37)
    doc.line(20,32,20,37)
    doc.line(190,32,190,37)
    doc.line(20,42,190,42)
    doc.line(20,47,190,47)
    doc.line(20,52,190,52)
    doc.line(20,42,20,52)
    doc.line(190,42,190,52)
    doc.text('4.1 ПРЕТХОДНО ЖИВЕАЛИШТЕ И АДРЕСА:', 22,36)
    doc.text('4.2 БРОЈ НА ЛИЧНА КАРТА:', 22, 46 )
    doc.text('4.3 ОРГАН КОЈ ЈА ИЗДАЛ:', 22, 51 )
    doc.text('5. ПРИЛОГ КОН БАРАЊЕТО:',25, 109)
    //potpisi

    doc.setFontSize(9)
    doc.text('Датум и место на поднесување',23,64)
    doc.text('Потпис на подносителот',140,64)
    doc.line(23,74,80,74)
    doc.line(130,74,190,74)
    doc.text('Потпис на службеното лице кое го примило барањето', 23, 94)
    doc.text(personalDetailsID.phone, 70, 83)
    doc.line(55, 84,180,84)
    doc.line(112, 94,175,94)
    doc.setFontSize(8)
    doc.text('Податоци за контакт',23,84 )
    


    //vtora tabela

    doc.line(20, 114,190,114)
    doc.line(20, 124,190,124)
    doc.line(20, 134,190,134)
    doc.line(20, 144,190,144)
    doc.line(20, 154,190,154)
    doc.line(20, 164,190,164)
    doc.line(20, 174,190,174)
    doc.line(20,114,20,174)
    doc.line(190,114,190,174)
    doc.line(30,114,30,174)

    //checkboxes
    doc.rect(23,117,4,4)
    doc.rect(23,127,4,4)
    doc.rect(23,137,4,4)
    doc.rect(23,147,4,4)
    doc.rect(23,157,4,4)
    doc.rect(23,167,4,4)
    doc.setFontSize(8.5)
    doc.text('Извод од матичната книга на родените/венчаните(*)',32,119)
    doc.text('Доказ за ново место на живеење (доколку се бара замена на лична карта поради промена на',32,128)
    doc.text('живеалиште-во постапка под реден број 1.4)',32,132)

    doc.text('Проверка во Сл.Весник дека личната карта е огласена за неважечка(*)', 32, 139)
    doc.text('Препис од матичната книга на родените за малолетно лице во постапката под реден број 1.1(*)', 32, 149)
    doc.text('Доказ за промена на лично име(матична книга на венчани,решение за промена на лично име,и др.)', 32,159)

    doc.text('Други документи неопходни за постапката',32,168)
    doc.line(100, 168,185,168)
    doc.line(32, 173,85,173)

    doc.text('Доказите означени со ѕвезда(*) се смета дека се поднесени во прилог на барањето и истите Министерството', 23,182)
    doc.text('за внатрешни работи ги прибавува по слижбена должност', 23,186)
    doc.setLineWidth(0.5)
    doc.line(23,191, 185,191)
    doc.setFontSize(9)
    doc.text('УПАТСТВО ЗА ПОПОЛНУВАЊЕ НА БАРАЊЕТО ЗА ПРОМЕНА НА ЛИЧНА КАРТА:',25,199)
    doc.setFontSize(8.5)
    doc.text('•  Податоците од делот 2, ги пополнува поднесителот на барањето;',25,205)
    doc.text('•  Делот од барањето во точка 2.2 се пополнува само кога подносителот бара личната карта да биде издадена',25,210)
    doc.text('на еден од начините и јазиците наведени во овој дел;',28, 214 )
    doc.text('•  Податоците од делот 3, ги пополнуваат родителите-старателите доколку барањето за издавање на лична',25,219)
    doc.text('карта се однесува и за малолетното дете;',28, 223 )
    doc.text('•  Податоците од делот 4, ги пополнува службеното лице;',25,228)
    doc.text('•  Доколку во текот на постапката се појави потреба од прибавување на други документи, а Министерството,',25,233)
    doc.text('не е во можност да ги прибави по службена должност, подносителот на барањето дополнително ќе биде',25,237)
    doc.text('известен истите да ги приложи кон барањето.',25,241)
    doc.save('example.pdf');
    
  }
  return(
    <Button onClick={generatePDF} sx={{ mt: 1, mr: 1 }}>
    Download Document
    </Button>
   
  )
};
