function undrGround(){
  location.href = "ondergrond.html";
};

function back(){
  location.href = "index.html";
};



//--------Leaflet--------

var map = L.map('map', {
    center: [52.370383, 4.883601],
    zoom: 17,
    dragging: true,
    touchZoom: true,
    scrollWheelZoom: false,
    zoomControl: true
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Gemeente Amsterdam',
    maxZoom: 25,
    id: 'sembah.659937e7',
    accessToken: 'pk.eyJ1Ijoic2VtYmFoIiwiYSI6ImNpamE0c2wxbzAwNGp1eGx4anowbDhkMzEifQ.V-xe9_kA1H_FY5kt7338aw'
}).addTo(map);



function popup (feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.Address + "</h3><br>" + "Startdatum: " + feature.properties.StartDate + "<br>" + "Einddatum: " + feature.properties.CompletedDate + "<br>" + "Verkeerhinder: " + feature.properties.TrafficNuisanceType + "<br>" + "Omschrijving: " + feature.properties.PublicInformation + "<br>");
};

var werkzaamheden = L.geoJson(amsterdam, {

    onEachFeature: popup

}).addTo(map);

var leiding = [[52.370392, 4.883066], [52.370363, 4.883749], [52.370334, 4.883747]];
var leiding1 = [[52.370425, 4.883061], [52.370375, 4.884428]];
var leiding2 = [[52.370351, 4.883795], [52.370369, 4.883795], [52.370350, 4.884397], [52.370402, 4.884399], [52.370448, 4.883057]];
var leiding3 = [[52.370462, 4.883751], [52.370417, 4.883752]];
var leiding4 = [[52.370454, 4.883660], [52.370414, 4.883660]];

var waternet = [leiding, leiding1, leiding2, leiding3, leiding4];

var water = {
    color: 'blue'
};

var watermap = L.multiPolyline(waternet, water).addTo(map);
watermap.bindPopup("<h3>Waterleiding</h3><br>" + "Eigenaar: Waternet<br>" + "Gelegd: 2003<br>" + "Materiaal: Kunststof<br>");

var riool = [[52.370407, 4.883041], [52.370361, 4.884448]];

var rioolB = {
    color: 'tomato'
};

var rioolmap = L.polyline(riool, rioolB).addTo(map);
rioolmap.bindPopup("<h3>Rioolleiding</h3><br>" + "Eigenaar: Waternet<br>" + "Gelegd: 2006<br>" + "Materiaal: Beton<br>");

var gasleiding = [[52.370391, 4.883063], [52.370339, 4.884412], [52.370399, 4.884410], [52.370442, 4.883068], [52.370391, 4.883063]];

var gas = {
    color: 'yellow'
};

var gasmap = L.polyline(gasleiding, gas).addTo(map);
gasmap.bindPopup("<h3>Gasleiding</h3><br>" + "Eigenaar: Liander<br>" + "Gelegd: 1998<br>" + "Materiaal: Metaal<br>");

var dataLiander = [[52.370447, 4.882969], [52.370436, 4.883042], [52.370433, 4.883074], [52.370378, 4.884440]];
var dataLiander1 = [[52.370401, 4.883059], [52.370392, 4.883147], [52.370349, 4.884402]];
var dataLiander2 = [[52.370396, 4.883059], [52.370387, 4.883147], [52.370342, 4.884400]];
var dataLiander3 = [[52.370394, 4.883060], [52.370383, 4.883147], [52.370335, 4.884396]];

var data1 = [[52.370390, 4.883060], [52.370339, 4.884418]]; //Eurofiber datatransport
var data2 = [[52.370385, 4.883078], [52.370361, 4.884139], [52.370326, 4.884405]];//Eurofiber datatransport
var data3 = [[52.370385, 4.883078], [52.370365, 4.883154], [52.370446, 4.883162], [52.370453, 4.883073]];//Eurofiber datatransport
var data4 = [[52.370352, 4.884321], [52.370346, 4.884401], [52.370409, 4.884395], [52.370408, 4.884417]];//Eurofiber datatransport
var data5 = [[52.370354, 4.883053], [52.370392, 4.883085], [52.370338, 4.884388]]; //KPN 
var data6 = [[52.370439, 4.883066], [52.370405, 4.884127], [52.370418, 4.884208], [52.370413, 4.884421]];//KPN 
var data7 = [[52.370296, 4.883048], [52.370512, 4.883070]];//KPN 
var data8 = [[52.370494, 4.884421], [52.370222, 4.884399]];//KPN 
var data9 = [[52.370357, 4.884066], [52.370325, 4.884382]];//KPN 
var data10 = [[52.370407, 4.884413], [52.370343, 4.884395], [52.370306, 4.884402], [52.370324, 4.884422],[52.370343, 4.884395]]; //Tele2
var data11 = [[52.370324, 4.883052], [52.370392, 4.883060], [52.370366, 4.884042], [52.370354, 4.884040], [52.370344, 4.884399]]; //UPC
var data12 = [[52.370439, 4.883495], [52.370422, 4.883491], [52.370420, 4.883452], [52.370441, 4.883446, [52.370436, 4.883464], [52.370423, 4.883672], [52.370437, 4.883672], [52.370425, 4.883940], 52.370414, 4.884049], [52.370425, 4.884043], [52.370400, 4.884411]]; //UPC

var dataNet = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, dataLiander, dataLiander1, dataLiander2, dataLiander3];

var dataLeidingen = {
    color: 'green'
};

var datamap = L.multiPolyline(dataNet, dataLeidingen).addTo(map);
datamap.bindPopup("<h3>Datakabel</h3><br>" + "Eigenaar: KPN<br>" + "Gelegd: 2001<br>" + "Materiaal: Polyurethaan<br>");

var overlay = {
        "<strong>Werkzaamheden</strong>": werkzaamheden,
        "<strong>Water</strong>": watermap,
        "<strong>Riool</strong>": rioolmap,
        "<strong>Gas</strong>": gasmap,
        "<strong>Data</strong>": datamap
    };

L.control.layers(null, overlay, {
    position: 'topleft'
}).addTo(map);

L.control.scale({
    imperial: true
}).addTo(map);


//--------Greensock--------



var city = document.querySelector('#Stad');
var undrground = document.querySelector('#Ondergrond');
var pipes = document.querySelector('#Buizen');
var facts = document.querySelector('#Feiten');
var facts2 = document.querySelector('#Feit2');
var facts3 = document.querySelector('#Feit3');
var facts4 = document.querySelector('#Feit4');
var clouds = document.querySelector('#Wolken');
var bike = document.querySelector('#Fiets');
var block = document.querySelector('#Blok');

var hide = new TimelineMax();

hide
.set(city, {y: -600})
.set([undrground, pipes], {y:-2400})
.set([facts, facts2, facts3, facts4], {scale: 0})
.set([clouds, bike], {x: -1200})
.set(block, {y: -1200, rotation: -45});

function runGreenSock() {

var tlCity = new TimelineMax();

tlCity
.to([city, undrground], 1, {y:0, ease: Elastic.easeInOut});

var tlClouds = new TimelineMax({repeat: -1});

tlClouds
.to(clouds, 20, {x: 1200});

var tlBike = new TimelineMax();

tlBike
.to(bike, 10, {x: 0, ease: Power4.easeOut}, '+=1');

var tlBlock = new TimelineMax();

tlBlock
.to(block, 1.5, {y:0, rotation: 0, ease: Elastic.easeInOut}, "+=3")

var tlPipes = new TimelineMax();

tlPipes
.to(pipes, 1, {y: 0}, "+=6");

var tlFacts = new TimelineMax();

tlFacts
.to(facts, 0.2, {scale: 1.5}, "+=9.2")
.to(facts, 0.2, {scale: 1})
.to(facts2, 0.2, {scale: 1.5}, "+=2")
.to(facts2, 0.2, {scale: 1})
.to(facts3, 0.2, {scale: 1.5}, "+=2")
.to(facts3, 0.2, {scale: 1})
.to(facts4, 0.2, {scale: 1.5}, "+=2")
.to(facts4, 0.2, {scale: 1})

}

setTimeout(runGreenSock, 5000);






