import jsPDF from "jspdf";
import { Passport, PersonalDetailsID } from "../../Types/interfaces";
import { addArimoFontBold } from "../../addNotoSerifFontBold";
import { checkFormLanguage, checkPassportCardLanguage, checkPassportNameLanguage } from "./checkLanguagesPassport";


export const generatePassportDocumentMKD = (personalInfo: PersonalDetailsID,passport:Passport, date:string  )=>{

    const doc = new jsPDF()
    addArimoFontBold(doc);
    doc.setFont('ArimoBold', 'bold');
    doc.setFontSize(9);
    doc.text('Прилог бр.7', 185, 20, { align: 'right' });
    doc.text('ДО:', 25, 25,{align: 'left'})
    doc.text('МИНИСТЕРСТВО ЗА ВНАТРЕШНИ РАБОТИ НА РЕПУБЛИКА СЕВЕРНА МАКЕДОНИЈА', 40, 30,{align: 'left'})
    doc.text('БАРАЊЕ ЗА ИЗДАВАЊЕ НА ПАСОШ', 100, 37, { align: 'center' });
    doc.text('ТИП-А',25,41)
    doc.line(23, 42, 187, 42); 

    //ПРИЧИНИ ЗА БАРАЊЕ
    doc.text('1.  Причина за барање (се одбира еден од основните)', 25, 47, {align: 'left'});
    doc.text('1.1 прв пат', 27, 52, {align:'left'})
    doc.rect(47,49.5,3,3)
    if(passport.reason ==='1'){
      doc.text('X',47.5, 52)
      doc.setLineWidth(0.3)
      doc.rect(47,49.5, 3,3)
      doc.setLineWidth(0.1)
    }
    doc.text('1.2 редовна замена', 27, 57, {align:'left'})
    doc.rect(61,54.5,3,3)
    if(passport.reason ==='2'){
      doc.text('X',61.5, 57)
      doc.setLineWidth(0.3)
      doc.rect(61,54.5, 3,3)
      doc.setLineWidth(0.1)
    }
    doc.text('1.3 промена на лични податоци', 27, 62, {align:'left'})
    doc.rect(80,59.5,3,3)
    if(passport.reason ==='3'){
      doc.text('X',80.5, 62)
      doc.setLineWidth(0.3)
      doc.rect(80,59.5, 3,3)
      doc.setLineWidth(0.1)
    }
    doc.text('1.4 замена поради други причини (исполнетост или друго)', 27, 67, {align:'left'})
    doc.rect(124,64.5,3,3)
    if(passport.reason ==='4'){
      doc.text('X',124.5, 67)
      doc.setLineWidth(0.3)
      doc.rect(124,64.5, 3,3)
      doc.setLineWidth(0.1)
    }
    doc.text('1.5 дупликат пасош (изгубен,исчезнат или украден)', 27, 72, {align:'left'})
    doc.rect(112,69.5,3,3)
    if(passport.reason ==='5'){
      doc.text('X',112.5, 72)
      doc.setLineWidth(0.3)
      doc.rect(112,69.5, 3,3)
      doc.setLineWidth(0.1)
    }
    doc.text('1.6 предвремена замена поради оштетеност на пасошот', 27, 77, {align:'left'})
    doc.rect(120,74.5,3,3)
    if(passport.reason ==='6'){
      doc.text('X',120.5, 77)
      doc.setLineWidth(0.3)
      doc.rect(120,74.5, 3,3)
      doc.setLineWidth(0.1)
    }
    doc.text('1.7 издавање на пасош со ограничен рок на важење', 27, 82, {align:'left'})
    doc.rect(112,79.5,3,3)
    if(passport.reason ==='7'){
      doc.text('X',112.5, 82)
      doc.setLineWidth(0.3)
      doc.rect(112,79.5, 3,3)
      doc.setLineWidth(0.1)
    }

    //ПОДАТОЦИ ЗА ПОДНЕСИТЕЛОТ НА БАРАЊЕТО
    doc.text('2. ПОДАТОЦИ ЗА ПОДНОСИТЕЛОТ НА БАРАЊЕТО', 25, 90, {align:'left'})
    doc.text('2.1', 25, 97)
    //ПРВА ТАБЕЛА
    doc.line(20, 100, 190.5, 100); 
    doc.line(20,100,20,115)
    doc.line(190.5,100,190.5,115)
    doc.line(105, 100,105, 115)
    doc.line(20, 105, 190.5, 105); 
    doc.line(20, 115, 190.5, 115); 
    doc.text('ИМЕ',55, 104 )  
    doc.text('ПРЕЗИМЕ',137, 104 ) 
    doc.text('1.македонски.јазик',22,113)
    doc.line(55,113,100,113)
    doc.text('1.македонски.јазик',107,113)
    doc.line(140, 113, 185, 113 )

    //ОДГОВОРИ
    doc.setFontSize(10)
    doc.text(personalInfo.firstName,62,112)
    doc.text(personalInfo.lastName,147,112)
    if(personalInfo.marriedLastName){
      doc.text(personalInfo.marriedLastName,135,177)
     }
     doc.text(personalInfo.birth,110,187)
     doc.text(personalInfo.placeBirth,145,194)
     doc.text(personalInfo.socialNumber,90,199)
     doc.text(personalInfo.address,90,213)
     doc.text(personalInfo.citizenship,90,219)
     doc.text(personalInfo.fatherName,50,233)
     doc.text(personalInfo.motherName,135,233)
     if(personalInfo.parents[0].firstName !== ''){
      doc.text(`${personalInfo.parents[0].firstName} ${personalInfo.parents[0].lastName}`, 32,253)
      doc.text(`${personalInfo.parents[0].socialNumber}`, 85,253)
      doc.text(`${personalInfo.parents[0].relation}`, 125,253)
    }
    if(personalInfo.parents[1]){
      doc.text(`${personalInfo.parents[1].firstName} ${personalInfo.parents[1].lastName}`, 32,258)
      doc.text(`${personalInfo.parents[1].socialNumber}`, 85,258)
      doc.text(`${personalInfo.parents[1].relation}`, 125,258)
    }
    doc.setFontSize(9)
    //ВТОРА ТАБЕЛА
    doc.text('2.2', 25, 122)
    doc.setFontSize(9.5)
    doc.line(20, 125, 190.5, 125);
    doc.line(20, 137, 190.5, 137)
    doc.line(20, 154,190.5,154)
    doc.line(20, 166,190.5,166)
    doc.line(20,125,20,166)
    doc.line(190.5,125,190.5,166) 
    doc.text('Барам образецот да биде изготвен на еден од наведените јазици и писмо',21,130 ) 
    doc.text('1.турски', 21, 135) 
    doc.rect(36,132, 3,3) 
    doc.text('2.влашки', 41, 135)
    doc.rect(57,132, 3,3)
    doc.text('3.српски', 62, 135)
    doc.rect(77,132, 3,3)
    doc.text('4.ромски', 82, 135)
    doc.rect(98,132, 3,3)
    doc.text('5.босански', 102, 135)
    doc.rect(121,132,  3,3)
    doc.text('(се одбира еден од наведените јазици)', 125, 135)
    checkPassportCardLanguage(doc,passport)

    doc.text('Барам податоците за личното име во образецот да бидат испишани на еден од наведените јазици и', 21,142)
    doc.text('писмо', 21,147)
    doc.text('1.турски', 21, 152)
    doc.rect(36,149, 3,3)
    doc.text('2.влашки', 41, 152)
    doc.rect(57,149, 3,3)
    doc.text('3.српски', 62, 152)
    doc.rect(77,149, 3,3)
    doc.text('4.ромски', 82, 152)
    doc.rect(98,149, 3,3)
    doc.text('5.босански', 102, 152)
    doc.rect(121,149,  3,3)
    doc.text('(се одбира еден од наведените јазици)', 125, 152)
    checkPassportNameLanguage(doc, passport)
 
    doc.text('Барам податоците во образецот да бидат испишани на еден од наведените јазици и писмо', 21,159)
    doc.text('1.турски', 21, 164)
    doc.rect(36,161, 3,3)
    doc.text('2.влашки', 41, 164)
    doc.rect(57,161, 3,3)
    doc.text('3.српски', 62, 164)
    doc.rect(77,161, 3,3)
    doc.text('4.ромски', 82, 164)
    doc.rect(98,161, 3,3) 
    doc.text('5.босански', 102, 164)
    doc.rect(121,161,  3,3)
    doc.text('(се одбира еден од наведените јазици)', 125, 164)
    checkFormLanguage(doc,passport)
    
     //ТРЕТА ТАБЕЛА
     doc.line(20, 170, 190, 170);
     doc.text('ЗА ОМАЖЕНИ-ОЖЕНЕТИ(презиме пред склучување на бракот)', 21, 174)
     doc.line(130,178,185,178)    
     doc.line(20, 180,190,180)
     doc.text('ДЕН,МЕСЕЦ И ГОДИНА НА РАЃАЊЕ', 21,184)
     doc.line(100,188,185,188)
     doc.line(20,190,190,190)
     doc.text('МЕСТО НА РАЃАЊЕ(лице родено во странство ја запишува и државата)', 21,193.5 )
     doc.line(20,195,190,195)
     doc.text('МАТИЧЕН БРОЈ', 21,198.5)
     doc.line(20,200,190,200)
     doc.text('ПОЛ', 21,203.5)
    doc.text('машки', 67,203.5)
    doc.text('женски', 107,203.5)
    doc.rect(79,201,3,3)
    doc.rect(120,201,3,3)
    if(personalInfo.gender === 'машки'){
      doc.text('Х', 79.5,203.7)
      doc.setLineWidth(0.5)
      doc.rect(79,201,3,3)
      doc.setLineWidth(0.1)
    }else{
      doc.text('Х', 120.5,203.7)
      doc.setLineWidth(0.5)
      doc.rect(120,201,3,3)
      doc.setLineWidth(0.1)
    }
     doc.line(20,205,190,205)
     doc.text('ЖИВЕАЛИШТЕ И АДРЕСА', 21,208)
     doc.line(80,214,185,214)
     doc.line(20,215,190,215)
     doc.text('ДРЖАВЈАНСТВО', 21,218.5)
     doc.line(20,220,190,220)
     doc.text('ПОДАТОЦИ ЗА РОДИТЕЛИТЕ', 80,223.5)
     doc.line(20,225,190,225)
     doc.text('Татко', 21, 229)
     doc.line(40,234,100,234)
     doc.text('Мајка', 106, 229)
     doc.line(125,234,185,234)
     doc.line(20,235,190,235)
     doc.line(20,170,20,235)
     doc.line(190,170,190,235)
     doc.line(105,225,105,235)

     //СОГЛАСНОСТ ОД РОДИТЕЛ/СТАРАТЕЛ И 4ТА ТАБЕЛА
    doc.text('3.СОГЛАСНОСТ ОД РОДИТЕЛИТЕ-СТАРАТЕЛОТ ЗА ИЗДАВАЊЕ НА ПАСОШ ЗА МАЛОЛЕТНО ДЕТЕ',21,242,{align:'justify'})
     doc.line(20,244,190,244) 
     doc.line(20,249,190,249) 
     doc.line(20,254,190,254) 
     doc.line(20,259,190,259) 
     doc.line(20,244,20,259)  
     doc.line(30,244,30,259)  
     doc.line(80,244,80,259)  
     doc.line(120,244,120,259) 
     doc.line(150,244,150,259) 
     doc.line(190,244,190,259) 
     doc.text(('Име и презиме'),42,247.5)  
     doc.text('Матичен број', 88, 247.5) 
     doc.text('Сродство', 127,247.5) 
     doc.text('Потпис', 163,247.5) 
     doc.text('1',24,252.5) 
     doc.text('2',24,257.5) 

     //ПЕТТА ТАБЕЛА
    doc.text('4. ПОДАТОЦИ ОД ПРЕТХОДЕН ДОКУМЕНТ НА ПОДНОСИТЕЛОТ', 21, 266)
    doc.line(20,268,190,268) 
    doc.line(20,273,190,273) 
    doc.line(20,278,190,278) 
    doc.line(20,268,20,278)  
    doc.line(190,268,190,278)
    doc.text('1. БРОЈ НА ПАСОШ:', 22, 272 )
    doc.text('2. ОРГАН КОЈ ГО ИЗДАЛ:', 22, 277 )

     //ВТОРА СТРАНА
     doc.addPage()
     doc.text('5. БАРАМ ПАСОШОТ ДА БИДЕ ИЗГОТВЕН ВО',22, 25)
     doc.line(20,28,190,28)
     doc.text('1. РЕДОВНА ПОСТАПКА', 21,32)
     doc.rect(65,29,3,3)
     doc.line(20,33,190,33)
     doc.text('2. ИТНА ПОСТАПКА',21,37)
     doc.rect(65,34,3,3)
     doc.line(20,38,190,38)
     doc.line(20,28,20,38)
     doc.line(190,28,190,38)
     if(passport.procedure === 'редовна'){
      doc.setLineWidth(0.5)
      doc.rect(65,29,3,3)
      doc.text('Х', 65.5,31.7)
      doc.setLineWidth(0.1)
    }else{
      doc.setLineWidth(0.5)
      doc.text('Х', 65.5,36.7)
      doc.rect(65,34,3,3)
      doc.setLineWidth(0.1)
    }

     //ПОТПИСИ
    doc.text('Датум и место на поднесување',23,45)
    doc.text(date, 30,51)
    doc.text('Потпис на подносителот',133,45)
    doc.line(23,52,80,52)
    doc.line(125,52,180,52)
    doc.text('Податоци за контакт',23,57 )
    doc.line(58, 58,130,58)
    doc.text('Потпис на службеното лице кое го примило барањето', 23, 63)
    doc.line(115, 64,175,64)
    doc.text('6. ПРИЛОГ КОН БАРАЊЕТО',22,70)
    doc.line(20, 72,191,72)
    doc.line(20, 87,191,87)
    doc.line(20, 93,191,93)
    doc.line(20,72,20,93)
    doc.line(191,72,191,93)
    doc.line(30,72,30,93)

    //RECT
    doc.rect(23.5,75,3,3)
    doc.rect(23.5,88.5,3,3)
    doc.rect(23.5,100,3,3)
    doc.rect(23.5,105,3,3)
    doc.rect(23.5,110,3,3)
    doc.rect(23.5,115,3,3)
    doc.rect(23.5,123,3,3)
    doc.rect(23.5,138,3,3)

    //ШЕСТА ТАБЕЛА
    doc.text('При поднесување на барање се врши проверка на идентитетот на подносителот на барањето',31,77)
    doc.text('со увид во лична карта или друг документ за лична идентификација што има фотографија,',31,81)
    doc.text('издаден од државен орган',31,85)
    doc.text('Извод од матичната книга на родените/венчаните - за 1.1 и 1.3 (*)',31,91)
    doc.line(20, 99,191,99)
    doc.text('Согласност од родител или уредно и заверено полномоштво од родител/старател', 31, 103)
    doc.line(20, 104,191,104)
    doc.text('Доказ за старателство', 31, 108)
    doc.line(20, 109,191,109)
    doc.text('Пријава/изјава/потврда за загубен, исчезнат или украден пасош-за 1.5(*)', 31, 113)
    doc.line(20, 114,191,114)
    doc.text('Доказ дека пасошот е огласен за неважечки за 1.5(*)', 31, 118)
    doc.line(20,119,191,119)
    doc.text('Ако при поднесување на барањето за промена на лично име на малолетно дете, еден од ', 31, 123)
    doc.text('родителите не дал согласност за промената, согласноста може да се обезбеди од страна на', 31, 127)
    doc.text('надлежен орган за старателство (*)', 31, 131)
    doc.text('-ВО СЛУЧАЈ КОГА ДРУГИОТ РОДИТЕЛ НЕ МОЖЕ ИСТАТА ДА ЈА ОБЕЗБЕДИ', 31, 136)
    doc.line(20,137,191,137)
    doc.text('Други документи неопходни за постапката', 31, 141)
    doc.line(20,142,191,142)
    doc.line(20,99,20,142)
    doc.line(191,99,191,142)
    doc.line(30,99,30,142)
    doc.setFontSize(9)
    doc.text('Доказите означени со ѕвезда(*) се смета дека се поднесени во прилог на барањето и истите ', 21,148)
    doc.text('Министерството за внатрешни работи ги прибавува по слижбена должност', 21,152)
    doc.setLineWidth(0.5)
    doc.line(20,154, 191,154)
    doc.line(20,192, 191,192)
    doc.setLineWidth(0.1)

    //СОГЛАСТОСТ ОД ПОДНОСИТЕЛОТ
    doc.text('7. СОГЛАСНОСТ ОД ПОДНОСИТЕЛОТ НА БАРАЊЕТО:',22, 160)
    doc.rect(21,163,3,3)
    doc.text('Подносителот на барањето е согласен неговите/нивните лични податоци да се користат во постапката',25, 166)
    doc.text('за остварување на правото пред надлежните органи за прибавување на СИТЕ документи означени со ',21, 171)
    doc.text('ѕвезда(*) од делот 6 на ова барање.',21, 176)
    doc.text('Потпис на подносителот',21,183)
    doc.line(21,190,80,190)

    //УПАТСТВО ЗА ПОПОЛНУУВАЊЕ
    doc.text('УПАТСТВО ЗА ПОПОЛНУВАЊЕ НА БАРАЊЕТО ЗА ИЗДАВАЊЕ НА ПАСОШ:',22,200)
    doc.text('•  Податоците од делот 1 и 2 ги пополнува поднесителот на барањето. Доколку се работи за малолетно дете',18,207)
    doc.text('/лице овие податоци ги пополнува родителот/старателот;',21,212)
    doc.text('•  Делот од барањето во точка 2.2 се пополнува само кога подносителот бара патната исправа да биде ',18,218)
    doc.text('издадена на еден од начините и јазиците наведени во овој дел;',21, 223 )
    doc.text('•  Податоците од делот 3 ги пополнуваат родителите/старателите',18,229)
    doc.text('•  Податоците од делот 4 ги пополнува службеното лице;',18,235)
    doc.text('•  Податоците од делот 5 ги пополнува поднесителот на барањето;',18,241)
    doc.text('•  Подносителот на барањето самиот го избира начинот на кој Министерството за внатрешни работи ќе',18,247)
    doc.text('може да оствари контакт со истиот (телефонски или електронски пат). Избраниот начин за контакт се',21,252)
    doc.text('наведува во делот "податоци за контакт";',21,257)
    doc.text('•  Доколку во текот на постапката се појави потреба од прибавување на документите наведени во делот 6',18,263)
    doc.text('кои не се означени со ѕвезда(*), а Министерството за внатрешни работи, не е во можност да ги прибави',21,268)
    doc.text('по службена должност, подносителот на барањето дополнително ќе биде известен истите да ги приложи',21,273)
    doc.text('кон барањето.',21,278)
    doc.save('passport.pdf');
}
