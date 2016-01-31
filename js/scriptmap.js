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

//function runGreenSock() {

var tekst1 = document.querySelector("#tekst1");
var wolken = document.querySelector("#wolken");
var tekst2= document.querySelector("#tekst2");
var fiets =  document.querySelector("#fiets");
var Alles =  document.querySelector("#Laag_1");

var start = new TimelineMax();
var tlClouds = new TimelineMax({repeat: -1});

start
.from(fiets, 3.5, {x:-1500,ease: Power4.easeOut})
.from(tekst1, 1, {x:-600})
.from(tekst2, 1, {x:600},'+=2');

tlClouds
.to(wolken, 20, {x: 1200});

var alles = document.querySelector("#alles");
var navigatie = document.querySelector("#navigatie");
var eerste= document.querySelector("#eerste");
var tweede =  document.querySelector("#tweede");
var derde =  document.querySelector("#derde");
var vierde =  document.querySelector("#vierde");
var vijfde =  document.querySelector("#vijfde");

var animatie = new TimelineMax();

animatie
.from(eerste, 3,{x:-900})
.to(eerste,2,{scale:1.1})
.from(tweede,3,{x:900})
.to(tweede,2,{scale:1.1})
.from(derde, 3,{x:-900})
.to(derde,2,{scale:1.1})
.from(vierde,3,{x:900})
.to(vierde,2,{scale:1.1})
.from(vijfde, 3,{x:-900})
.to(vijfde,2,{scale:1.1})

var aarde =  document.querySelector("#aarde");
var bollie =  document.querySelector("#bollie");
var TV =  document.querySelector("#TV");
var hendel =  document.querySelector("#hendel");
var graafauto =  document.querySelector("#graafauto");
var storing =  document.querySelector("#storing");
var moneybag =  document.querySelector("#moneybag");
var wereldboltekst=  document.querySelector("#wereldboltekst");
var tvtekst =  document.querySelector("#tvtekst");
var graaftekst =  document.querySelector("#graaftekst");
var moneytekst =  document.querySelector("#moneytekst");
var alles =  document.querySelector("#Laag_1");

teksten = new TimelineMax({repeat:4});
deAarde = new TimelineMax({repeat:-1});
moneyBag = new TimelineMax({repeat:-1});
GraafMach = new TimelineMax({repeat:-1});
tvError = new TimelineMax({repeat:-1});

deAarde
.set(bollie, {opacity:0})
.to(aarde, 150, {rotation:1300, transformOrigin: 'center'})

moneyBag
.to(moneybag, 2, {skewX:5,yoyo:true, repeat:2})

GraafMach
.to(hendel,3, {rotation:-4, transformOrigin: '200',ease:Sine.easeInout,yoyo:true, repeat:1})
.to([hendel,graafauto], 2, {x:-60,yoyo:true, repeat:1});

tvError
.to(storing, 0.1,{opacity:0.65});

teksten
.to(wereldboltekst, 0.2, {scale:1.2})
.to(wereldboltekst,0.2, {scale:1})
.to(tvtekst, 0.2, {scale:1.2},'+=2')
.to(tvtekst,0.2, {scale:1})
.to(graaftekst, 0.2, {scale:1.2},'+=2')
.to(graaftekst,0.2, {scale:1})
.to(moneytekst, 0.2, {scale:1.2},'+=2')
.to(moneytekst,0.2, {scale:1})
//};



//setTimeout(runGreenSock, 5000);






