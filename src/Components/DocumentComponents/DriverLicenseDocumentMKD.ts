import jsPDF from "jspdf";
import { addArimoFontBold } from "../../addArimoFontBold";
import { DriverLicense, PersonalDetailsID } from "../../Types/interfaces";
import { addNotoSerifFont } from "../../addNotoSerifFont";
export const generateDriverLicenseDocumentMKD = (personalInfo: PersonalDetailsID, driverLicense: DriverLicense)=>{

    const doc = new jsPDF()
    addArimoFontBold(doc)
    addNotoSerifFont(doc);
    doc.setFont('ArimoBold', 'bold');
    doc.setFontSize(10);
    doc.text('Прилог бр.2', 190, 20, { align: 'right' });
    doc.text('ДО:', 20, 20,{align: 'left'})
    doc.text('МИНИСТЕРСТВО ЗА ВНАТРЕШНИ РАБОТИ НА РЕПУБЛИКА СЕВЕРНА МАКЕДОНИЈА', 20, 25,{align: 'left'})
    doc.setFontSize(13);
    doc.text('БАРАЊЕ ЗА ИЗДАВАЊЕ НА ВОЗАЧКА ДОЗВОЛА', 100, 32, { align: 'center' });
    doc.setLineWidth(0.5)
    doc.line(15, 34, 195, 34);
    doc.line(15, 110, 195, 110);
    if(driverLicense.reason==='1'){
        doc.roundedRect(25.5,44,8,5,3,4 )
    }
    if(driverLicense.reason==='2'){
        doc.roundedRect(25.5,49,8,5,3,4 )
    }
    if(driverLicense.reason==='3'){
        doc.roundedRect(25.5,54,8,5,3,4 )
    }
    if(driverLicense.reason==='4'){
        doc.roundedRect(25.5,59,8,5,3,4 )
    }
    if(driverLicense.reason==='5'){
        doc.roundedRect(25.5,64,8,5,3,4 )
    }
    if(driverLicense.reason==='6'){
        doc.roundedRect(25.5,69,8,5,3,4 )
    }
    if(driverLicense.reason==='7'){
        doc.roundedRect(25.5,74,8,5,3,4 )
    }
    if(driverLicense.reason==='8'){
        doc.roundedRect(25.5,79,8,5,3,4 )
    }
    if(driverLicense.reason==='9'){
        doc.roundedRect(25.5,84,8,5,3,4 )
    }
    if(driverLicense.reason==='10'){
        doc.roundedRect(26.5,89,8,6,3,6 )
    }
    if(driverLicense.reason==='11'){
        doc.roundedRect(26.5,94,8,6,3,6 )
    }
    doc.setLineWidth(0.1)
    
    //ОДГОВОРИ
    doc.setFontSize(11);
    doc.text(personalInfo.firstName, 35,134)
    doc.text(personalInfo.lastName, 120,134)
    doc.text(personalInfo.socialNumber, 120,159)
    doc.text(personalInfo.birth ? personalInfo.birth.format("DD/MM/YYYY"): '', 30,183)
    doc.text(personalInfo.placeBirth, 120,183)
    doc.text(personalInfo.city,30,197)
    doc.text(personalInfo.address, 120,197)
    if(personalInfo.phone){
        doc.text(personalInfo.phone, 70,265)
    }else{
        doc.text(personalInfo.email, 70,265)
    }
    
    if(driverLicense.procedure==='редовна'){
        doc.text('X',70.2, 219.8)
    }else{
        doc.text('X',70.2, 224.8)
    }
    if(driverLicense.nameLanguage==='турски'){
        doc.text('X', 90.2,151.8)
    }
    if(driverLicense.nameLanguage==='влашки'){
        doc.text('X', 90.2,156.8)
    }
    if(driverLicense.nameLanguage==='српски'){
        doc.text('X', 90.2,161.8)
    }
    if(driverLicense.nameLanguage==='ромски'){
        doc.text('X', 90.2,166.8)
    }
    if(driverLicense.nameLanguage==='босански'){
        doc.text('X', 90.2,171.8)
    }

    doc.setFontSize(10);
    doc.text('1. ПРИЧИНА ЗА ПОДНЕСУВАЊЕ НА БАРАЊЕТО', 23,40)      
    doc.text('1.1  ИЗДАВАЊЕ НА ВОЗАЧКА ДОЗВОЛА ЗА ПРВ ПАТ', 27,48)
    doc.text('1.2  ЗАМЕНА НА СТРАНСКА СО МАКЕДОНСКА ВОЗАЧКА ДОЗВОЛА', 27,53)
    doc.text('1.3  ЗАМЕНА НА ВОЗАЧКА ДОЗВОЛА ПОРАДИ ИСТЕК НА РОКОТ НА ВАЖЕЊЕ', 27,58)
    doc.text('1.4  ЗАМЕНА НА ВОЗАЧКА ДОЗВОЛА ПОРАДИ ГУБЕЊЕ, ДОТРАЕНОСТ ИЛИ ОШТЕТЕНОСТ', 27,63)
    doc.text('1.5  ЗАМЕНА ПОРАДИ ПРОМЕНА НА ЛИЧНОТО ИМЕ НА ВОЗАЧОТ', 27,68)
    doc.text('1.6  ЗАМЕНА ПОРАДИ ЗАВЕРКА НА НОВА КАТЕГОРИЈА', 27,73)
    doc.text('1.7  ЗАМЕНА ПОРАДИ ПРОМЕНА НА ЖИВЕАЛИШТЕ НА ВОЗАЧОТ', 27,78)
    doc.text('1.8  ИЗДАВАЊЕ НА ДУПЛИКАТ ВОЗАЧКА ДОЗВОЛА', 27,83)
    doc.text('1.9  ЗАМЕНА ПОРАДИ ЗАПИШУВАЊЕ НА ОГРАНИЧУВАЊА ОД ЗДРАВСТВЕНИ ПРИЧИНИ', 27,88)
    doc.text('1.10  ЗАМЕНА ПОРАДИ ЗАПИШУВАЊЕ ЗАБРАНА ЗА УПРАВУВАЊЕ СО МОТОРНО ВОЗИЛО', 27,93)
    doc.text('1.11  ПРОДОЛЖУВАЊЕ НА ВАЖНОСТ НА ВОЗАЧКА ДОЗВОЛА СПОРЕД ПРИЈАВЕНО ', 27,98)
    doc.text('ПРЕСТОЈУВАЛИШТЕ, А ПО ПРЕТХОДНА НАЈАВА ЗА МЕСТОТО НА ПОДНЕСУВАЊЕ', 36,103)
    doc.text('НА БАРАЊЕТО.', 36,108)
    doc.text('2. ПОДАТОЦИ ЗА ПОДНОСИТЕЛОТ НА БАРАЊЕТО:', 23,117)
    doc.text('3. ПОСТАПКА ЗА ИЗДАВАЊЕ НА ВОЗАЧКА ДОЗВОЛА', 23,208)
    doc.text('4. ПОДАТОЦИ ЗА ПРЕТХОДНА ВОЗАЧКА ДОЗВОЛА', 23,232)
    doc.line(15,120,195,120)
    doc.text('ИМЕ', 55,124)
    doc.text('ПРЕЗИМЕ', 140,124)
    doc.line(15,125,195,125)
    doc.line(20,135,100,135)
    doc.line(110,135,190,135)
    doc.line(15,140,195,140)
    doc.line(15,173,195,173)
    doc.line(15,186,195,186)
    doc.line(15,200,195,200)
    doc.line(15,120,15,200)
    doc.line(195,120,195,200)
    doc.line(105,120,105,200)
    doc.text('1. Редовна постапка', 25,220)
    doc.text('2. Итна постапка', 25,225)
    doc.rect(70,217, 3,3)
    doc.rect(70,222, 3,3)


    //NotoSerif FONT
    doc.setFont("NotoSerif", "normal");
    doc.text('Барам моето лично име во возачката дозвола да', 17,144)
    doc.text('биде испишано и на:', 17,148)
    doc.text('1. Турски јазик и писмо', 20,152)
    doc.rect(90,149, 3,3)
    doc.text('2. Влашки јазик и писмо', 20,157)
    doc.rect(90,154, 3,3)
    doc.text('3. Српски јазик и писмо', 20,162)
    doc.rect(90,159, 3,3)
    doc.text('4. Ромски јазик и писмо', 20,167)
    doc.rect(90,164, 3,3)
    doc.text('5. Босански јазик и писмо', 20,172)
    doc.rect(90,169, 3,3)
    doc.text('(македонски јазик)', 42,139)
    doc.text('(македонски јазик)', 130,139)
    doc.setFontSize(11)
    doc.text('Ден, месец и година на раѓање:', 27,177)
    doc.text('Живеалиште/Престојувалиште', 28,190)
    doc.text('Матичен број', 132, 150)
    doc.text('Место на раѓање', 130, 177)
    doc.text('Место/Адреса', 132, 190)
    doc.setFontSize(10)
    doc.text('(се избира постапката на која се однесува барањето)', 27,44)
    doc.line(110,160,190,160)
    doc.line(110,184,190,184)
    doc.line(110,198,190,198)
    doc.line(20,184,100,184)
    doc.line(20,198,100,198)
    doc.text('Барам возачката дозвола да биде издадена во:', 20, 213)
    doc.text('1. Број на возачка дозвола', 25,238)
    doc.line(75,238,130,238)
    doc.text('2. Орган кој ја издал', 25,244)
    doc.line(65,244,120,244)
    doc.text('Датум и место на поднесување на барањето', 17, 250)
    doc.line(17,258,95,258)
    doc.text('Потпис на подносителот', 140, 250)
    doc.line(130,258,195,258)
    doc.text('Податоци за контакт', 17, 266)
    doc.line(60,266,120,266)
    doc.text('Потпис на овластеното службено лице кое го примило барањето', 17, 274)
    doc.line(135,274,195,274)


    //vtora strana
    doc.addPage()
    doc.setFont('ArimoBold', 'bold');
    doc.text('5. ПРИЛОГ КОН БАРАЊЕТО', 23,20)
    doc.text('6. СОГЛАСНОСТ ОД ПОДНОСИТЕЛОТ НА БАРАЊЕТО', 23,192)
    doc.text('УПАТСТВО ЗА ПОПОЛНУВАЊЕ НА БАРАЊЕТО ЗА ИЗДАВАЊЕ НА ВОЗАЧКА ДОЗВОЛА', 20,237)
    doc.setFont("NotoSerif", "normal");
    doc.setFontSize(9.1)
    doc.line(15,25,195,25)
    doc.text('При поднесување на барањето се врши проверка на идентитетот на подносителот на барањето со увид', 25,29)
    doc.text('во важечка лична карта или документ за лична идентификација за одобрен законски престој што има', 25,33)
    doc.text('фотографија, издаден од државен орган.', 26,37)
    doc.rect(17.6,30, 4,4)
    doc.line(15,39,195,39)
    doc.text('Досие за положен возачки испит за управување со моторно возило од категоријата за која се бара', 25,43)
    doc.text('издавање возачка дозвола, за постапките од точките 1.1 и 1.6 од делот 1.', 25,47)
    doc.rect(17.6,42, 4,4)
    doc.line(15,49,195,49)
    doc.text('Возачка дозвола за постапките од точките 1.2, 1.3, 1.4(освен при губење на возачка дозвола), 1.5, 1.6, 1.8', 25,53)
    doc.text('и 1.9 од делот 1.', 25,57)
    doc.rect(17.6,52, 4,4)
    doc.line(15,59,195,59)
    doc.text('Уверение за телесна и душевна способност од овластена здравствена организација е потребно во', 25,63)
    doc.text('следниве случаеви:', 25,67)
    doc.text('- доколку возачот има навршено 75 години;', 30,72)
    doc.text('- за возач кој има впишана Ц, Ц1, ЦЕ,Ц1Е, Д, Д1, Д1Е и Т категорија во возачката дозвола;', 30,76)
    doc.text('- ако возачот има ограничување на вашноста на возачката дозвола за 1.2, 1.3 и 1.9; ', 30,80)
    doc.rect(17.6,67, 4,4)
    doc.line(15,82,195,82)
    doc.text('Доказ дека возачката дозвола е огласена за неважечка, за постапката од точка 1.8 од делот 1. (*)', 25,88)
    doc.rect(17.6,85, 4,4)
    doc.line(15,92,195,92)
    doc.text('Писмена изјава од возачот за изгубена или украдена возачка дозвола, за постапката од точка 1.8 од', 25,96)
    doc.text('делот 1.', 25,100)
    doc.rect(17.6,95, 4,4)
    doc.line(15,102,195,102)
    doc.text('Оригинална важечка странска возачка дозвола преведена на македонски јазик и заверена на нотар,', 25,106)
    doc.text('препис од странската возачка дозвола заверена на нотар за постапката од точка 1.2 од делот 1.', 25,110)
    doc.rect(17.6,105, 4,4)
    doc.line(15,112,195,112)
    doc.text('Доказ за престој најмалку шест месеци во земјата во која е издадена странската возачка дозвола, за', 25,116)
    doc.text('државјанин на РСМ, за постапката од точка 1.2 од делот 1.', 25,120)
    doc.rect(17.6,115, 4,4)
    doc.line(15,122,195,122)
    doc.text('Ако од текстот на странската возачка дозвола не може да се утврди со кои моторни возила може да', 25,126)
    doc.text('управува возачот, потребно е истиот да приложи исправа издадена од органот што ја издал странската', 25,130)
    doc.text('возачка дозвола од која се гледа со кои моторни возила може да управува, за постапката од точката 1.2', 25,134)
    doc.text('од делот 1.', 25,138)
    doc.rect(17.6,129, 4,4)
    doc.line(15,140,195,140)
    doc.text('Доказ за извршена промена на лично име или лична карта, за постапката од точката 1.5 од делот 1. (*)', 25,146)
    doc.rect(17.6,143, 4,4)
    doc.line(15,150,195,150)
    doc.text('Доказ за извршена промена на живеалиште, за постапката од точката 1.7 од делот 1. (*)', 25,156)
    doc.rect(17.6,153, 4,4)
    doc.line(15,160,195,160)
    doc.text('Други документи неопходни за постапката', 25,166)
    doc.line(97,168, 190, 168)
    doc.rect(17.6,163, 4,4)
    doc.line(15,170,195,170)
    doc.line(24,25,24,170)
    doc.line(15,25,15,170)
    doc.line(195,25,195,170)

    doc.text('Доказите означени со ѕвезда(*) се смета дека се поднесени кон барањето и истите Министерството за', 17.6,177)
    doc.text('внатрешни работи ги прибавува по службена должност.', 17.6,182)
    doc.text('•  Податоците од делот 1,2 и 3 од барањето ги пополнува подносителот на барањето.',17.6,242)
    doc.text('•  Податоците од делот 4 ги пополнува службеното лице',17.6,247)
    doc.text('•  Подносителот на барањето самиот го избира начинот на кој Министерството за внатрешни работи ќе',18,252)
    doc.text('може да оствари контакт со истиот (телефонски или електронски пат). Избраниот начин за контакт се',21,257)
    doc.text('наведува во делот "податоци за контакт".',21,262)
    doc.setLineWidth(0.5)
    doc.line(17.6, 184, 190,184)
    doc.rect(17.6,196,4,4)
    doc.setLineWidth(0.1)
    doc.setFontSize(12)
    doc.text('X',18,199.5)
    doc.setFontSize(10)
    doc.text('Подносителот на барањето е согласен неговите лични податоци да се користат во постапката',23, 199)
    doc.text('за остварување на правото пред надлежните органи за прибавување на СИТЕ',17.6, 204)
    doc.text('документи означени со ѕвезда(*) од делот 5 на ова барање.',17.6, 209)
    doc.text('Потпис на подносителот',27,218)
    doc.line(20,230,80,230)
    doc.save(`${personalInfo.firstName}${personalInfo.lastName}DriversLicense.pdf`);
}
