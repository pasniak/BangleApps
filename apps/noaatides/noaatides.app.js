/* https://tidesandcurrents.noaa.gov/api/datagetter?product=predictions&application=NOS.COOPS.TAC.WL&begin_date=20211127&end_date=20211228&datum=MLLW&station=8531680&time_zone=lst_ldt&units=english&interval=hilo&format=json */

var tides = require("Storage").readJSON("noaatides.json");

g.setFontAlign(0, 0); // center font
g.setFont("Vector",18);

function printOneTide(tides, i, offset) {
  var prediction = tides.predictions[i];
  var pTime = prediction.t;
  var pType = prediction.type;

  var now = new Date();
  var pDate = Date(Date.parse(pTime.replace(" ", "T"))); // trick!

  // if prediction is in the future
  if (now < pDate) {
    var w = g.getWidth();
    var h = g.getHeight();
    var center = w/2;
    g.drawString(pTime, center, (1+offset)*h/5);
    g.drawString(pType, center, (2+offset)*h/5);
    return true;
  }
  return false;
}

function printTides(tides) {
  var is_something_printed = false;
  g.clear();
  for (i=0; i<116; i++) {
    if (printOneTide(tides, i, 0) && printOneTide(tides, i+1, 2)) {
      is_something_printed = true;
      break;
    }
  }
  if (!is_something_printed) {
    E.showMessage("Stale data in noaatides.json file", "NOAA Tides");
  }
}

if (!tides) {
  E.showMessage("Missing noaatides.json file","NOAA Tides");
} else {
  printTides(tides);
}
