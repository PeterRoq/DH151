// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3;
let path = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';
let markers = L.featureGroup();
let csvdata;

// initialize
$( document ).ready(function() {
    createMap(lat,lon,zl);
	readCSV(path);
});

// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}

// function to read csv data
function readCSV(path){
	Papa.parse(path, {
		header: true,
		download: true,
		complete: function(data) {
			console.log(data);
            csvdata = data;
            mapCSV();
			
		}
	});
}
function mapCSV(){

	// loop through every row in the csv data
	csvdata.data.forEach(function(item,index){
		// check to make sure the Latitude column exists
		if(item.Lat != undefined){

			// Lat exists, so create a circleMarker for each country


			// add the circleMarker to the featuregroup

		} // end if
	});
}

	// add the featuregroup to the map


	// fit the circleMarkers to the map view
