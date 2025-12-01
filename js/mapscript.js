let map;
let foodMarkers = [];
let parkingMarkers = [];
let buildingMarkers = [];

const locations = {
  food: [
    { position: { lat: 34.2399, lng: -118.5283 }, title: 'Sierra Center Marketplace' },
    { position: { lat: 34.2405, lng: -118.5298 }, title: 'University Student Union' },
    { position: { lat: 34.2381, lng: -118.5294 }, title: 'Arbor Grill' },
    { position: { lat: 34.2425, lng: -118.5303 }, title: 'Geronimo\'s & Bamboo Terrace' }
  ],
  parking: [
    { position: { lat: 34.2435, lng: -118.5268 }, title: 'B5 Parking Structure' },
    { position: { lat: 34.2415, lng: -118.5328 }, title: 'G3 Parking Structure' },
    { position: { lat: 34.2384, lng: -118.5265 }, title: 'F5 Parking Lot' },
    { position: { lat: 34.2370, lng: -118.5295 }, title: 'B1 Parking Structure' }
  ],
  buildings: [
    { position: { lat: 34.2401, lng: -118.5293 }, title: 'Oviatt Library' },
    { position: { lat: 34.2418, lng: -118.5283 }, title: 'Jerome Richfield Hall' },
    { position: { lat: 34.2431, lng: -118.5298 }, title: 'Bookstein Hall' },
    { position: { lat: 34.2389, lng: -118.5316 }, title: 'Jacaranda Hall' }
  ]
};

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

  const csunCenter = { lat: 34.2415, lng: -118.5295 };

  map = new Map(document.getElementById('map'), {
    center: csunCenter,
    zoom: 16,
    mapId: 'DEMO_MAP_ID',
    gestureHandling: 'greedy'
  });

  // Create markers for each category
  foodMarkers = createMarkers(locations.food, '#FFC107'); // Amber
  parkingMarkers = createMarkers(locations.parking, '#2196F3'); // Blue
  buildingMarkers = createMarkers(locations.buildings, '#4CAF50'); // Green

  // Add event listeners to buttons
  document.getElementById('food-btn').addEventListener('click', () => toggleLayer(foodMarkers, 'food-btn'));
  document.getElementById('parking-btn').addEventListener('click', () => toggleLayer(parkingMarkers, 'parking-btn'));
  document.getElementById('buildings-btn').addEventListener('click', () => toggleLayer(buildingMarkers, 'buildings-btn'));

  // Initially show the food layer
  toggleLayer(foodMarkers, 'food-btn');
}

function createMarkers(places, color) {
  const markers = [];
  for (const place of places) {
    const pin = new google.maps.marker.PinElement({
      background: color,
      borderColor: '#000',
      glyphColor: '#000',
    });
    const marker = new google.maps.marker.AdvancedMarkerElement({
      position: place.position,
      title: place.title,
      content: pin.element,
    });
    markers.push(marker);
  }
  return markers;
}

function toggleLayer(markers, buttonId) {
  const allMarkers = [foodMarkers, parkingMarkers, buildingMarkers];
  const allButtons = document.querySelectorAll('.control-button');

  // First, hide all layers and deactivate all buttons
  allMarkers.forEach(markerArray => {
    markerArray.forEach(marker => marker.map = null);
  });
  allButtons.forEach(button => button.classList.remove('active'));

  // Then, show the selected layer and activate its button
  markers.forEach(marker => {
    marker.map = map;
  });
  document.getElementById(buttonId).classList.add('active');
}

initMap();