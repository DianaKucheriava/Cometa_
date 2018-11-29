var kldc = document.getElementById ("kldc");
var salary = document.getElementById ("salary");

//драйвери витрат
var rss = document.getElementById("rss");
var tbd = document.getElementById("tbd");
var cpr = document.getElementById("cpr");
var ruse = document.getElementById("ruse");
var doc = document.getElementById("doc");
var rte = document.getElementById("rte");
var rmp = document.getElementById("rmp");
var vmc = document.getElementById("vmc");
var can = document.getElementById("can");
var epla = document.getElementById("epla");
var elp = document.getElementById("elp");
var uhs = document.getElementById("uhs");
var eapl = document.getElementById("eapl");
var cpro = document.getElementById("cpro");
var cper = document.getElementById("cper");
var rpl = document.getElementById("rpl");
var dms = document.getElementById("dms");

var rssValue, tbdValue, cprValue, ruseValue, docValue, rteValue, rmpValue, vmcValue, canValue, eplaValue, elpValue, uhsValue, eaplValue, cproValue, cperValue, rplValue, dmsValue;

//Фактори масштабу

var prec = document.getElementById("prec");
var flex = document.getElementById("flex");
var resl = document.getElementById("resl");
var team = document.getElementById("team");
var pmat = document.getElementById("pmat");

var precValue, flexValue, reslValue, teamValue, pmatValue;

$(".result-container").toggle(false);
$("#reset").toggle(false);
$(".container-equations").toggle(false);
$(".title-equations").css("background-color", "#ddd");
var calculate = document.getElementById("calculate");

calculate.addEventListener("click", function () {
  var lineCode = kldc.value;
  var cost = salary.value;
  var factorsScale = getValuesScale();
  var driversCost = getValuesFEC();
  var effort = calculateEffort(lineCode, factorsScale , driversCost); 
  var timeDevelopment = calculateTime(effort, factorsScale);
  var costTotalProject = effort * cost;
    document.getElementById("timeDevelopment").innerHTML = Math.ceil(timeDevelopment.toFixed(2)) + " місяць(і)";
  document.getElementById("peopleNecessary").innerHTML = Math.ceil(effort.toFixed(2)) + " люд./міс.";
  document.getElementById("costTotal").innerHTML = costTotalProject.toFixed(2) + " гр.од.";

  $(".container-instructions").toggle(300,"linear");
  $(".container-entries").toggle(300,"linear");
  $(".factors-scale").toggle(300,"linear");
  $(".drivers-cost").toggle(300,"linear");
  $(".result-container").toggle(300, "linear");
  $("#calculate").toggle(300, "linear");
  $("#reset").toggle(300, "linear");
  $(".container-equations").toggle(300,"linear");

});

function calculateEffort(kldc, factorsScale, fec) {
  var exp = 0.91 + factorsScale/100;
  var esf = 2.94 * fec * Math.pow(kldc/1000, exp);
  return esf;
}

function calculateTime(effort, factorsScale) {
  var exp = 0.28 + (0.2 * factorsScale/100);
  var timeDevelopment = 3.67 * Math.pow(effort, exp);
  
  return timeDevelopment;
}

function getValuesFEC() {
  rssValue = Number(rss.options[rss.selectedIndex].value);
  tbdValue = Number(tbd.options[tbd.selectedIndex].value);
  cprValue = Number(cpr.options[cpr.selectedIndex].value);
  ruseValue = Number(ruse.options[ruse.selectedIndex].value);
  docValue = Number(doc.options[doc.selectedIndex].value);
  rteValue = Number(rte.options[rte.selectedIndex].value);
  rmpValue = Number(rmp.options[rmp.selectedIndex].value);
  vmcValue = Number(vmc.options[vmc.selectedIndex].value);
  canValue = Number(can.options[can.selectedIndex].value);
  eplaValue = Number(epla.options[epla.selectedIndex].value);
  uhsValue = Number(uhs.options[uhs.selectedIndex].value);
  eaplValue = Number(eapl.options[eapl.selectedIndex].value);
  cproValue = Number(cpro.options[cpro.selectedIndex].value);
  cperValue = Number(cper.options[cper.selectedIndex].value);
  rplValue = Number(rpl.options[rpl.selectedIndex].value);
  dmsValue = Number(dms.options[dms.selectedIndex].value);
  elpValue = Number(elp.options[elp.selectedIndex].value);

  var fec = rssValue + tbdValue + cprValue + ruseValue + docValue + rteValue + rmpValue + vmcValue + canValue + eplaValue + uhsValue + eaplValue + cproValue + cperValue + rplValue + dmsValue + elpValue;

  return fec;
}

function getValuesScale() {
  precValue = Number(prec.options[prec.selectedIndex].value);
  flexValue = Number(flex.options[flex.selectedIndex].value);
  reslValue = Number(resl.options[resl.selectedIndex].value);
  teamValue = Number(team.options[team.selectedIndex].value);
  pmatValue = Number(pmat.options[pmat.selectedIndex].value);

  var factorsScale = precValue + flexValue + reslValue + teamValue + pmatValue; 

  return factorsScale;
}

var reset = document.getElementById("reset");
reset.addEventListener("click", function () {
  $(".container-instructions").toggle(300,"linear");
  $(".container-entries").toggle(300,"linear");
  $(".factors-scale").toggle(300,"linear");
  $(".drivers-cost").toggle(300,"linear");
  $("#calculate").toggle(300, "linear");
  $("#reset").toggle(300, "linear");
  $(".result-container").toggle(false);
  $(".container-equations").toggle(false);
});