 var organic = document.getElementById ("organic");
 var moderate = document.getElementById ("moderate");
var embedded  = document.getElementById ("embedded");

var optModel = 0;
var start = false;
$(".container-equations").toggle(false);
$(".result-container").toggle(false);
$("#reset").toggle(false);
$(".title-equations").css("background-color","#ddd");


organic.addEventListener("click", function () {
    optModel = 1;
    $(".organic").css("background-color", "tomato");
    $(".moderate").css("background-color", "white");
    $(".embedded").css("background-color", "white"); 
    $(".row-organic").toggle(true);   
    $(".row-moderate").toggle(false);
    $(".row-embedded").toggle(false);
});
moderate.addEventListener("click", function() {
    optModel = 2;
    $(".moderate").css("background-color", "tomato");
    $(".organic").css("background-color", "white");
    $(".embedded").css("background-color", "white");
    $(".row-moderate").toggle(true);     
    $(".row-organic").toggle(false);
    $(".row-embedded").toggle(false);    
});
embedded.addEventListener("click", function() {
    optModel = 3;
    $(".embedded").css("background-color", "tomato");
    $(".moderate").css("background-color", "white");
    $(".organic").css("background-color", "white");
    $(".row-embedded").toggle(true); 
    $(".row-moderate").toggle(false);
    $(".row-organic").toggle(false);
});
var calculate = document.getElementById("calculate");
calculate.addEventListener("click", function() {
    'use strict';
    var kldc, salary, lineCode, effort, timeDevelopment, personal, costTotalProject;
        
    start = true;
    $(".container-main").toggle(300,"linear");
    $("#reset").toggle(300, "linear");
    if (optModel == 1) {
        kldc = document.getElementById("kldc");
        salary = document.getElementById("salary");
        lineCode = kldc.value; 
        console.log(lineCode);
        effort = 2.4 * Math.pow(lineCode/1000,1.05); 
        timeDevelopment = 2.5 * Math.pow(effort, 0.38); 
        personal = effort/timeDevelopment; 
        costTotalProject = effort * salary.value;
        document.getElementById("timeDevelopment").innerHTML = Math.ceil(timeDevelopment.toFixed(2)) + " місяць(і)";
        document.getElementById("peopleNecessary").innerHTML = Math.ceil(effort.toFixed(2)) + "люд./міс.";
        document.getElementById("costTotal").innerHTML = costTotalProject.toFixed(2) + " гр.од.";
        $("#calculate").toggle(300, "linear");
        $(".container-equations").toggle(300,"linear");
        $(".result-container").toggle(300, "linear");
       }
    else {
        if (optModel == 2) {
            kldc = document.getElementById("kldc");
            salary = document.getElementById("salary");
            lineCode = kldc.value;
            effort = 3.0 * Math.pow(lineCode/1000,1.12); 
            timeDevelopment = 2.5 * Math.pow(effort, 0.35); 
            personal = effort/timeDevelopment; 
             costTotalProject = effort * salary.value;

            document.getElementById("timeDevelopment").innerHTML = Math.ceil(timeDevelopment.toFixed(2)) + " місяць(і)";
            document.getElementById("peopleNecessary").innerHTML = Math.ceil(effort.toFixed(2)) + "люд./міс.";
            document.getElementById("costTotal").innerHTML = costTotalProject.toFixed(2) + " гр.од.";
            $("#calculate").toggle(300, "linear");
            $(".container-equations").toggle(300,"linear");
            $(".result-container").toggle(300, "linear");
                 }
        else
        {
            if (optModel == 3) {
                kldc = document.getElementById("kldc");
                salary = document.getElementById("salary");
                lineCode = kldc.value; 
                effort = 3.6 * Math.pow(lineCode/1000,1.20); 
                timeDevelopment = 2.5 * Math.pow(effort, 0.32); 
                personal = effort/timeDevelopment; 
                costTotalProject = effort * salary.value;
                document.getElementById("timeDevelopment").innerHTML = Math.ceil(timeDevelopment.toFixed(2)) + " місяць(і)";
                document.getElementById("peopleNecessary").innerHTML = Math.ceil(effort.toFixed(2)) + " люд./міс.";
                document.getElementById("costTotal").innerHTML = costTotalProject.toFixed(2) + " гр.од.";
                $("#calculate").toggle(300, "linear");
                $(".container-equations").toggle(300,"linear");
                $(".result-container").toggle(300, "linear");
            }
        }       
    }
});

var reset = document.getElementById("reset");

reset.addEventListener("click", function () {
    $(".container-main").toggle(300,"linear");
    $(".result-container").toggle(300, "linear");
    $("#calculate").toggle(300, "linear");
    $(".container-equations").toggle(false);
    $("#reset").toggle(false);
});