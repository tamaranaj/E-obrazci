import jsPDF from "jspdf";
import { Children, Passport, PersonalDetailsID } from "../../Types/interfaces";
import { addArimoFontBold } from "../../addArimoFontBold";
import { addNotoSerifFont } from "../../addNotoSerifFont";


export const generatePassportDocumentALB = (personalInfo: PersonalDetailsID, passport: Passport,child:Children) => {

  const doc = new jsPDF()
  addNotoSerifFont(doc)
  addArimoFontBold(doc);
  doc.setFont("NotoSerif", "normal");
  doc.setFontSize(8.5);
  doc.text('Прилог бр.8', 190, 20, { align: 'right' });
  doc.text('Shtojcë nr. 8', 190, 25, { align: 'right' });
  doc.text('ДО: МИНИСТЕРСТВО ЗА ВНАТРЕШНИ РАБОТИ НА РЕПУБЛИКА СЕВЕРНА МАКЕДОНИЈА', 20, 20, { align: 'left' })
  doc.text('DERI TE: MINISTRISË SË PUNËVE TË BRENDSHME TË REPUBLIKËS SË MAQEDONISË SË VERUIT', 20, 25, { align: 'left' })
  doc.setLineWidth(0.5)
  doc.line(20, 35, 190, 35);
  if (passport.reason === '1') {
    doc.roundedRect(21, 46, 5, 4, 3, 3)
  }
  if (passport.reason === '2') {
    doc.roundedRect(21.5, 50, 7, 4, 3, 4)
  }
  if (passport.reason === '3') {
    doc.roundedRect(21.5, 54, 7, 4, 3, 4)
  }
  if (passport.reason === '4') {
    doc.roundedRect(21.5, 58, 7, 4, 3, 4)
  }
  if (passport.reason === '5') {
    doc.roundedRect(21.5, 66, 7, 4, 3, 4)
  }
  if (passport.reason === '6') {
    doc.roundedRect(21.5, 70, 7, 4, 3, 4)
  }
  if (passport.reason === '7') {
    doc.roundedRect(21.5, 78, 7, 4, 3, 4)
  }
  doc.line(20, 281, 190, 281)
  doc.setLineWidth(0.1)
  doc.text('ТИП-Б / LLOJI-B', 20, 39)
  doc.line(20, 40, 190, 40)

  doc.text('1.1  Прв пат / Për herë të parë', 23, 49)
  doc.text('1.2  Редовна замена / Ndërrim të rregullt', 23, 53)
  doc.text('1.3  Промена на лични податоци / Ndërrim i të dhënave personale', 23, 57,)
  doc.text('1.4  Замена поради други причини (исполнетост или друго) / ', 23, 61)
  doc.text('Ndërrim i parakohshëm për shkak të arsyeve tjera (përmbushjes ose tjera)', 28, 65)
  doc.text('1.5  Дупликат пасош (изгубен,исчезнат или украден) / Pasaporte duplikat (e humbur, e vjedhur ose e zhdukur)', 23, 69)
  doc.text('1.6  Предвремена замена поради оштетеност на пасошот /', 23, 73)
  doc.text('Ndërim i parakoshëm për shkak të dëmtirmit të pasaportës', 28, 77)
  doc.text('1.7  Издавање на пасош со ограничен рок на важење / Pasaportë me vlefshmëri të kufizuar', 23, 81)

  //TABELA 1

  doc.line(20, 87, 190, 87);
  doc.line(20, 92, 190, 92);
  doc.text('1.македонски јазик/gjuhë maqedonase', 21, 95)
  doc.text('2.албански јазик/gjuhë shqipe', 21, 103)
  doc.text('1.македонски јазик/gjuhë maqedonase', 106, 95)
  doc.text('2.албански јазик/gjuhë shqipe', 106, 103)

  doc.line(105, 87, 105, 110)
  doc.line(20, 87, 20, 110)
  doc.line(190, 87, 190, 110)
  //TABELA 2
  doc.line(20, 110, 190, 110);
  doc.line(20, 113, 190, 113);
  doc.line(20, 121, 190, 121);
  doc.line(20, 129, 190, 129);
  doc.line(20, 137, 190, 137);
  doc.line(20, 142, 190, 142);
  doc.line(105, 142, 105, 151)
  doc.line(20, 151, 190, 151);
  doc.line(20, 159, 190, 159);
  doc.line(20, 164, 190, 164);
  doc.line(20, 169, 190, 169);
  doc.line(20, 178, 190, 178);
  doc.line(105, 169, 105, 178)
  doc.line(20, 113, 20, 178)
  doc.line(190, 113, 190, 178)

  //TABELA 3
  doc.line(20, 191, 190, 191);
  doc.line(20, 199, 190, 199);
  doc.line(20, 204, 190, 204);
  doc.line(20, 209, 190, 209);
  doc.line(20, 191, 20, 209)
  doc.line(30, 191, 30, 209)
  doc.line(80, 191, 80, 209)
  doc.line(130, 191, 130, 209)
  doc.line(160, 191, 160, 209)
  doc.line(190, 191, 190, 209)
  doc.text('Име и презиме', 42, 194)
  doc.text('Emri dhe mbiemri', 40, 198)
  doc.text('Матичен број', 94, 194)
  doc.text('Numri amë i qytetarit', 89, 198)
  doc.text('Сродство', 136.5, 194)
  doc.text('Farefisnia', 137, 198)
  doc.text('Потпис', 169, 194)
  doc.text('Nënshkrimi', 166, 198)
  doc.text('1', 24, 202.5)
  doc.text('2', 24, 207.5)

  //TABELA 4
  doc.line(20, 218, 190, 218)
  doc.line(20, 223, 190, 223)
  doc.line(20, 228, 190, 228)
  doc.line(20, 218, 20, 228)
  doc.line(190, 218, 190, 228)
  doc.text('БРОЈ НА ПАСОШ / NUMRI I PASAPORTËS', 21, 222)
  doc.text('ОРГАН КОЈ ГО ИЗДАЛ / ORGANI I CILI E KA LËSHUAR', 21, 227)



  //BOLD FONT
  doc.setFont('ArimoBold', 'bold');
  doc.setFontSize(9);
  doc.text('1.Причина за барање (да се заокружи еден од основните) / Arsyeja për kërkesë (të rrethohet njëra nga arsyet)', 20, 45)
  doc.text('БАРАЊЕ ЗА ИЗДАВАЊЕ НА ПАСОШ / KËRKESË PËR DHËNIE TË PASAPORTËS', 42, 33,);
  doc.text('2.ПОДАТОЦИ ЗА ПОДНЕСИТЕЛОТ НА БАРАЊЕТО / TË DHËNA PËR PARASHTRUESIN E KËRKESËS', 20, 86)
  doc.text('1. ИМЕ / EMRI', 50, 91)
  doc.text('2. ПРЕЗИМЕ / MBIEMRI', 130, 91)
  doc.setFontSize(8.5);

  doc.text('ЗА ОМАЖЕНИ-ОЖЕНЕТИ (презиме пред склучување на бракот)', 21, 116)
  doc.text('PËR TË MARTUARAT (mbiemri vajzërisë)', 21, 120)
  doc.line(120, 120, 185, 120)
  doc.text('ДЕН, МЕСЕЦ И ГОДИНА НА РАЃАЊЕ', 21, 124)
  doc.line(75, 128, 185, 128)
  doc.text('DATA, MUAJI DHE VITI I LINDJES', 21, 128)
  doc.text('МЕСТО НА РАЃАЊЕ(лице родено во странсто ја запишува и државата)', 21, 132)
  doc.line(126, 136, 185, 136)
  doc.text('VENDI I LINDJES(personi i lindur jashtë vendit e shënon edhe shtetin)', 21, 136)
  doc.text('МАТИЧЕН БРОЈ / NUMRI AMË I QYTETARIT ', 21, 140)
  doc.line(87, 141, 185, 141)
  doc.text('ПОЛ', 21, 146)
  doc.text('GJINIA', 21, 150)
  doc.text('машки', 50, 146)
  doc.text('mashkullore', 50, 150)
  doc.rect(45, 145, 4, 4)
  doc.text('женски', 80, 146)
  doc.text('femërore', 80, 150)
  doc.rect(75, 145, 4, 4)
  doc.text('НАЦИОНАЛНА ПРИПАДНОСТ', 106, 146)
  doc.text('PËRKATËSIA NACIONALE', 106, 150)
  doc.line(148, 150, 185, 150)
  doc.text('ЖИВЕАЛИШТЕ И АДРЕСА', 21, 154)
  doc.text('VENDBANIMI DHE ADRESA', 21, 158)
  doc.line(70, 158, 185, 158)
  doc.text('ДРЖАВЈАНСТВО / SHTETËSIA', 21, 162)
  doc.line(70, 163, 185, 163)
  doc.text('ИМЕ И ПРЕЗИМЕ НА РОДИТЕЛИ / EMRI DHE MBIEMRI I PRINDËRVE', 55, 168)
  doc.text('Татко / Baba', 21, 173)
  doc.line(43, 177, 100, 177)
  doc.text('Мајка / Nëna', 106, 173)
  doc.line(128, 177, 185, 177)
  doc.text('3. СОГЛАСНОСТ ОД РОДИТЕЛИТЕ-СТАРАТЕЛОТ ПОДНОСИТЕЛ НА БАРАЊЕТО ЗА ИЗДАВАЊЕ НА ПАСОШ НА МА-', 19, 182)
  doc.text('ЛОЛЕТНО ЛИЦЕ / PAJTUESHMËRI E PRINDËRVE-TUTORIT PARASHTRUES I KËRKESËS PËR PASAPORTËS PËR', 22, 186)
  doc.text('PERSON TË MITUR', 22, 190)

  doc.text('4.ПОДАТОЦИ ОД ПРЕТХОДЕН ДОКУМЕНТ НА ПОДНОСИТЕЛОТ', 20, 213)
  doc.text('TË DHËNAT MBI DOKUMNTIN E MËPARSHËM TË PARASHTRUESIT', 23, 217)
  doc.text('5. БАРАМ ПАСОШОТ ДА БИДЕ ИЗГОТВЕН ВО: / KËRKOJ QË PASAPORTA TË MË LËSHOHET NË:', 20, 233)
  doc.text('1. РЕДОВНА ПОСТАПКА /PROCEDURË TË RREGULIT', 30, 237)
  doc.rect(110, 234, 3, 3)
  doc.text('2. ИТНА ПОСТАПКА / PROCEDURË URGJENTE', 30, 241)
  doc.rect(110, 238, 3, 3)

  doc.text('Податоци за контакт', 20, 249)
  doc.text('Të dhënat për kontakt', 20, 253)
  doc.line(58, 253, 110, 253)
  doc.text('Дата и место на поднесување', 20, 259)
  doc.text('Потпис на подносителот', 152, 259)
  doc.text('Data dhe vendi i parashtrimit', 20, 263)
  doc.text('Nënshkrimi i parashtruesit', 151, 263)
  doc.line(140, 270, 190, 270)
  doc.line(20, 270, 80, 270)

  doc.text('Потпис на службеното лице кое го примило барањето', 20, 275)
  doc.text('Nënshkrimi i personit zyrtar i cili e ka pranuar kërkesen', 20, 279)
  doc.line(108, 279, 160, 279)

  //ODGOVORI
  doc.setFontSize(10)
  doc.text(personalInfo.firstName, 68, 108)
  doc.text(personalInfo.lastName, 150, 108)
  if (personalInfo.marriedLastName) {
    doc.text(personalInfo.marriedLastName, 130, 119)
  }
  doc.text(personalInfo.fatherName, 50, 176)
  doc.text(personalInfo.motherName, 135, 176)
  doc.text(personalInfo.birth ? personalInfo.birth.format("DD/MM/YYYY"): '', 110, 127)
  doc.text(personalInfo.placeBirth, 127, 135)
  doc.text(personalInfo.socialNumber, 97, 140.5)
  doc.text(personalInfo.citizenship, 80, 162)
  doc.text(personalInfo.nationality,150,149)
  doc.setFontSize(12)
  if (personalInfo.gender == 'машки') {
    doc.text('X', 45.5, 148.5)
   
  } else {
    doc.text('X', 75.5, 148.5)
  }

  if (passport.procedure === 'редовна') {
    doc.text('X', 110, 236.9)
  } else {
    doc.text('X', 110, 240.9)
  }
  doc.setFontSize(10)

  doc.text(personalInfo.address, 80, 157)
  if(child.parents.length){
    if (child.parents[0]) {
      doc.text(`${child.parents[0].firstName} ${child.parents[0].lastName}`, 31, 203)
      doc.text(child.parents[0].socialNumber, 81, 203)
      doc.text(child.parents[0].relation, 131, 203)
    }
    if (child.parents[1]) {
      doc.text(`${child.parents[1].firstName} ${child.parents[1].lastName}`, 31, 208)
      doc.text(child.parents[1].socialNumber, 81, 208)
      doc.text(child.parents[1].relation, 131, 208)
    }
  }

  if(personalInfo.phone){
    doc.text(personalInfo.phone, 65, 252)
  }else{
    doc.text(personalInfo.email, 65, 252)
  }
  

  //VTORA STRANA

  doc.addPage()
  doc.setFontSize(12)
    doc.text('X',20.5,155.5)

  doc.setFontSize(9)
  doc.text('6.ПРИЛОГ КОН БАРАЊЕТО: / SHTOJCË NDAJ KËRKESËS:', 20, 20)
  doc.text('Доказите означени со ѕвезда(*) се смета дека се поднесени во прилог на барањето и истите Министе-', 23, 132)
  doc.text('рството за внатрешни работи ги прибавува по службена должност. / Dcshmit të nënviyuara yll(*) konsi-', 23, 136)
  doc.text('derohen se janë parashtruar me kërkesen dhe të njejtat Ministria për Punë të Brendshme i siguron sipas ', 23, 140)
  doc.text('detyrës zyrtare.', 23, 144)

  doc.text('7.СОГЛАСНОСТ ОД ПОДНОСИТЕЛОТ НА БАРАЊЕТО / PAJTUESHMËRI NGA PARASHTRUESI I KËRKESËS', 20, 150)
  doc.rect(20, 152, 4, 4)
  doc.text('Подносителот на барањето е согласен неговите/нивните лични податоци да се корисатат во постапка-', 25, 155)
  doc.text('та за остварување на правото пред надлежните органи за прибавување на СИТЕ документи означени со', 20, 159)
  doc.text('ѕвезда(*) во делот 6 на ова барање. / Parashtruesi i kërkesës pajtohet të dhënat e tij/tyre personale të shfrityo-', 20, 163)
  doc.text('hen në procedurën për realiyimin e të drejtës para organeve kompetente për sigurimin e të GJITHA dokumenteve', 20, 167)
  doc.text('të nënviyuara me yll(*) nga pjesa 6 e kësaj kërkese.', 20, 171)

  doc.text('Потпис на подносителот', 27, 176)
  doc.text('Nënshkrimi i parashtruesit', 26, 180)
  doc.line(20, 188, 80, 188)
  doc.text('УПАТСТВО ЗА ПОПОЛНУВАЊЕ НА БАРАЊЕТО ЗА ИЗДАВАЊЕ НА ПАСОШ:', 20, 195)
  doc.text('UDHËZIM PËR PLOTËSIMIN E KËRKESËS PËR DHËNIEN E PASAPORTËS:', 20, 199)

  doc.setFont("NotoSerif", "normal")
  doc.line(20, 22, 190, 22)
  doc.text('При поднесување на барањето се врши проверка на идентитетот на подносителот на барањето со', 31, 26)
  doc.text('увид во лична карта или друг документ за лична идентификација што има фотографија, издаден', 31, 30)
  doc.text('од државен орган. / Gjatë parashtrimit të kërkesës kontrollohet identiteti i parashtruesit të kërkesës', 31, 34)
  doc.text('sipas letërnjoftimit ose dokumnet tjetër për identifikim personal i cili ka fotografi, i lëshuar prej organit', 31, 39)
  doc.text('shtetëror.', 31, 43)
  doc.line(20, 44, 190, 44)
  doc.rect(23, 31, 4, 4)
  doc.text('Извод од матична книга на родените/венчаните-за 1.1 и 1.3 (*)', 31, 48)
  doc.rect(23, 46.5, 4, 4)
  doc.text('Certifikatën e lindjes nga Libri Amë i të Lindurve/Martuarve-për 1.1 dhe 1.3 (*)', 31, 52)
  doc.line(20, 53, 190, 53)
  doc.rect(23, 56.5, 4, 4)
  doc.text('Согласност од родител или уредно и заверено полномоштво од родителот/старателот. /', 31, 57)
  doc.text('Pajtueshimëri nga prindëri ose autorizim i verifikuar prej prindërit/kujdestarit.', 31, 61)
  doc.line(20, 62, 190, 62)
  doc.rect(23, 64.5, 4, 4)
  doc.text('Доказ за старателство.', 31, 66)
  doc.text('Dëshmi për kujdestari.', 31, 70)
  doc.line(20, 71, 190, 71)
  doc.rect(23, 73.5, 4, 4)
  doc.text('Пријава/изјава/потврда за изгубен, исчезнат или украден пасош за 1.5 (*)', 31, 75)
  doc.text('Lajmërim/deklaratë/vërtetim për pasaportë të humbur ose vjedhur-për 1.5 (*)', 31, 79)
  doc.line(20, 80, 190, 80)
  doc.rect(23, 82.5, 4, 4)
  doc.text('Доказ дека пасошот е огласен за неважечки за 1.5 (*)', 31, 84)
  doc.text('Dëshmi se pasaporta është e shpallur e pavlefshme për 1.5 (*)', 31, 88)
  doc.line(20, 89, 190, 89)
  doc.text('Ако при поднесување на барањето за промена на лично име на малолетно лице, еден од родите-', 31, 93)
  doc.text('лите не дал согласност за промената, согласноста може да се обезбеди од страна на надлежен ор-', 31, 97)
  doc.text('ган за старателство(*) ВО СЛУЧАЈ КОГА ДРУГИОТ РОДИТЕЛ НЕ МОЖЕ ИСТАТА ДА ЈА ОБЕЗБЕДИ', 31, 101)
  doc.rect(23, 101, 4, 4)
  doc.text('Nëse gjatëparashtrimit të kërkesës për dhënien e pasaportës personit të mitur njëri ga prindërit nuk ka', 31, 108)
  doc.text('dhënë pajtueshmëri për dhënien e pasaportës, pajtushmërka mund të sigurohet nga organi kompetent', 31, 113)
  doc.text('për kujdestari(*) NË RAST KUR PRINDËRI TJETER TË NJËJTËN NUM MUND SIGUROJË', 31, 117)
  doc.line(20, 118, 190, 118)
  doc.rect(23, 120.5, 4, 4)
  doc.text('Други документи неопходни за постапката.', 31, 122)
  doc.text('Dokumente tjera të domoddoshrne për procedurën.', 31, 126)
  doc.line(20, 127, 190, 127)
  doc.line(20, 22, 20, 127)
  doc.line(30, 22, 30, 127)
  doc.line(190, 22, 190, 127)
  doc.setLineWidth(0.5)
  doc.line(20, 145, 190, 145)
  doc.line(20, 190, 190, 190)
  doc.setLineWidth(0.1)

  //UPATSTVO

  doc.text('•  Податоците од делот 1 и 2 ги пополнува поднесителот на барањето. Доколку се работи за малолетно ли-', 20, 204)
  doc.text('це овие податоци ги пополнува родителот/старателот; / Të dhënat nga pjesa 1 dhe 2 i plotëson parashtruesi', 23, 208)
  doc.text('i kërkesës. Nëse procedura i dedikohet personit të mitur të dhënat në kërkesë i plotëson prindëri/tutori;', 23, 212)
  doc.text('•  Податоците од делот 3 ги пополнуваат родителите/старателот; / Të dhënat nga pjesa 3 i plotësojn prindërit', 20, 217)
  doc.text('/tutori;', 23, 221)
  doc.text('•  Податоците од делот 4 ги пополнува службеното лице; / Të dhënat nga pjesa 4 i plotëson personi zyrtar;', 20, 226)

  doc.text('•  Податоците од делот 5 ги пополнува поднесителот на барањето; / Të dhënat nga pjesa 5 i plotëson parasht-', 20, 231)
  doc.text('ruesi i kërkesës;', 23, 235)
  doc.text('•  Подносителот на барањето самиот го избира начинот на кој Министерството за внатрешни работи ќе', 20, 240)
  doc.text('може да оствари контакт со истиот (телефонски или електронски пат). Избраниот начин за контакт се', 23, 244)
  doc.text('наведува во делот "податоци за контакт"; / Parashtruesi i kërkesës vetë e ygjedh mënyren se si Ministria për', 23, 248)
  doc.text('Punë Të Brendshme do të kontaktoj me të (me telefon apo përmes rrugës elektronike). Mënyra e zgjedhur për', 23, 252)
  doc.text('kontakt në pjesën "të dhënat për kontakt";', 23, 256)
  doc.text('•  Доколку во текот на постапката се појави потреба од прибавување на документите наведени во делот', 20, 261)
  doc.text('6 кои не се означени со ѕвезда(*), а Министерството за внатрешни работи, не е во можност да ги при-', 23, 265)
  doc.text('бави по службена должност, подносителот на барањето дополнително ќе биде известен истите да ги ', 23, 269)
  doc.text('приложи кон барањето. / Nëse gjatë paraqitet nevoja për sigurimin e dokumenteve të cilat nuk janë nënvi-', 23, 273)
  doc.text('zuar në pjesën 6, të cilat nuk janë të shënuara me yll(*) kurse Ministria për Punë Të Brendshme nuk ka mundësi ', 23, 277)
  doc.text('ti sigurojë sipas detyrës zyrtare,parashtruesi i kërkesës në mënyrë plotësuese do të informohet të njetat', 23, 281)
  doc.text('ti bashkangjet ndaj kërkesës; ', 23, 285)


  doc.save(`${personalInfo.firstName}${personalInfo.lastName}Passport.pdf`);
}
