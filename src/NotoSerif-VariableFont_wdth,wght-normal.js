﻿(function (jsPDFAPI) {
var callAddFont = function () {
this.addFileToVFS("NotoSerif-VariableFont_wdth,wght-normal.ttf", font);
this.addFont("NotoSerif-VariableFont_wdth,wght-normal.ttf", "NotoSerif-VariableFont_wdth,wght", "normal");
};
jsPDFAPI.events.push(['addFonts', callAddFont])
 })(jsPDF.API);