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
    doc.text('Прилог бр.2А', 190, 20, { align: 'right' });
    doc.text('Shtojcë nr. 2A', 190, 25, { align: 'right' });
    doc.text('ДО: МИНИСТЕРСТВО ЗА ВНАТРЕШНИ РАБОТИ НА РЕПУБЛИКА СЕВЕРНА МАКЕДОНИЈА', 20, 20,{align: 'left'})
    doc.text('DERI TE: MINISTRISË SË PUNËVE TË BRENDSHME TË REPUBLIKËS SË MAQEDONISË SË VERUIT', 20, 25,{align: 'left'})
    doc.setFontSize(9);
    doc.setLineWidth(0.5)
    doc.line(15, 35, 195, 35); 
    doc.line(15, 137, 195, 137); 
    if (driverLic.reason === '1') {
        doc.roundedRect(18, 45.5, 8, 5, 3, 3)
    }
    if (driverLic.reason === '2') {
        doc.roundedRect(18, 50.5, 8, 5, 3, 3)
    }
    if (driverLic.reason === '3') {
        doc.roundedRect(18, 59.5, 8, 5, 3, 3)
    }
    if (driverLic.reason === '4') {
        doc.roundedRect(18, 68.5, 8, 5,3, 3)
    }
    if (driverLic.reason === '5') {
        doc.roundedRect(18, 77.5, 8, 5,3, 3)
    }
    if (driverLic.reason === '6') {
        doc.roundedRect(18, 86.5, 8, 5,3, 3)
    }
    if (driverLic.reason === '7') {
        doc.roundedRect(18, 91.5, 8, 5,3, 3)
    }
    if (driverLic.reason === '8') {
        doc.roundedRect(18, 100.5, 8, 5, 3, 3)
    }
    if (driverLic.reason === '9') {
        doc.roundedRect(18, 105.5, 8, 5, 3, 3)
    }
    if (driverLic.reason === '10') {
        doc.roundedRect(19, 114.5, 9, 5, 3, 3)
    }
    if (driverLic.reason === '11') {
        doc.roundedRect(19, 123.5, 9, 5, 3, 3)
    }
    doc.setLineWidth(0.1)
    doc.text('(се избира постапката на која се однесува барањето) / (zgjidhet procedura e cila ka të bëjë me kërkesën)', 24,44)
    doc.text('Барам возачката дозвола да биде издадена во: / Kërkoj që patentë shoferi të më lëshohet në:', 20,215)
    //BOLD
    doc.setFont('ArimoBold', 'bold');
    doc.setFontSize(10);
    doc.text('БАРАЊЕ ЗА ИЗДАВАЊЕ НА ВОЗАЧКА ДОЗВОЛА/KËRKESË PËR DHËNIE TË PATENTË SHOFERIT', 21, 33,);
    doc.setFontSize(11);
    //odgovori
    doc.text(personalInfo.firstName, 35,155)
    doc.text(personalInfo.lastName, 110,155)
    doc.text(personalInfo.socialNumber, 80,165)
    doc.text(personalInfo.birth ? personalInfo.birth.format("DD/MM/YYYY"): '', 35,181)
    doc.text(personalInfo.placeBirth, 115,181)
    doc.text(personalInfo.address, 115,197)
    if(driverLic.procedure==='редовна'){
        doc.text('X', 106.8,220.5)
    }else{
        doc.text('X', 106.8,225.5)
    }
    if(personalInfo.phone){
        doc.text(personalInfo.phone, 110,270)
    }else{
        doc.text(personalInfo.email, 110,270)
    }
    
    doc.setFontSize(10);
    doc.text('1. ПРИЧИНА ЗА ПОДНЕСУВАЊЕ НА БАРАЊЕТО / ARSYEJA PËR PARASHTRIMIN E KËRKESËS', 20,40)
    doc.text('1.1  Издавање на возачка дозвола за прв пат / Dhënia e patentë shoferit herë të parë ;', 20, 49)
    doc.text('1.2  Замена на странска со македонска возачка дозвола /', 20, 54)
    doc.text(' Ndërrim i patentë shoferit të huaj me patent shofer maqedonas ;', 26, 58)
    doc.text('1.3  Замена на возачка дозвола поради истек на рокот на важење / ', 20, 63)
    doc.text('Ndërrim i patentë shoferit për shkak të skadimit të afatit ;', 27, 67)
    doc.text('1.4  Замена на возачка дозвола поради губење, дотраеност или оштетување / ', 20, 72)
    doc.text('Ndërrim i patentë shoferit për shkak të humbjes, skadimit ose dëmtimit ; ', 27, 76)
    doc.text('1.5  Замена поради промена на лично име на возачот /', 20, 81)
    doc.text('Ndërrim për shkak të ndryshimit të emrit personal të shoferit', 27, 85)
    doc.text('1.6  Замена поради заверка на нова категотија / Ndërrim për shkak verifikimit të kategorisë së rë ; ', 20, 90)
    doc.text('1.7  Замена поради промена на живеалиште на возачот /', 20, 95)
    doc.text('Ndërrim për shkak të ndryshimit të vendbanimit të shoferit;', 27, 99)
    doc.text('1.8  Издавање дупликат возачка / Dhënie duplikat i patentë shoferit ; ', 20, 104)
    doc.text('1.9  Замена поради запишување на ограничувања од здравствени причини / ', 20, 109)
    doc.text('Ndërrim për shkak të shënimit të kufizimeve për arsye shëndetësore ; ', 27, 113)
    doc.text('1.10  Замена поради запишување на забрана за управување со моторно возило /', 20, 118)
    doc.text('Ndërrim për shkak të shënimit të ndallesës për drejtimit e automjetit ;', 29, 122)
    doc.text('1.11  Продолжување на важност на возачка дозвола според пријавеното престојувалиште, а по', 20, 127)
    doc.text('претходна најава за местото на поденсување на барањето / Vazhdim i afatit të patentë shofe-', 29, 131)
    doc.text('rit sipas vendoëndrimit, pas paralajmërimit paraprak për vendin e parashtrimit të kërkesës;', 29, 135)
    doc.text('2.ПОДАТОЦИ ЗА ПОДНЕСИТЕЛОТ НА БАРАЊЕТО:/TË DHËNA PËR PARASHTRUESIN E KËRKESËS:', 20, 142)
    doc.line(20,145,190,145)
    doc.text('ИМЕ / EMRI', 50, 149)
    doc.text('ПРЕЗИМЕ / MBIEMRI', 135, 149)
    doc.line(20,150,190,150)
    doc.line(25, 156,100,156)
    doc.line(110, 156,185,156)
    doc.line(20,158,190,158)
    doc.text('Матичен број', 22, 162)
    doc.text('Numri amë i qytetarit', 22, 166)
    doc.line(70,166,185,166) 
    doc.line(20,168,190,168)
    doc.text('Ден, месец и година на раѓање', 35, 172)
    doc.text('Data,muaji dhr viti i lindjes', 40, 176)
    doc.text('Место на раѓање', 135, 172)
    doc.text('Vendi i lindjes', 138, 176)
    doc.line(25,182,100,182) 
    doc.line(110,182,185,182) 
    doc.line(20,184,190,184)
    doc.text('Живеалиште/Престојувалиште', 35, 188)
    doc.text('Vendbanim/Vendqëndrimi', 40, 192)
    doc.text('Место/Адреса', 137, 188)
    doc.text('Vendi/Adresa', 138, 192)
    doc.line(25,198,100,198) 
    doc.line(110,198,185,198) 
    doc.line(20,200,190,200)
    doc.line(20,145,20,200)
    doc.line(190,145,190,200)
    doc.line(105,145,105,158)
    doc.line(105,168,105,200)
    doc.text('3. ПОДАТОЦИ ЗА ИЗДАВАЊЕ НА ВОЗАЧКА ДОЗВОЛА: ', 25, 205)
    doc.text('PROCEDURA PËR DHËNIEN E PATENTË SHOFERIT:', 29, 210)
    doc.text('4. ПОДАТОЦИ ЗА ПРЕТХОДНА ВОЗАЧКА ДОЗВОЛА:', 25, 232)
    doc.text('TË DHËNA PËR PATENTË SHOFERIN E MËPARSHËM', 29, 237)
    doc.text('1. Редовна постапка / Procedurë të rrgullt', 29,220)
    doc.rect(106,217,4,4)
    doc.text('2. Итна постапка / Procedurë urgjente', 29,225)
    doc.rect(106,222,4,4)
    doc.text('1. Број на возачка дозвола / Numri i patentë shoferit', 29,242)
    doc.text('2. Орган кој ја издал / Organi i cili e la lëshuar', 29,247)
    doc.text('Дата и место на поднесување на барањето', 20, 254)
    doc.text('Потпис на подносителот', 150, 254)
    doc.text('Data dhe vendi i parashtrimit të kërkesës', 20, 258)
    doc.text('Nënshkrimi i parashtruesit', 149, 258)
    doc.line(140, 264, 190, 264)
    doc.line(20, 264, 80, 264)
    doc.text('Податоци за контакт: / Të dhënat për kontakt:', 20, 270)
   doc.line(100, 271, 185, 271)
   doc.text('Потпис на службеното лице кое го примило барањето', 20, 275)
   doc.text('Nënshkrimi i personit zyrtar i cili e ka pranuar kërkesen', 20, 279)
   doc.line(115, 279, 185, 279)
    //vtora strana
    doc.addPage()
    //bold
    doc.text('5.ПРИЛОГ КОН БАРАЊЕТО: / SHTOJCË NDAJ KËRKESËS:',20,20)
    doc.setFontSize(12)
    doc.text('X',20.5,216.5)
    doc.setFontSize(9)
    doc.text('Доказите означени со ѕвезда(*) се смета дека се поднесени во прилог на барањето и истите Министерството', 18, 199)
  doc.text('за внатрешни работи ги прибавува по службена должност. / Dcshmit të nënviyuara yll(*) konsiderohen se janë', 18 , 202)
  doc.text('parashtruar me kërkesen dhe të njejtat Ministria për Punë të Brendshme i siguron sipas detyrës zyrtare.', 18, 205)
  doc.setLineWidth(0.5)
  doc.line(18,207,192,207)
  doc.setLineWidth(0.1)
  doc.text('6.СОГЛАСНОСТ ОД ПОДНОСИТЕЛОТ НА БАРАЊЕТО / PAJTUESHMËRI NGA PARASHTRUESI I KËRKESËS', 20, 211)
  doc.rect(20, 213, 4, 4)
  doc.text('Подносителот на барањето е согласен неговите/нивните лични податоци да се корисатат во постапка-', 25, 216)
  doc.text('та за остварување на правото пред надлежните органи за прибавување на СИТЕ документи означени со', 20, 220)
  doc.text('ѕвезда(*) во делот 5 на ова барање. / Parashtruesi i kërkesës pajtohet të dhënat e tij/tyre personale të shfrityo-', 20, 223)
  doc.text('hen në procedurën për realiyimin e të drejtës para organeve kompetente për sigurimin e të GJITHA dokumenteve', 20, 226)
  doc.text('të nënviyuara me yll(*) nga pjesa 5 e kësaj kërkese.', 20, 229)
  doc.text('Потпис на подносителот', 27, 233)
  doc.text('Nënshkrimi i parashtruesit', 26, 236)
  doc.line(20, 243, 80, 243)
  doc.text('УПАТСТВО ЗА ПОПОЛНУВАЊЕ НА БАРАЊЕТО ЗА ИЗДАВАЊЕ НА ВОЗАЧКА ДОЗВОЛА:', 20, 248)
  doc.text('UDHËZIM PËR PLOTËSIMIN E KËRKESËS PËR DHËNIEN E PATENTË SHOFERIT:', 20, 252)
    //normal font
    doc.setFont("NotoSerif", "normal")
    doc.setFontSize(8.7)
    doc.line(15,22,195,22)
    doc.rect(18, 30, 3, 3)
    doc.text('При поднесување на барањето се врши проверка на идентитетот на подносителот на барањето со увид во', 25, 25)
    doc.text('важечка лична карта или друг документ за лична идентификација за одобрен законски престој што има фо-',25,29)
    doc.text('тографија, издаден од државен орган. / Gjatë parashtrimit të kërkesës kontrollohet identiteti i parashtruesit të',25,33)
    doc.text('kërkesës sipas letërnjoftimit valid ose dokument për identifikim për vendqëndrim ligjor i cili ka fotografi, i lëshuar',25,37)
    doc.text('nga organi shtetëror.', 25, 41)
    doc.line(15,42,195,42)
    doc.rect(18, 48, 3, 3)
    doc.text('Досие за положен возачки испит за управување со моторно возило од категоријата за која се бара издавање',25,45)
    doc.text('возачка дозвола, за постапките од точките 1.1 и 1.6 од делот 1. / Vërtetim për dhënien e provimit për shofer për', 25,49)
    doc.text('drejtimin me automjet për kategori për të cilin kërkohet dhënia e patentë shoferit, për procedurat 1.1 dhe 1.6 nga', 25,53)
    doc.text('pjesa 1. (*)', 25,57)
    doc.line(15,58,195,58)
    doc.rect(18, 62, 3, 3)
    doc.text('Возачка дозвола за постапките од точките 1.2, 1.3, 1.4(освен при губење на возачка дозвола), 1.5, 1.6,1.8 и 1.9',25, 61)
    doc.text('од делот 1./Patent shofer për procedurat 1.2, 1.3, 1.4(përvec në rast të humbjes të patent shoferit) 1.5, 1.6,1.8 dhe 1.9', 25,65)
    doc.text('nga pjesa 1.', 25,69)
    doc.line(15,70,195,70)
    doc.rect(18, 84, 3, 3)
    doc.text('Уверение за телесна и душевна способност од овластена здравствена организација е потребно во следниве', 25,73)
    doc.text('случаеви: / Vërtetim për aftësi fizike dhe psiqike prej organizatës shëdetësote të autorizuar është i nevojshëm në', 25,77)
    doc.text('keto raste:',25,81)
    doc.text('- доколку возачот има навршено 75 години / nëse shoferi ka mbushur 75 vjet;', 30,85)
    doc.text('- за возач кој има впишана Ц, Ц1, ЦЕ,Ц1Е, Д, Д1, Д1Е и Т категорија во возачката дозвола / ', 30,89)
    doc.text('për shofer i cili posedon kategorinë C, C1, CE, C1E, D,D1,D1E dhe T kategorinë në patent shofer;', 32,93)
    doc.text('- ако возачот има ограничување на вашноста на возачката дозвола за 1.2, 1.3 и 1.9 / ', 30,97)
    doc.text('nëse shoferi ka kufizim në vlefshmërinë e patent shoferit për 1.2, 1.3 dhe 1.9;', 32, 101)
    doc.line(15,102,195,102)
    doc.rect(18, 104, 3, 3)
    doc.text('Доказ дека возачката дозвола е огласена за неважечка, за постапката од точка 1.8 од делот 1. (*) / ', 25,105)
    doc.text('Dëshmi se patentë shoferi është  i shpallur i pavlefshëm, për procedurën 1.8 nga pjesa 1. (*)', 25,109)
    doc.line(15,110,195,110)
    doc.rect(18, 112, 3, 3)
    doc.text('Писмена изјава од возачот за изгубена или украдена возачка дозвола, за постапката од точка 1.8 од делот 1./', 25,113)
    doc.text('Deklaratë me shkrim prej shoferit për patentë shofer të humbur ose të vjedhur për procedurën 1.8 nga pjesa 1.', 25,117)
    doc.text('',25,126)
    doc.line(15,118,195,118)
    doc.rect(18, 125, 3, 3)
    doc.text('Оригинална важечка странска возачка дозвола преведена на македонски јазик и заверена на нотар, препис', 25,121)
    doc.text('од странската возачка дозвола заверена на нотар за постапката од точка 1.2 од делот 1. / Patent shofer i huaj', 25,125)
    doc.text('origjinal dhe i përktyer në gjuhën maqedonase i vërtetuar te noteri, kopje nga patentë shoferi i huaj dhe i vërtetuar',25,129)
    doc.text('te noteri për procedurat 1.2 nga pjesa 1.',25,133)
    doc.line(15,134,195,134)
    doc.rect(18, 138, 3, 3)
    doc.text('Доказ за престој најмалку шест месеци во земјата во која е издадена странската возачка дозвола,за државја-', 25,137)
    doc.text('нин на РСМ, за постапката од точка 1.2 од делот 1. / Dëshmi për vendqëndrimin i më së paku gjashtë muajve në', 25,141)
    doc.text('vendim ku është lëshuar patentë shoferi i huaj, për shtetas të RMV-së për procedurat 1.2 nga pjesa 1.',25,145)
    doc.line(15,146,195,146)
    doc.rect(18, 157, 3, 3)
    doc.text('Ако од текстот на странската возачка дозвола не може да се утврди со кои моторни возила може да управу-', 25,149)
    doc.text('ва возачот, потребно е истиот да приложи исправа издадена од органот што ја издал странската возачка ', 25,153)
    doc.text('дозвола од која се гледа со кои моторни возила може да управува, за постапката од точката 1.2 од делот 1; /', 25,157)
    doc.text('Nëse nga teksti i patentë shoferit të huaj nuk mund të vërtetohet me cilat kategori mund të drejtojë shoferi,është e', 25,161)
    doc.text('domosdoshme i njëti të dorëzoje dokument nga organi i cili e ka lëshuar patentë shoferin nga i cili mund të', 25,165)
    doc.text('vërtetohet cilat automjete mundë ti drejtojë, për procedurën 1.2 nga pjesa 1.', 25,169)
    doc.line(15,170,195,170)
    doc.rect(18, 172, 3, 3)
    doc.text('Доказ за извршена промена на лично име или лична карта, за постапката од точката 1.5 од делот 1. /', 25,173)
    doc.text('Dëshmi për ndryshimin e emrit personal ose letërnjoftimit për procedurat nga pika 1.5 nga pjesa 1. (*)',25,177)
    doc.line(15,178,195,178)
    doc.rect(18, 180, 3, 3)
    doc.text('Доказ за извршена промена на живеалиште, за постапката од точката 1.7 од делот 1. (*)', 25,181)
    doc.text('Dëshmi për ndryshimin e vendbanimit, për procedurat nga pika 1.7 nga pjesa 1. (*)', 25,185)
    doc.line(15,186,195,186)
    doc.rect(18, 188, 3, 3)
    doc.text('Други документи неопходни за постапката / Dokumente tjera të domosdoshme për procedurën', 25,189)
    doc.line(30,194,190,194)
    doc.line(15,195,195,195)
    doc.line(15,22,15,195)
    doc.line(24,22,24,195)
    doc.line(195,22,195,195)
    doc.text('•  Податоците од делот 1,2 и 3 од барањето ги пополнува подносителот на барањето. / Të  dhënat nga pjesa 1,2 dhe',18,256)
    doc.text('3 të kërkesës i plotëson parshtruesi i kërkesës',18,260)
    doc.text('•  Податоците од делот 4 ги пополнува службеното лице. / Të  dhënat nga pjesa 4 i plotëson personi zyrtar.',18,264)
    doc.text('•  Подносителот на барањето самиот го избира начинот на кој Министерството за внатрешни работи ќе може да',18,268)
    doc.text('оствари контакт со истиот (телефонски или електронски пат). Избраниот начин за контакт се наведува во делот',18,272)
    doc.text('"податоци за контакт". / Parashtruesi i kërkesës vetë e ygjedh mënyren se si Ministria për Punë Të Brendshme do të',18,276)
    doc.text('kontaktoj me të(telefon apo përmes rrugës elektronike).Mënyra e zgjedhur për kontakt në pjesën "të dhënat për kontakt".', 18, 280)
    doc.save(`${personalInfo.firstName}${personalInfo.lastName}DriversLicense.pdf`);
}
