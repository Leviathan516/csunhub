let map;
let infoWindow;
let foodMarkers = [];
let parkingMarkers = [];
let buildingMarkers = [];

const locations = {
  food: [
    {
      title: "Matador Mercado",
      place: "Housing",
      hours: `Mon–Thu 7:00 AM–10:30 PM
Fri 7:00 AM–9:00 PM
Sat 8:00 AM–9:00 PM
Sun 8:00 AM–10:30 PM`,
      position: { lat: 34.2464, lng: -118.5290 }
    },
    {
      title: "Arbor Grill",
      place: "Near Jacaranda Building",
      hours: `11:00 AM–10:00 PM`,
      position: { lat: 34.2381, lng: -118.5294 }
    },
    {
      title: "Baba’s Pizza",
      place: "Sierra Center Building",
      hours: `Mon–Thu 10:30 AM–6:00 PM
Fri–Sun CLOSED`,
      position: { lat: 34.2399, lng: -118.5283 }
    },
    {
      title: "Sambazon Açaí Bowls",
      place: "Campus Store Complex",
      hours: `Mon–Thu 10:00 AM–4:00 PM
Fri–Sun CLOSED`,
      position: { lat: 34.2389, lng: -118.5277 }
    },
    {
      title: "Shake Smart",
      place: "University Student Union",
      hours: `Mon–Thu 7:00 AM–10:00 PM
Fri 7:00 AM–8:00 PM
Sat–Sun 10:00 AM–6:00 PM`,
      position: { lat: 34.2384, lng: -118.5286 }
    },
    // ----- Near Campus (Reseda Blvd corridor) -----
    {
      title: "Waffle Love",
      place: "Reseda Blvd",
      hours: `8:00 AM–2:30 PM`,
      position: { lat: 34.24129273456913, lng: -118.53630360439738 }
    },
    {
      title: "Ubatuba Açaí",
      place: "Reseda Blvd",
      hours: `9:00 AM–11:00 PM`,
      position: { lat: 34.24621988557331, lng: -118.53701670439713 }
    },
    {
      title: "Baskin Robbins",
      place: "Reseda Blvd",
      hours: `11:00 AM–10:00 PM`,
      position: { lat: 34.24355718725773, lng: -118.53592273323285 }
    },
    {
      title: "Bounce Boba Lounge",
      place: "Reseda Blvd",
      hours: `Mon–Thu 11:30 AM–10:00 PM
Fri–Sun 11:30 AM–11:00 PM`,
      position: { lat: 34.243780449104975, lng: -118.53650546206859 }
    },
    {
      title: "Two Hands Corn Dogs",
      place: "Reseda Blvd",
      hours: `Mon–Sun 11:00 AM–9:30 PM (Fri–Sun to 9:30 PM; Mon–Thu to 9:00 PM)`,
      position: { lat: 34.23601503655361, lng: -118.53494506663696 }
    },
    {
      title: "Hawaiian Hot Chicken",
      place: "Reseda Blvd",
      hours: `11:00 AM–12:00 AM`,
      position: { lat: 34.25006523676043, lng: -118.5194802674716 }
    }
  ],

  parking: [
    {
      "position": {
        "lat": 34.23615109258849,
        "lng": -118.53276403024567
      },
      "title": "Parking Structure B1",
      "permit": "Student"
    },
    {
      "position": {
        "lat": 34.23803357258907,
        "lng": -118.53330630462501
      },
      "title": "Parking Lot B3",
      "permit": "Student"
    },
    {
      "position": {
        "lat": 34.23689615512934,
        "lng": -118.5329054112827
      },
      "title": "Parking Lot B2",
      "permit": "Mixed"
    },
    {
      "position": {
        "lat": 34.2479,
        "lng": -118.5287
      },
      "title": "Parking Lot B4",
      "permit": "Mixed"
    },
    {
      "position": {
        "lat": 34.23875844208851,
        "lng": -118.53225450132838
      },
      "title": "Parking Structure B3",
      "permit": "Student"
    },
    {
      "position": {
        "lat": 34.241519319035795,
        "lng": -118.532711643305
      },
      "title": "Parking Structure B5",
      "permit": "Student"
    },
    {
      "position": {
        "lat": 34.24394374599401,
        "lng": -118.53250334278619
      },
      "title": "Parking Lot B6",
      "permit": "Student"
    },
    {
      "position": {
        "lat": 34.24150526124224,
        "lng": -118.52489938569944
      },
      "title": "Parking Lot F5",
      "permit": "Mixed"
    },
    {
      "position": {
        "lat": 34.240261771564654,
        "lng": -118.52392656323893
      },
      "title": "Parking Lot G4",
      "permit": "Student"
    },
    {
      "position": {
        "lat": 34.23832981453801,
        "lng": -118.52394976751418
      },
      "title": "Parking Lot G3",
      "permit": "Student"
    },
    {
      "position": {
        "lat": 34.238168573775084,
        "lng": -118.52519256582374
      },
      "title": "Parking Structure G3",
      "permit": "Student"
    },
    {
      "position": {
        "lat": 34.23620590084155,
        "lng": -118.52405566130483
      },
      "title": "Parking Lot G1",
      "permit": "Mixed"
    },
    {
      "position": {
        "lat": 34.240778145281915,
        "lng": -118.52611110651856
      },
      "title": "Parking Lot F4",
      "permit": "Mixed"
    },
    {
      "position": {
        "lat": 34.23738075492532,
        "lng": -118.52671119120299
      },
      "title": "Parking Lot F2",
      "permit": "Mixed"
    },
    {
      "position": {
        "lat": 34.24345412580359,
        "lng": -118.52851811666409
      },
      "title": "Parking Lot E6",
      "permit": "Student"
    },
    {
      "position": {
        "lat": 34.24937698146702,
        "lng": -118.52555121043896
      },
      "title": "Parking Lot F9",
      "permit": "Mixed"
    },
    {
      "position": {
        "lat": 34.25112905369409,
        "lng": -118.52618338549338
      },
      "title": "Parking Lot F10",
      "permit": "Student"
    },
    {
      "position": {
        "lat": 34.25107142939617,
        "lng": -118.5237351212882
      },
      "title": "Parking Lot G10",
      "permit": "Student"
    },
    {
      "position": {
        "lat": 34.253850733394884,
        "lng": -118.52425987158705
      },
      "title": "Parking Lot G12",
      "permit": "Mixed"
    },
    {
      "position": {
        "lat": 34.24857084180977,
        "lng": -118.52391245027827
      },
      "title": "Parking Structure G8 (Housing)",
      "permit": "Student"
    },
    {
      "position": {
        "lat": 34.248895917179446,
        "lng": -118.52389489486981
      },
      "title": "Parking Structure G9 (Housing)",
      "permit": "Student"
    },
    {
      "position": {
        "lat": 34.24301752285057,
        "lng": -118.52939511070822
      },
      "title": "Parking Lot D6 (Employee)",
      "permit": "Employee"
    }
  ],
  buildings: [
    {
      "position": {
        "lat": 34.2401,
        "lng": -118.5293
      },
      "title": "University Library"
    },
    {
      "position": {
        "lat": 34.24196605393645,
        "lng": -118.53079831502039
      },
      "title": "Bookstein Hall"
    },
    {
      "position": {
        "lat": 34.238877942612916,
        "lng": -118.53071557556179
      },
      "title": "Jerome Richfield Hall"
    },
    {
      "position": {
        "lat": 34.24124184294615,
        "lng": -118.52888268905467
      },
      "title": "Jacaranda Hall"
    },
    {
      "position": {
        "lat": 34.240131811867286,
        "lng": -118.52703814672604
      },
      "title": "University Student Union (USU)"
    },
    {
      "position": {
        "lat": 34.23822992981255,
        "lng": -118.53102437556188
      },
      "title": "Sierra Hall"
    },
    {
      "position": {
        "lat": 34.23895590358568,
        "lng": -118.53021073323313
      },
      "title": "Sierra Tower"
    },
    {
      "position": {
        "lat": 34.237747282009735,
        "lng": -118.53026034672615
      },
      "title": "Manzanita Hall"
    },
    {
      "position": {
        "lat": 34.240363381181886,
        "lng": -118.531318433233
      },
      "title": "Bayramian Hall"
    },
    {
      "position": {
        "lat": 34.2398696201719,
        "lng": -118.53208961789045
      },
      "title": "University Hall"
    },
    {
      "position": {
        "lat": 34.24062352779417,
        "lng": -118.52823257556173
      },
      "title": "Sequoia Hall"
    },
    {
      "position": {
        "lat": 34.239082991108205,
        "lng": -118.52800655002395
      },
      "title": "Citrus Hall"
    },
    {
      "position": {
        "lat": 34.23867616671749,
        "lng": -118.52814284111932
      },
      "title": "Eucalyptus Hall"
    },
    {
      "position": {
        "lat": 34.23832473242764,
        "lng": -118.52819760116141
      },
      "title": "Live Oak Hall"
    },
    {
      "position": {
        "lat": 34.24194971907548,
        "lng": -118.52680484672598
      },
      "title": "Redwood Hall"
    },
    {
      "position": {
        "lat": 34.2401,
        "lng": -118.5312
      },
      "title": "Nordhoff Hall"
    },
    {
      "position": {
        "lat": 34.2388,
        "lng": -118.5327
      },
      "title": "Art and Design Center"
    },
    {
      "position": {
        "lat": 34.2419,
        "lng": -118.5289
      },
      "title": "Monterey Hall"
    },
    {
      "position": {
        "lat": 34.2426,
        "lng": -118.5296
      },
      "title": "Oasis Wellness Center"
    },
    {
      "position": {
        "lat": 34.2428,
        "lng": -118.5278
      },
      "title": "The Soraya (VPAC)"
    },
    {
      "position": {
        "lat": 34.242,
        "lng": -118.5286
      },
      "title": "Extended University Commons"
    },
    {
      "position": {
        "lat": 34.23743119113274,
        "lng": -118.52818173323318
      },
      "title": "Bookstore / Campus Store Complex"
    },
    {
      "position": {
        "lat": 34.239912350736546,
        "lng": -118.52497424857565
      },
      "title": "Student Recreation Center (SRC)"
    },
    {
      "position": {
        "lat": 34.2455,
        "lng": -118.5361
      },
      "title": "University Village Apartments (Housing)"
    },
    {
      "position": {
        "lat": 34.2439,
        "lng": -118.5357
      },
      "title": "Student Housing Administration"
    },
    {
      "position": {
        "lat": 34.2462,
        "lng": -118.5363
      },
      "title": "G9 Housing Parking Structure (landmark)"
    },
    {
      "position": {
        "lat": 34.2393,
        "lng": -118.5275
      },
      "title": "Sustainability Center"
    },
    {
      "position": {
        "lat": 34.238,
        "lng": -118.5258
      },
      "title": "Police Services / Parking / Public Safety"
    },
    {
      "position": {
        "lat": 34.2385,
        "lng": -118.5271
      },
      "title": "Central Plant"
    },
    {
      "position": {
        "lat": 34.2381,
        "lng": -118.533
      },
      "title": "Physical Plant Management"
    }
  ]
};






// --- Name -> coordinate resolver using Places Text Search ---
async function geocodeItemsByName(items, placesService, campusCenter, radiusMeters = 1200) {
  const resolved = [];
  for (const item of items) {
    if (item.position) { resolved.append(item); continue; }
    const query = `${item.title} CSUN`;
    const request = {
      query,
      locationBias: { center: campusCenter, radius: radiusMeters },
    };
    const result = await new Promise((resolve) => {
      placesService.textSearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results && results.length) {
          resolve(results[0]);
        } else {
          resolve(null);
        }
      });
    });
    if (result && result.geometry && result.geometry.location) {
      item.position = result.geometry.location;
    }
    resolved.push(item);
  }
  return resolved;
}


async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

  const csunCenter = { lat: 34.2415, lng: -118.5295 };
  infoWindow = new google.maps.InfoWindow();

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

  // event listeners for buttons
  document.getElementById('food-btn').addEventListener('click', () => toggleLayer(foodMarkers, 'food-btn'));
  document.getElementById('parking-btn').addEventListener('click', () => toggleLayer(parkingMarkers, 'parking-btn'));
  document.getElementById('buildings-btn').addEventListener('click', () => toggleLayer(buildingMarkers, 'buildings-btn'));

  function toggleLayer(markers, buttonId) {
    const allMarkers = [foodMarkers, parkingMarkers, buildingMarkers];
    const allButtons = document.querySelectorAll('#controls .button');
    allMarkers.forEach(markerArray => {
      markerArray.forEach(marker => marker.map = null);
    });

    allButtons.forEach(button => button.classList.remove('primary'));
    markers.forEach(marker => {
      marker.map = map;
    });

    document.getElementById(buttonId).classList.add('primary');
  }
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

    // Attach click handler to show an InfoWindow with optional place/hours
    marker.addListener("click", () => {
      const loc = place.place ? `📍 ${place.place}` : "";
      const hrs = place.hours ? `<pre style="margin:0; white-space:pre-wrap; line-height:1.35; font-size:12px;">${place.hours}</pre>` : "";
      const html = `
        <div style="max-width:220px;">
          <div style="font-weight:600; font-size:14px; margin-bottom:4px;">${place.title || ""}</div>
          ${loc ? `<div style="font-size:12px; opacity:.8; margin-bottom:6px;">${loc}</div>` : ""}
          ${hrs}
        </div>`;
      infoWindow.setContent(html);
      infoWindow.open({ anchor: marker, map });
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