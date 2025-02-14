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
    doc.setLineWidth(0.1)
    doc.text('(се избира постапката на која се однесува барањето) / (zgjidhet procedura e cila ka të bëjë me kërkesën)', 24,44)
    doc.text('Барам возачката дозвола да биде издадена во: / Kërkoj që patentë shoferi të më lëshohet në:', 20,215)


    //BOLD
    doc.setFont('ArimoBold', 'bold');
    doc.setFontSize(10);
    doc.text('БАРАЊЕ ЗА ИЗДАВАЊЕ НА ВОЗАЧКА ДОЗВОЛА/KËRKESË PËR DHËNIE TË PATENTË SHOFERIT', 21, 33,);
    // doc.setFontSize(9);
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
    doc.line(25, 156,100,156) //tuka ime
    doc.line(110, 156,185,156)//tuka prezime
    doc.line(20,158,190,158)
    doc.text('Матичен број', 22, 162)
    doc.text('Numri amë i qytetarit', 22, 166)
    doc.line(70,166,185,166) //tuka maticen
    doc.line(20,168,190,168)
    doc.text('Ден, месец и година на раѓање', 35, 172)
    doc.text('Data,muaji dhr viti i lindjes', 40, 176)
    doc.text('Место на раѓање', 135, 172)
    doc.text('Vendi i lindjes', 138, 176)
    doc.line(25,182,100,182) // тука дата
    doc.line(110,182,185,182) //тука место
    doc.line(20,184,190,184)
    doc.text('Живеалиште/Престојувалиште', 35, 188)
    doc.text('Vendbanim/Vendqëndrimi', 40, 192)
    doc.text('Место/Адреса', 137, 188)
    doc.text('Vendi/Adresa', 138, 192)

    doc.line(25,198,100,198) // тука живеалиште
    doc.line(110,198,185,198) //тука адреса
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

    doc.save('driversLicense.pdf');

}
