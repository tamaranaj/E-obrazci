import jsPDF from "jspdf";
import { Children, IDCardDocument, PersonalDetailsID } from "../../Types/interfaces";
import { addNotoSerifFont } from "../../addNotoSerifFont";
import { checkIdCardLanguage, checkIdCardNameLanguage } from "./checkLanguagesIdCard";

export const generateIdCardDocumentMKD = (idCardDocument: IDCardDocument, personalDetailsID: PersonalDetailsID, child:Children ) =>{
    const doc = new jsPDF()
    addNotoSerifFont(doc);
    doc.setFont("NotoSerif", "normal");
    doc.setFontSize(8);
    doc.text('Образец бр.1', 185, 25, { align: 'right' });
    doc.text('ДО:', 25, 30,{align: 'left'})
    doc.text('МИНИСТЕРСТВО ЗА ВНАТРЕШНИ РАБОТИ НА РЕПУБЛИКА СЕВЕРНА МАКЕДОНИЈА', 25, 35,{align: 'left'})
    doc.text('БАРАЊЕ ЗА ИЗДАВАЊЕ НА ЛИЧНА КАРТА', 100, 43, { align: 'center' });
    doc.setLineWidth(0.5)
    doc.line(25, 44, 185, 44); 
    
    //bold react
    if(idCardDocument.reason==='1'){
      doc.roundedRect(28,58.5,8,5,3,4 )
    }
    if(idCardDocument.reason==='2'){
      doc.roundedRect(28,63.5,8,5,3,4 )
    }
    if(idCardDocument.reason==='3'){
      doc.roundedRect(28,68.5,8,5,3,4 )
    }
    if(idCardDocument.reason==='4'){
      doc.roundedRect(28,73.5,8,5,3,4 )
    }
    if(idCardDocument.reason==='5'){
      doc.roundedRect(28,78.5,8,5,3,4 )
    }
   
    doc.setLineWidth(0.1)
    doc.setFontSize(9);
    doc.text('ТИП-А', 25, 48,{align: 'left'})
    doc.line(25, 49, 185, 49); 

    //ОДГОВОРИ
    doc.setFontSize(10);
    doc.text(personalDetailsID.firstName,58,112)
    doc.text(personalDetailsID.lastName, 144,112)
    
    doc.text(personalDetailsID.fatherName, 60,173)
    doc.text(personalDetailsID.motherName,145, 173)
    doc.text(personalDetailsID.birth,120,185 )
    doc.text(personalDetailsID.placeBirth,140,185 )
    doc.text(personalDetailsID.socialNumber,120,193)
    doc.text(personalDetailsID.address,90, 222)
     if(personalDetailsID.marriedLastName){
      doc.text(personalDetailsID.marriedLastName, 130, 159)
    }
    if(personalDetailsID.previousAddress){
      doc.text(personalDetailsID.previousAddress,90,215)
    }
  
    doc.text(personalDetailsID.citizenship,105,199)
    if(child.parents.length){
      if(child.parents[0]){
        doc.text(`${child.parents[0].firstName} ${child.parents[0].lastName}`, 32,243)
        doc.text(`${child.parents[0].socialNumber}`, 85,243)
        doc.text(`${child.parents[0].relation}`, 125,243)
      }
      if(child.parents[1]){
        doc.text(`${child.parents[1].firstName} ${child.parents[1].lastName}`, 32,252)
        doc.text(`${child.parents[1].socialNumber}`, 85,252)
        doc.text(`${child.parents[1].relation}`, 125,252)
      }
    }
    

    // Причини за барање
     doc.setFontSize(9);
    doc.text('1.  Причина за барање (да се заокружи еден од основните)', 25, 57, {align: 'left'});
    doc.text('1.1   прв пат', 30, 62, {align:'left'})
    doc.text('1.2   редовна замена', 30, 67, {align:'left'})
    doc.text('1.3   промена на податоци (лични податоци, адреса и живеалиште)', 30, 72, {align:'left'})
    doc.text('1.4   дупликат лична карта (изгубена или украдена)', 30, 77, {align:'left'})
    doc.text('1.5   предвремена замена заради оштетеност на личната карта', 30, 82, {align:'left'})
    doc.setFontSize(8);

    //Лични податоци
    doc.text('2. ПОДАТОЦИ ЗА ПОДНЕСИТЕЛОТ НА БАРАЊЕТО', 25,92,{align: 'left'})
    doc.text('2.1', 30, 100, {align: 'left'})
    doc.text('2.2', 30, 123, {align: 'left'})
    doc.line(20, 101, 190, 101); 
    doc.line(20,101,20,115)
    doc.line(190,101,190,115)
    doc.line(105, 101,105, 115)
    doc.line(20, 105, 190, 105); 
    doc.line(20, 115, 190, 115); 
    doc.text('ИМЕ',55, 104 )  
    doc.text('ПРЕЗИМЕ',137, 104 ) 
    doc.text('1.македонски.јазик',22,113)
    doc.line(55,113,100,113)
    doc.text('1.македонски.јазик',107,113)
    doc.line(140, 113, 185, 113 )

    // втора табела
    doc.line(20, 124, 190, 124); 
    doc.line(20, 136, 190, 136)
    doc.line(20, 148,190,148)
    doc.line(20,124,20,148)
    doc.line(190,124,190,148)
    doc.text('Барам образецот да биде изготвен на еден од наведените јазици и писмо',22,127 )
    doc.text('1. турски', 22, 131)
    doc.rect(36,129, 2,2)
    doc.text('2. влашки', 40, 131)
    doc.rect(55,129, 2,2)
    doc.text('3. српски', 59, 131)
    doc.rect(73,129, 2,2)
    doc.text('4. ромски', 77, 131)
    doc.rect(92,129, 2,2)
    doc.text('5. босански', 96, 131)
    doc.rect(113,129, 2,2)
    doc.text('(се одбира еден од наведените јазици)', 117, 131)
    checkIdCardLanguage(doc,idCardDocument)

    doc.text('Барам податоците за личното име во образецот да бидат испишани на еден од наведените јазици и писмо', 22,139)
    doc.text('1. турски', 22, 143)
    doc.rect(36,141, 2,2)
    doc.text('2. влашки', 40, 143)
    doc.rect(55,141, 2,2)
    doc.text('3. српски', 59, 143)
    doc.rect(73,141, 2,2)
    doc.text('4. ромски', 77, 143)
    doc.rect(92,141, 2,2)
    doc.text('5. босански', 96, 143)
    doc.rect(113,141, 2,2)
    doc.text('(се одбира еден од наведените јазици)', 117, 143)
    checkIdCardNameLanguage(doc, idCardDocument)
    
    //трета табела
    doc.line(20, 153, 190, 153);
    doc.line(20, 162, 190, 162)
    doc.line(20, 167,190,167)
    doc.line(20,176,190,176)
    doc.line(20,188,190,188)
    doc.line(20,196,190,196)
    doc.line(20,201,190,201)
    doc.line(20,206,190,206)
    doc.line(20,217,190,217)
    doc.line(20,224,190,224)
    doc.line(20,153,20,224)
    doc.line(190,153,190,224)
    //текст 3-та табела
    doc.text('ЗА ОМАЖЕНИ-ОЖЕНЕТИ ', 22, 157)
    doc.text('(презиме пред склучување на бракот)', 58, 157)
    doc.line(120,160,185,160)
    doc.text('ИМЕ НА РОДИТЕЛИТЕ', 90, 166)  
    doc.text('Татко', 22, 170)
    doc.line(40,174,100,174)
    doc.line(105,167,105,176)
    doc.text('Мајка', 107, 170)
    doc.line(125,174,185,174)
    doc.text('ДЕН,МЕСЕЦ,ГОДИНА НА РАЃАЊЕ И МЕСТО НА РАЃАЊЕ', 22,179.5)
    doc.line(100,186,185,186)
    doc.text('МАТИЧЕН БРОЈ', 22,191)
    doc.line(100,194,185,194)
    doc.text('ДРЖАВЈАНСТВО', 22,199)
    doc.line(100,200,185,200)
    doc.text('ПОЛ', 22,204)
    doc.text('машки', 67,204.5)
    doc.text('женски', 107,204.5)
    doc.rect(79,202,3,3)
    doc.rect(120,202,3,3)
    if(personalDetailsID.gender === 'машки'){
      doc.text('Х', 79.5,204.5)
      doc.setLineWidth(0.5)
      doc.rect(79,202,3,3)
      doc.setLineWidth(0.1)
    }else{
      doc.text('Х', 120.5,204.5)
      doc.setLineWidth(0.5)
      doc.rect(120,202,3,3)
      doc.setLineWidth(0.1)
    }
   
    doc.text('ПРЕТХОДНО ЖИВЕАЛИШТЕ И АДРЕСА', 22,209)
    doc.line(80,216,185,216)
    doc.text('НОВО ЖИВЕАЛИШТЕ И АДРЕСА', 22,223)
    doc.line(80,223,185,223)
  
   
    
    //Согласност од родители/старатели четврта табела
    doc.text('3.СОГЛАСНОСТ ОД РОДИТЕЛИТЕ-СТАРАТЕЛОТ ЗА ИЗДАВАЊЕ НА ЛИЧНА КАРТА НА ЛИЦЕ ОД 15-18 ГОДИНИ',22,230,{align:'justify'})
    doc.line(20,232,190,232) 
    doc.line(20,237,190,237) 
    doc.line(20,246,190,246) 
    doc.line(20,255,190,255) 
    doc.line(20,232,20,255)  
    doc.line(30,232,30,255) 
    doc.line(80,232,80,255) 
    doc.line(120,232,120,255) 
    doc.line(150,232,150,255) 
    doc.line(190,232,190,255) 
    doc.text(('Име и презиме'),42,236) 
    doc.text('Матичен број', 88, 236) 
    doc.text('Сродство', 127,236) 
    doc.text('Потпис', 163,236) 
    doc.text('1',24,243) 
    doc.text('2',24,252) 

    //петта табела
    doc.text('4. ПОДАТОЦИ ОД ПРЕТХОДЕН ДОКУМЕНТ НА ПОДНОСИТЕЛОТ', 25, 263)
    doc.line(20,264,190,264)
    doc.line(20,269,190,269)
    doc.line(20,274,190,274)
    doc.line(20,264,20,274)
    doc.line(190,264,190,274)
    doc.text('4.1 БРОЈ НА ЛИЧНА КАРТА:', 22, 268 )
    doc.text('4.2 ОРГАН КОЈ ЈА ИЗДАЛ:', 22, 273 )
    
    
    //ВТОРА СТРАНА
    doc.addPage()
    doc.text('5. ПОСТАПКА ЗА ИЗДАВАЊЕ НА ЛИЧНА КАРТА',25, 25)
    doc.setFontSize(9)
    doc.text('Барам личната карта да биде издадена во',30, 33)
    doc.text('1. Редовна постапка',25, 40)
    doc.text('2. Итна постапка (во случај кога нема промена на живеалиште или адреса на стан)',25, 45)
    if(idCardDocument.procedure === 'редовна'){
      doc.setLineWidth(0.5)
      doc.rect(165,37,3,3)
      doc.text('Х', 165.5,39.5)
      doc.setLineWidth(0.1)
    }else{
      doc.setLineWidth(0.5)
      doc.text('Х', 165.5,44.5)
      doc.rect(165,42,3,3)
      doc.setLineWidth(0.1)
    }
    doc.rect(165,37,3,3)
    doc.rect(165,42,3,3)
   
    //ПОТПИСИ
    doc.text('Датум и место на поднесување',23,54)
    doc.text('Потпис на подносителот',140,54)
    doc.line(23,62,80,62)
    doc.line(130,62,190,62)
    doc.text('Податоци за контакт',23,70 )
    doc.line(60, 70,130,70)
    doc.text('Потпис на службеното лице кое го примило барањето', 23, 79)
    doc.line(115, 80,175,80)
    doc.setFontSize(10)
    if(personalDetailsID.phone){
      doc.text(personalDetailsID.phone, 70, 69)
    }else{
      doc.text(personalDetailsID.email, 70, 69)
    }
    
    doc.setFontSize(8.5)
    //прва табела
    doc.text('6. ПРИЛОГ КОН БАРАЊЕТО:',25, 91)
    doc.line(20, 99,191,99)
    doc.line(20, 114,191,114)
    doc.line(20, 120,191,120)
    doc.line(20, 126,191,126)
    doc.line(20, 132,191,132)
    doc.line(20, 138,191,138)
    doc.line(20, 153,191,153)
    doc.line(20,99,20,153)
    doc.line(191,99,191,153)
    doc.line(30,99,30,153)
    //checkboxes
    doc.text('При поднесување на барањето се врши проверка на идентитетот на подносителот на барањето со увид',31,104)
    doc.text('во лична карта или друг документ за лична идентификација што има фотографија, издаден од државен',31,108)
    doc.text('орган',31,112)
    doc.text('Извод од матичната книга на родените/венчаните(*) 1.1 и 1.3',31,118)
    doc.text('Доказ за промена на личните податоци/живеалиштето/адреса-за 1.3 (*)',31,124)
    doc.text('Доказ дека личната карта е огласена за неважечка - за 1.4 (*)',31,130)
    doc.text('Изјава за изгубена или украдена лична карта - за 1.4 (*)', 31, 136)
    doc.text('Други документи неопходни за постапката',31,143)
    doc.line(100, 145,185,145)
    doc.line(32, 151,85,151)
    doc.text('Доказите означени со ѕвезда(*) се смета дека се поднесени во прилог на барањето и истите Министерството', 23,162)
    doc.text('за внатрешни работи ги прибавува по слижбена должност', 23,166)
    doc.setLineWidth(0.5)
    doc.line(23,175, 185,175)
    //RECT
    doc.rect(23.5,102,3,3)
    doc.rect(23.5,115.5,3,3)
    doc.rect(23.5,121.5,3,3)
    doc.rect(23.5,127.5,3,3)
    doc.rect(23.5,133.5,3,3)
    doc.rect(23.5,141,3,3)
    doc.rect(23,187,3,3)
    doc.setLineWidth(0.1)
    //согласност од подносителот
    doc.setFontSize(10)
    doc.text("X", 23.2,189.8)
    doc.setFontSize(9)
    doc.text('7. СОГЛАСНОСТ ОД ПОДНОСИТЕЛОТ НА БАРАЊЕТО:',23, 182)
    doc.text('Подносителот на барањето е согласен неговите/нивните лични податоци да се користат во постапката',27, 190)
    doc.text('за остварување на правото пред надлежните органи за прибавување на СИТЕ документи означени со ',23, 195)
    doc.text('ѕвезда(*) од делот 6 на ова барање.',23, 200)
    doc.text('Потпис на подносителот',40,210)
    doc.line(30,218,90,218)
    //упатство
    doc.text('УПАТСТВО ЗА ПОПОЛНУВАЊЕ НА БАРАЊЕТО ЗА ПРОМЕНА НА ЛИЧНА КАРТА:',20,230)
    doc.text('•  Податоците од делот 1,2,5 ги пополнува поднесителот на барањето;',18,237)
    doc.text('•  Делот од барањето во точка 2.2 се пополнува само кога подносителот бара личната карта да биде издадена',18,244)
    doc.text('на еден од начините и јазиците наведени во овој дел;',21, 248 )
    doc.text('•  Податоците од делот 3, ги пополнуваат родителите-старателите доколку барањето за издавање на лична',18,254)
    doc.text('карта се однесува и за малолетното дете;',21, 258 )
    doc.text('•  Податоците од делот 4, ги пополнува службеното лице;',18,264)
    doc.text('•  Доколку во текот на постапката се појави потреба од прибавување на други документи, а Министерството,',18,270)
    doc.text('не е во можност да ги прибави по службена должност, подносителот на барањето дополнително ќе биде',21,274)
    doc.text('известен истите да ги приложи кон барањето.',21,278)
    doc.save(`${personalDetailsID.firstName}${personalDetailsID.lastName}IdCard.pdf`);
    
  }
