var organic = document.getElementById("organic");
var moderate = document.getElementById("moderate");
var embedded = document.getElementById("embedded");
var calculate = document.getElementById("calculate");

var rss = document.getElementById("rss");
var tbd = document.getElementById("tbd");
var cpr = document.getElementById("cpr");
var rte = document.getElementById("rte");
var rmp = document.getElementById("rmp");
var vmc = document.getElementById("vmc");
var trc = document.getElementById("trc");
var can = document.getElementById("can");
var ean = document.getElementById("ean");
var cpro = document.getElementById("cpro");
var eso = document.getElementById("eso");
var elp = document.getElementById("elp");
var utp = document.getElementById("utp");
var uhs = document.getElementById("uhs");
var rlp = document.getElementById("rlp");


var rssValue, tbdValue, cprValue, rteValue, rmpValue, vmcValue, trcValue, canValue, eanValue, cproValue, esoValue, elpValue, utpValue, uhsValue, rlpValue;

var option = 0;

function calculatingDrivers() {
    'use strict';
     rssValue = rss.options[rss.selectedIndex].value;
     tbdValue = tbd.options[tbd.selectedIndex].value;
     cprValue = cpr.options[cpr.selectedIndex].value;
     rteValue = rte.options[rte.selectedIndex].value;
     rmpValue = rmp.options[rmp.selectedIndex].value;
     vmcValue = vmc.options[vmc.selectedIndex].value;
     trcValue = trc.options[trc.selectedIndex].value;
     canValue = can.options[can.selectedIndex].value;
     eanValue = ean.options[ean.selectedIndex].value;
     cproValue = cpro.options[cpro.selectedIndex].value;
     esoValue = eso.options[eso.selectedIndex].value;
     elpValue = elp.options[elp.selectedIndex].value;
     utpValue = utp.options[utp.selectedIndex].value;
     uhsValue = uhs.options[uhs.selectedIndex].value;
     rlpValue = rlp.options[rlp.selectedIndex].value;
}

var start = false;
$(".container-equations").toggle(false);
$(".result-container").toggle(false);
$("#reset").toggle(false);
$(".title-equations").css("background-color","#ddd");


organic.addEventListener("click", function () {

    option = 1;
    $(".organic").css("background-color", "tomato");
    $(".moderate").css("background-color", "white");
    $(".embedded").css("background-color", "white");
    $(".row-organic").toggle(true);
    $(".row-moderate").toggle(false);
    $(".row-embedded").toggle(false);
    if (start) {
        
        calculatingDrivers();

        var kldc = document.getElementById("kldc");
        var salary = document.getElementById("salary");

        var  lineCode = kldc.value; 
        var fec = rssValue*tbdValue*cprValue*rteValue*rmpValue*vmcValue*trcValue*canValue*eanValue*cproValue*esoValue*elpValue*utpValue*uhsValue*rlpValue;
        var effort = 3.2 * Math.pow(lineCode/1000,1.05) * fec; 
        var timeDevelopment = 2.5 * Math.pow(effort, 0.38); 
        var personal = effort/timeDevelopment; 
        var costTotalProject = effort * salary.value;

        document.getElementById("timeDevelopment").innerHTML = Math.ceil(timeDevelopment.toFixed(2)) + " місяць(і)";
        document.getElementById("peopleNecessary").innerHTML = Math.ceil(effort.toFixed(2)) + " люд./міс.";
        document.getElementById("costTotal").innerHTML = costTotalProject.toFixed(2) + " гр.од.";
      
    }
});

moderate.addEventListener("click", function () {
    option = 2;
    $(".organic").css("background-color", "white");
    $(".moderate").css("background-color", "tomato");
    $(".embedded").css("background-color", "white");
    $(".row-moderate").toggle(true);
    $(".row-organic").toggle(false);
    $(".row-embedded").toggle(false); 
    if (start) {
           
        calculatingDrivers();

        var kldc = document.getElementById("kldc");
        var salary = document.getElementById("salary");

        var lineCode = kldc.value; 
        var fec = rssValue*tbdValue*cprValue*rteValue*rmpValue*vmcValue*trcValue*canValue*eanValue*cproValue*esoValue*elpValue*utpValue*uhsValue*rlpValue;
        var effort = 3.0 * Math.pow(lineCode/1000,1.12) * fec; 
        console.log(fec);
        var timeDevelopment = 2.5 * Math.pow(effort, 0.35); 
        var personal = effort/timeDevelopment; 
        var costTotalProject = effort * salary.value;

        document.getElementById("timeDevelopment").innerHTML = Math.ceil(timeDevelopment.toFixed(2)) + " місяць(і)";
        document.getElementById("peopleNecessary").innerHTML = Math.ceil(effort.toFixed(2)) + " люд./міс.";
        document.getElementById("costTotal").innerHTML = costTotalProject.toFixed(2) + " гр.од.";      
        
    }
});

embedded.addEventListener("click", function () {
    option = 3;
    $(".organic").css("background-color", "white");
    $(".moderate").css("background-color", "white");
    $(".embedded").css("background-color", "tomato");
    $(".row-embedded").toggle(true);
    $(".row-moderate").toggle(false);
    $(".row-organic").toggle(false);
    if (start) {
        
       calculatingDrivers();

        var kldc = document.getElementById("kldc");
        var salary = document.getElementById("salary");

        var lineCode = kldc.value; 
        var fec = rssValue*tbdValue*cprValue*rteValue*rmpValue*vmcValue*trcValue*canValue*eanValue*cproValue*esoValue*elpValue*utpValue*uhsValue*rlpValue;
        var effort = 2.8 * Math.pow(lineCode/1000,1.20) * fec; 
        var timeDevelopment = 2.5 * Math.pow(effort, 0.32); 
        var personal = effort/timeDevelopment; 

        var costTotalProject = effort * salary.value;

        document.getElementById("timeDevelopment").innerHTML = Math.ceil(timeDevelopment.toFixed(2)) + " місяць(і)";
        document.getElementById("peopleNecessary").innerHTML = Math.ceil(effort.toFixed(2)) + " люд./міс. ";
        document.getElementById("costTotal").innerHTML = costTotalProject.toFixed(2) + " гр.од.";
       
    }
});

calculate.addEventListener("click", function() {
    start = true;
    $("#calculate").toggle(300, "linear");
    $("#reset").toggle(300, "linear");
    $(".container-equations").toggle(300, "linear");
    $(".result-container").toggle(300, "linear");
    $(".container-options").toggle(300,"linear");
    $(".drivers-cost").toggle(300,"linear");
    $(".container-instructions").toggle(300,"linear");
    $(".container-entries").toggle(300,"linear");
    if (option == 1) {
       calculatingDrivers();

        kldc = document.getElementById("kldc");
        salary = document.getElementById("salary");

        lineCode = kldc.value;  
        fec = rssValue*tbdValue*cprValue*rteValue*rmpValue*vmcValue*trcValue*canValue*eanValue*cproValue*esoValue*elpValue*utpValue*uhsValue*rlpValue;
        effort = 3.2 * Math.pow(lineCode/1000,1.05) * fec;  
        timeDevelopment = 2.5 * Math.pow(effort, 0.38); 
        personal = effort/timeDevelopment; 
        costTotalProject = effort * salary.value;

        document.getElementById("timeDevelopment").innerHTML = Math.ceil(timeDevelopment.toFixed(2)) + " місяць(і)";
        document.getElementById("peopleNecessary").innerHTML = Math.ceil(effort.toFixed(2)) + " люд./міс.";
        document.getElementById("costTotal").innerHTML = costTotalProject.toFixed(2) + " гр.од.";
    } else {
        if (option == 2) {
            calculatingDrivers();

            kldc = document.getElementById("kldc");
            salary = document.getElementById("salary");

            lineCode = kldc.value; 
           fec = rssValue*tbdValue*cprValue*rteValue*rmpValue*vmcValue*trcValue*canValue*eanValue*cproValue*esoValue*elpValue*utpValue*uhsValue*rlpValue;
            effort = 3.0 * Math.pow(lineCode/1000,1.12) * fec; 
            console.log(fec);
            timeDevelopment = 2.5 * Math.pow(effort, 0.35); 
            personal = effort/timeDevelopment; 
            costTotalProject = effort * salary.value;

            document.getElementById("timeDevelopment").innerHTML = Math.ceil(timeDevelopment.toFixed(2)) + " місяць(і)";
            document.getElementById("peopleNecessary").innerHTML = Math.ceil(effort.toFixed(2)) + " люд./міс.";
            document.getElementById("costTotal").innerHTML = costTotalProject.toFixed(2) + " гр.од.";
        }
        else {
            if (option == 3) {
                calculatingDrivers();

                kldc = document.getElementById("kldc");
                salary = document.getElementById("salary");

                lineCode = kldc.value; 
                fec = rssValue*tbdValue*cprValue*rteValue*rmpValue*vmcValue*trcValue*canValue*eanValue*cproValue*esoValue*elpValue*utpValue*uhsValue*rlpValue;
                effort = 2.8 * Math.pow(lineCode/1000,1.20) * fec; 
                timeDevelopment = 2.5 * Math.pow(effort, 0.32); 
                personal = effort/timeDevelopment; 

                costTotalProject = effort * salary.value;

                document.getElementById("timeDevelopment").innerHTML = Math.ceil(timeDevelopment.toFixed(2)) + " місяць(і)";
                document.getElementById("peopleNecessary").innerHTML = Math.ceil(effort.toFixed(2)) + " люд./міс.";
                document.getElementById("costTotal").innerHTML = costTotalProject.toFixed(2) + " гр.од.";
            }
        }
    }
});

var reset = document.getElementById("reset");

reset.addEventListener("click", function () {
    $("#calculate").toggle(300, "linear");
    $("#reset").toggle(300, "linear");
    $(".result-container").toggle(300, "linear");
    $(".container-options").toggle(300,"linear");
    $(".drivers-cost").toggle(300,"linear");
    $(".container-instructions").toggle(300,"linear");
    $(".container-entries").toggle(300,"linear");
    $(".container-equations").toggle(300, "linear");
});