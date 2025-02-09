import jsPDF from "jspdf";
import { IDCardDocument, PersonalDetailsID } from "../../Types/interfaces";
import { addNotoSerifFont } from "../../addNotoSerifFont";
import { addArimoFontBold } from "../../addNotoSerifFontBold";

export const generateIDCardALB = (idCardDocument:IDCardDocument, personalInfo: PersonalDetailsID, date: string )=>{


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
    if(idCardDocument.reason==='1'){
        doc.roundedRect(21,46.5,7,5,3,4 )
      }
    if(idCardDocument.reason==='2'){
        doc.roundedRect(21,51.5,7,5,3,4 )
      }
    if(idCardDocument.reason==='3'){
        doc.roundedRect(21,56.5,7,5,3,4 )
      }
      if(idCardDocument.reason==='4'){
        doc.roundedRect(21,66.5,7,5,3,4 )
      }
      if(idCardDocument.reason==='5'){
        doc.roundedRect(21,71.5,7,5,3,4 )
      }
    doc.setLineWidth(0.1)
    doc.text('ТИП-Б / LLOJI-B', 20, 39)
    doc.line(20, 40, 190, 40); 
    doc.text('1.1  прв пат / për herë të parë', 23, 50)
    doc.text('1.2  редовна замена / ndërim të rregullt', 23, 55)
    doc.text('1.3  промена на податоци (лични податоци, адреса и живеалиште) /', 23, 60, )
    doc.text('ndryshimi i të dhënave (tëdhënave personale, adresës dhe vendbanimi)',28,65)
    doc.text('1.4  дупликат лична карта (изгубена или украдена) / letërnjoftim duplikat (i humbur ose i vjedhur)', 23, 70)
    doc.text('1.5  предвремена замена заради оштетеност на личната карта /', 23, 75)
    doc.text('ndërim i parakoshëm për shkak të dëmtirmit të letërnjoftimit', 28, 80)

    //PRVA TABELA
    doc.line(20, 87, 190, 87);
    doc.line(20, 92, 190, 92);
    doc.text('1.македонски јазик/gjuhë maqedonase', 21, 95)
    doc.text('2.албански јазик/gjuhë shqipe',21,103)
    doc.text('1.македонски јазик/gjuhë maqedonase', 106, 95)
    doc.text('2.албански јазик/gjuhë shqipe',106,103)
    
    doc.line(105, 87,105,110)
    doc.line(20, 110, 190, 110);
    
    doc.line(20, 118, 190, 118);
    doc.line(20, 122, 190, 122);
    doc.line(105, 122,105,130)
    doc.line(20, 130, 190, 130);
    doc.line(20, 138, 190, 138);
    doc.line(20, 145, 190, 145);
    doc.line(20, 152, 190, 152);
    doc.line(20, 160, 190, 160);
    doc.line(20, 168, 190, 168);
    doc.line(20, 176, 190, 176);
    doc.line(20, 87,20,176)
    doc.line(190, 87,190,176)

    //VTORA TABELA
    doc.line(20, 188, 190, 188);
    doc.line(20, 196, 190, 196);
    doc.line(20, 201, 190, 201);
    doc.line(20, 206, 190, 206);
    doc.line(20, 188,20,206)
    doc.line(30, 188,30,206)
    doc.line(80, 188,80,206)
    doc.line(130, 188,130,206)
    doc.line(160, 188,160,206)
    doc.line(190, 188,190,206)

    // treta tabela
    doc.line(20, 217,190,217)
    doc.line(20, 222,190,222)
    doc.line(20, 227,190,227)
    doc.line(20, 217,20,227)
    doc.line(190, 217,190,227)


    doc.text('Барам личната карта да биде издадена во: / Kërkoj që letërnjoftimi të më lëshohet në:', 24,237)
    doc.text('(во случај кога нема промена на живеалиште или адреса / në rast se nuk ka ndryshim vendbanimi apo adrese)', 23,250)

    //tabela 3
    doc.text('Име и презиме',42,191)   
    doc.text('Emri dhe mbiemri',40,195)
    doc.text('Матичен број',94,191)
    doc.text('Numri amë i qytetarit',89,195)
    doc.text('Сродство',136.5,191)
    doc.text('Farefisnia',137,195)
    doc.text('Потпис',169,191)
    doc.text('Nënshkrimi',166,195)
    doc.text('1', 24,199.5)
    doc.text('2', 24,204.5)


    //BOLD FONT
    doc.setFont('ArimoBold', 'bold');
    doc.setFontSize(9);
    doc.text('1.Причина за барање (да се заокружи еден од основните) / Arsyeja për kërkesë (të rrethohet njëra nga arsyet)', 20, 45)
    doc.text('2.ПОДАТОЦИ ЗА ПОДНЕСИТЕЛОТ НА БАРАЊЕТО / TË DHËNA PËR PARASHTRUESIN E KËRKESËS',20,86)
    doc.text('3.СОГЛАСНОСТ ОД РОДИТЕЛИТЕ-СТАРАТЕЛОТ ЗА ИЗДАВАЊЕ НА ЛИЧНА КАРТА НА ЛИЦЕ ОД 15-18 ГОДИНИ',18,182)
    doc.text('PAJTUESHMËRI E PRINDËRVEKUJDESTARIT PËR LETËRNJOFTIMIT PERSONIT PREJ 15-18 VJET',20,186)
    doc.text('4.ПОДАТОЦИ ОД ПРЕТХОДЕН ДОКУМЕНТ НА ПОДНОСИТЕЛОТ', 20, 212)
    doc.text('TË DHËNAT MBI DOKUMNTIN E MËPARSHËM TË PARASHTRUESIT',23,216)
    doc.text('5. ПОСТАПКА ЗА ИЗДАВАЊЕ НА ЛИЧНА КАРТА / PROCEDURA PËR DHËNIEN E LETËRNJOFTIMIT',20, 233)

    doc.text('1. ИМЕ / EMRI', 50, 91)
    doc.text('2. ПРЕЗИМЕ / MBIEMRI', 130, 91)
    doc.text(personalInfo.firstName,68,108)
    doc.text(personalInfo.lastName,150,108)
    doc.setFontSize(8.5);
    doc.text('ЗА ОМАЖЕНИ-ОЖЕНЕТИ (презиме пред склучување на бракот)', 21,113)
    if(personalInfo.marriedLastName){
        doc.text(personalInfo.marriedLastName,130,116)
    }
    doc.text('PËR TË MARTUARAT (mbiemri vajzërisë)', 21,117)
    doc.line(120,117,185,117)
    doc.text('ИМЕ НА РОДИТЕЛИ / EMRI I PRINDËRVE',75,121)
    doc.text('Татко / Baba', 21,126)
    doc.text(personalInfo.fatherName, 50,128)
    doc.line(43,129,100,129)
    doc.text('Мајка / Nëna', 106,126)
    doc.text(personalInfo.motherName, 135,128)
    doc.line(128,129,185,129)
    doc.text('ДЕН, МЕСЕЦ, ГОДИНА И МЕСТО НА РАЃАЊЕ', 21,133.2)
    doc.text(`${personalInfo.birth},${personalInfo.placeBirth}`,110,136)
    doc.line(100,137,185,137)
    doc.text('DATA, MUAJI DHE VITI I LINDJES, VENDI I LINDJES ', 21,137)
    doc.text('МАТИЧЕН БРОЈ / NUMRI AMË I QYTETARIT ', 21,141)
    doc.text(personalInfo.socialNumber,97,143)
    doc.line(87,144,185,144)
    doc.text('ДРЖАВЈАНСТВО / SHTETËSIA', 21,148)
    doc.text(personalInfo.citizenship,80,150)
    doc.line(70,151,185,151)
    doc.text('ПОЛ',21, 155)
    doc.text('GJINIA',21, 159)
    doc.text('машки',70, 155)
    doc.text('mashkullore',70, 159)
    doc.rect(90,154,4,4)
    if(personalInfo.gender=='машки'){
        doc.text('X',90.5,157)
    }else{
        doc.text('X',145.5,157)
    }
    doc.text('женски',130, 155)
    doc.text('femërore',130, 159)
    doc.rect(145,154,4,4)
    doc.text('ПРЕТХОДНО ЖИВЕАЛИШТЕ И АДРЕСА',21, 163)
    doc.text('VENDBANIMI I MËPARSHEM DHE ADRESA',21, 167)
    doc.text(personalInfo.previousAddress,97,166)
    doc.line(87,167,185,167)
    doc.text('НОВО ЖИВЕАЛИШТЕ И АДРЕСА',21, 171)
    doc.text('VENDBANIMI I RI DHE ADRESA',21, 175)
    doc.text(personalInfo.address,80,174)
    doc.line(70,175,185,175)

    doc.text('БРОЈ НА ЛИЧНА КАРТА / NUMRI I LETËRNJOFTIMIT', 21,221)
    doc.text('ОРГАН КОЈ ЈА ИЗДАЛ / ORGANI I CILI E KA LËSHUAR', 21,226)
    doc.text('Дата и место на поднесување', 20,257)
    doc.text('Потпис на подносителот', 152,257)
    doc.text('Data dhe vendi i parashtrimit', 20,261)
    doc.text('Nënshkrimi i parashtruesit', 151,261)
    doc.line(140,270,190,270)
    doc.line(20,270,80,270)
    doc.text(date,25,269)
    doc.setFontSize(9)
    doc.text('1. Редовна постапка / Procedurë të rregulit', 20,242)
    doc.rect(97,239,3,3)
    if(idCardDocument.procedure==='редовна'){
      doc.text('X',97.2,241.7)
    }else{
      doc.text('X',97.2,246.7)
    }
    doc.text('2. Итна постапка / Procedurë urgjente', 20,247)
    doc.rect(97,244,3,3)
    if(personalInfo.parents[0]){
      doc.text(`${personalInfo.parents[0].firstName} ${personalInfo.parents[0].lastName}`, 31,200)
      doc.text(personalInfo.parents[0].socialNumber,81,200)
      doc.text(personalInfo.parents[0].relation,131,200)
    }
    if(personalInfo.parents[1]){
      doc.text(`${personalInfo.parents[1].firstName} ${personalInfo.parents[1].lastName}`, 31,205)
      doc.text(personalInfo.parents[1].socialNumber,81,205)
      doc.text(personalInfo.parents[1].relation,131,205)
    }
    //tabela 3

    
    //VTORA STRANA

    doc.addPage()
    //BOLD FONT
    doc.text('Податоци за контакт',20,20)
    doc.text('Të dhënat për kontakt',20,24)
    doc.line(58,24,110,24)
    doc.text(personalInfo.phone,62, 23)
    doc.text('Потпис на службеното лице кое го примило барањето',20,29)
    doc.text('Nënshkrimi i personit zyrtar i cili e ka pranuar kërkesen',20,33)
    doc.line(108,33,160,33)

    doc.setLineWidth(0.5)
    doc.line(20,36,190,36)
    doc.line(20,134,190,134)
    doc.line(20,191,190,191)
    doc.setLineWidth(0.1)
    doc.text('6.ПРИЛОГ КОН БАРАЊЕТО: / SHTOJCË NDAJ KËRKESËS:',20,42)
    doc.text('Доказите означени со ѕвезда(*) се смета дека се поднесени во прилог на барањето и истите Министе-',23,116)
    doc.text('рството за внатрешни работи ги прибавува по службена должност. / Dcshmit të nënviyuara yll(*) konsi-',23,120)
    doc.text('derohen se janë parashtruar me kërkesen dhe të njejtat Ministria për Punë të Brendshme i siguron sipas ',23,124)
    doc.text('detyrës zyrtare.',23,128)

    doc.text('7.СОГЛАСНОСТ ОД ПОДНОСИТЕЛОТ НА БАРАЊЕТО / PAJTUESHMËRI NGA PARASHTRUESI I KËRKESËS', 20,140)
    doc.rect(20,144,4,4)
    doc.text('Подносителот на барањето е согласен неговите/нивните лични податоци да се корисатат во постапка-',25,147)
    doc.text('та за остварување на правото пред надлежните органи за прибавување на СИТЕ документи означени со',20,151)
    doc.text('ѕвезда(*) во делот 7 на ова барање.',20,155)
    doc.text('Parashtruesi i kërkesës pajtohet të dhënat e tij/tyre personale të shfrityohen në procedurën për realiyimin e të',20,159)
    doc.text('drejtës para organeve kompetente për sigurimin e të GJITHA dokumenteve të nënviyuara me yll(*) nga pjesa 7',20,163)
    doc.text('e kësaj kërkese.',20,167)
    doc.text('Потпис на подносителот', 27, 174)
    doc.text('Nënshkrimi i parashtruesit', 26, 178)
    doc.line(20,188,80,188)

    doc.text('УПАТСТВО ЗА ПОПОЛНУВАЊЕ НА БАРАЊЕТО ЗА ИЗДАВАЊЕ НА ЛИЧНА КАРТА:', 20, 196)
    doc.text('UDHËZIM PËR PLOTËSIMIN E KËRKESËS PËR DHËNIEN E LETËRNJOFTIMIN:', 20, 200)
  

    //TABELA
    doc.setFont("NotoSerif", "normal")
    doc.line(20,43,190,43)
    doc.text('При поднесување на барањето се врши проверка на идентитетот на подносителот на барањето со', 31, 47)
    doc.text('увид во лична карта или друг документ за лична идентификација што има фотографија, издаден',31,51)
    doc.text('од државен орган. / Gjatë parashtrimit të kërkesës kontrollohet identiteti i parashtruesit të kërkesës',31,55)
    doc.text('sipas letërnjoftimit ose dokumnet tjetër për identifikim personal i cili ka fotografi, i lëshuar prej organit',31,59)
    doc.text('shtetëror.',31,63)
    doc.line(20,64,190,64)
    doc.rect(23,51,4,4)
    doc.text('Извод од матична книга на родените/венчаните-за 1.1 и 1.3 (*)',31,68)
    doc.text('Certifikatën e lindjes nga Libri Amë i të Lindurve/Martuarve-për 1.1 dhe 1.3 (*)',31,72)
    doc.line(20,73,190,73)
    doc.rect(23,76.5,4,4)
    doc.rect(23,66.5,4,4)
    doc.text('Доказ за промена на личните податоци/живеалиштето и адреса-за 1.3 (*)',31,77)
    doc.text('Dëshmi për ndryshimin e të dhënave personale/vendbanimit-për 1.3 (*)',31,81)
    doc.line(20,82,190,82)
    doc.rect(23,84.5,4,4)
    doc.text('Доказ дека личната карта е огласена за неважачка-за 1.4 (*)',31,86)
    doc.text('Dëshmi për letërnjoftimi ështe i shpallur i pavlevshën-për 1.4(*)',31,90)
    doc.line(20,91,190,91)
    doc.rect(23,93.5,4,4)
    doc.text('Изјава за изгубена или украдена лична карта-за 1.4 (*)',31,95)
    doc.text('Deklaratë/vërtetim për letërnjoftim të humbur ose vjedhur-për 1.4(*)',31,99)
    doc.line(20,100,190,100)
    doc.rect(23,102.5,4,4)
    doc.text('Други документи неопходни за постапката',31,104)
    doc.text('Dokumente tjera të domoddoshrne për procedurën',31,109)
    doc.line(20,110,190,110)

    doc.line(20,43,20,110)
    doc.line(30,43,30,110)
    doc.line(190,43,190,110)

    //UPATSTVO
    
    doc.text('•  Податоците од делот 1 И 2 ги пополнува поднесителот на барањето;',20,205)
    doc.text('Të dhënat nga pjesa 1 dhe 2 i plotëson parashtruesi i kërkesës;',23,209)
    doc.text('•  Податоците од делот 3 ги пополнуваат родителите старателот доколку барањето за издавање на лична',20,214)
    doc.text('карта се однесува за лице од 15-18 години;',23,218)
    doc.text('Të dhënat nga pjesa 3 i plotësojn prindërit-kujdestarët nëse për dhënien e letërnjoftimit i dedikohet personit',23,222)
    doc.text('prej 15-18 vjet;',23,226)
    doc.text('•  Податоците од делот 4 ги пополнува службеното лице;',20,231)
    doc.text('Të dhënat nga pjesa 4 i plotëson personi zyrtar;',23,235)
    doc.text('•  Подносителот на барањето самиот го избира начинот на кој Министерството за внатрешни работи ќе',20,240)
    doc.text('може да оствари контакт со истиот (телефонски или електронски пат). Избраниот начин за контакт се',23,244)
    doc.text('наведува во делот "податоци за контакт";',23,248)
    doc.text('Parashtruesi i kërkesës vetë e ygjedh mënyren se si Ministria për Punë Të Brendshme do të kontaktoj me të',23,252)
    doc.text('(me telefon apo përmes rrugës elektronike). Mënyra e zgjedhur për kontakt në pjesën "të dhënat për kontakt";',23,256)
    doc.text('•  Доколку во текот на постапката се појави потреба од прибавување на документите наведени во делот',20,261)
    doc.text('6 кои не се означени со ѕвезда(*), а Министерството за внатрешни работи, не е во можност да ги при-',23,265)
    doc.text('бави по службена должност, подносителот на барањето дополнително ќе биде известен истите да ги ',23,269)
    doc.text('приложи кон барањето',23,273)
    doc.text('Nëse gjatë paraqitet nevoja për sigurimin e dokumenteve të cilat nuk janë nënvizuar në ojesen 5,parashtruesi',23,277)
    doc.text('i kërkesës në mënyrë plotësuese do të informohet të njetat ti bashkangjet ndaj kërkesës;',23,281)

    doc.save('idCard.pdf');

    // Ë ë
}
