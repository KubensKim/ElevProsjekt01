
var partier= JSON.parse (localStorage.getItem("partiliste"));
console.log(partier);
if (partier ==null){
    partier={RØDT:0, SV:0, ARBEIDERPARTIET: 0, SENTERPARTIET: 0, MDG: 0, KRF: 0, venstre: 0, HØYRE:0, FRP:0};
}

document.getElementById("rødt");
document.getElementById("sv");
document.getElementById("arbeiderpartiet");
document.getElementById("senterpartiet");
document.getElementById("mdg");
document.getElementById("krf");
document.getElementById("venstre");
document.getElementById("høyre");
document.getElementById("frp");
 
//Henter ut de fysiske elementene (antall stemmer fro hvert parti)
var RodtValueEl = document.getElementById("RØDT");
var SVValueEl = document.getElementById("SV");
var APValueEl = document.getElementById("ARBEIDERPARTIET");
var SPValueEl = document.getElementById("SENTERPARTIET");
var MDGValueEl = document.getElementById("MDG");
var KrFValueEl = document.getElementById("KRF");
var VValueEl = document.getElementById("venstre");
var HoyreValueEl = document.getElementById("HØYRE");
var FrPValueEl = document.getElementById("FRP");


function someFunc() {
    displayRadioValue();
    clickCounter();
    lagredata();
    fjernradiobuttons();
}




function displayRadioValue(e) {
    var parti = document.getElementsByName('parti');
    for(i = 0; i < parti.length; i++) {
        if(parti[i].checked){
            var partinavn= parti[i].value;
            partier[partinavn]++;
            console.log(partier)
        }
        
    }
    drawChart();
}


var parti =document.getElementsByName("parti");

//Submit knapp
var submitEl = document.getElementById("knapp")
/*submitEl.addEventListener("click", calculate);*/
 
//Arrayer som skal inneholde alle gangene hvert parti blir stemt på
var Rodtarray = [];
var SVarray = [];
var AParray = [];
var SParray = [];
var MDGarray = [];
var KrFarray = [];
var Varray = [];
var Hoyrearray = [];
var FrParray = [];




// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ["Rødt", partier.RØDT],
  ["Arbeiderpartiet", partier.ARBEIDERPARTIET],
  [ "Senterpartiet", partier.SENTERPARTIET],
  ["SV", partier.SV],
  ["KRF", partier.KRF],
  ["Venstre", partier.venstre],
  ["Høyre", partier.HØYRE],
  ["MDG", partier.MDG],
  ["FRP", partier.FRP]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':"Stemme resultater", 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}


function clickCounter() {
    
    if(typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
        
      }
      document.getElementById("result").innerHTML = "det er totalt " + localStorage.clickcount + " stemmer.";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
   
  }



  var partios = document.getElementsByName("parti"); // list of radio buttons
  var val = localStorage.getItem('parti'); // local storage value
  for(var i=0;i<partios.length;i++){
    if(partios[i].value == val){
        partios[i].checked = true; // marking the required radio as checked
    }
  }


function lagredata(){
    if (typeof(Storage) !== "undefined") {
    localStorage.setItem("partiliste",JSON.stringify(partier))
    }
    
}

var form= document.getElementById("partivalg");

function fjernradiobuttons(){
    form.innerHTML = "<h2>Takk for at du stemte!</h2>";
}

