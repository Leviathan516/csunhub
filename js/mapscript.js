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
      hours: `Mon–Sun 11:00 AM–9:30 PM`,
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
      position: { lat: 34.23615109258849, lng: -118.53276403024567 },
      title: "Parking Structure B1",
      permit: "Student",
      note: "Usually easiest before 9:30 AM."
    },
    {
      position: { lat: 34.23803357258907, lng: -118.53330630462501 },
      title: "Parking Lot B3",
      permit: "Student",
      note: "Often gets busy around late morning."
    },
    {
      position: { lat: 34.23689615512934, lng: -118.5329054112827 },
      title: "Parking Lot B2",
      permit: "Mixed",
      note: "A flexible option for daytime parking."
    },
    {
      position: { lat: 34.2479, lng: -118.5287 },
      title: "Parking Lot B4",
      permit: "Mixed",
      note: "Usually calmer outside peak class hours."
    },
    {
      position: { lat: 34.23875844208851, lng: -118.53225450132838 },
      title: "Parking Structure B3",
      permit: "Student",
      note: "Can fill up quickly on busy weekdays."
    },
    {
      position: { lat: 34.241519319035795, lng: -118.532711643305 },
      title: "Parking Structure B5",
      permit: "Student",
      note: "Popular with commuter students."
    },
    {
      position: { lat: 34.24394374599401, lng: -118.53250334278619 },
      title: "Parking Lot B6",
      permit: "Student",
      note: "Usually opens up more after afternoon classes."
    },
    {
      position: { lat: 34.24150526124224, lng: -118.52489938569944 },
      title: "Parking Lot F5",
      permit: "Mixed",
      note: "A decent backup when central lots get crowded."
    },
    {
      position: { lat: 34.240261771564654, lng: -118.52392656323893 },
      title: "Parking Lot G4",
      permit: "Student",
      note: "Good option near the east side of campus."
    },
    {
      position: { lat: 34.23832981453801, lng: -118.52394976751418 },
      title: "Parking Lot G3",
      permit: "Student",
      note: "Often crowded around mid-morning."
    },
    {
      position: { lat: 34.238168573775084, lng: -118.52519256582374 },
      title: "Parking Structure G3",
      permit: "Student",
      note: "Usually steadier than nearby open lots."
    },
    {
      position: { lat: 34.23620590084155, lng: -118.52405566130483 },
      title: "Parking Lot G1",
      permit: "Mixed",
      note: "A solid mixed-permit fallback lot."
    },
    {
      position: { lat: 34.240778145281915, lng: -118.52611110651856 },
      title: "Parking Lot F4",
      permit: "Mixed",
      note: "Can be easier to enter than the larger structures."
    },
    {
      position: { lat: 34.23738075492532, lng: -118.52671119120299 },
      title: "Parking Lot F2",
      permit: "Mixed",
      note: "Usually a reasonable backup at midday."
    },
    {
      position: { lat: 34.24345412580359, lng: -118.52851811666409 },
      title: "Parking Lot E6",
      permit: "Student",
      note: "Popular because of its central location."
    },
    {
      position: { lat: 34.24937698146702, lng: -118.52555121043896 },
      title: "Parking Lot F9",
      permit: "Mixed",
      note: "Usually calmer than inner-campus lots."
    },
    {
      position: { lat: 34.25112905369409, lng: -118.52618338549338 },
      title: "Parking Lot F10",
      permit: "Student",
      note: "Usually best earlier in the day."
    },
    {
      position: { lat: 34.25107142939617, lng: -118.5237351212882 },
      title: "Parking Lot G10",
      permit: "Student",
      note: "Farther out, but sometimes easier to find space."
    },
    {
      position: { lat: 34.253850733394884, lng: -118.52425987158705 },
      title: "Parking Lot G12",
      permit: "Mixed",
      note: "A useful overflow option."
    },
    {
      position: { lat: 34.24857084180977, lng: -118.52391245027827 },
      title: "Parking Structure G8 (Housing)",
      permit: "Student",
      note: "Housing-adjacent structure with heavier evening demand."
    },
    {
      position: { lat: 34.248895917179446, lng: -118.52389489486981 },
      title: "Parking Structure G9 (Housing)",
      permit: "Student",
      note: "Usually busier at night because of nearby housing."
    },
    {
      position: { lat: 34.24301752285057, lng: -118.52939511070822 },
      title: "Parking Lot D6 (Employee)",
      permit: "Employee",
      note: "Restricted lot with higher weekday demand."
    }
  ],

  buildings: [
    {
      position: { lat: 34.2401, lng: -118.5293 },
      title: "University Library",
      description: "Main research library with study rooms, archives, tech help, and course materials.",
      hours: "Spring 2026: Mon-Thu 8am-10pm, Fri 8am-5pm, Sat 12pm-5pm, Sun 12pm-8pm.",
      image: "media/images/buildings/universitylibrary.jpg",
    },
    {
      position: { lat: 34.24196605393645, lng: -118.53079831502039 },
      title: "Bookstein Hall",
      description: "Smart classrooms and testing spaces; also home to some business advising and workshops.",
      hours: "Hours vary by classes and department offices.",
      image: "media/images/buildings/booksteinhall.jpg",
    },
    {
      position: { lat: 34.238877942612916, lng: -118.53071557556179 },
      title: "Jerome Richfield Hall",
      description: "Humanities building with language resources, tutoring, and courses in writing, languages, and culture.",
      hours: "Hours vary by classes and departments.",
      image: "media/images/buildings/jeromerichfieldhall.jpg",
    },
    {
      position: { lat: 34.24124184294615, lng: -118.52888268905467 },
      title: "Jacaranda Hall",
      description: "Engineering, computer science, health, and nursing building with labs, classrooms, and an auditorium.",
      hours: "Hours vary by classes and labs.",
      image: "media/images/buildings/jacaranda.jpg",
    },
    {
      position: { lat: 34.240131811867286, lng: -118.52703814672604 },
      title: "University Student Union (USU)",
      description: "Student hub with lounges, services, events, wellness spaces, dining, and recreation nearby.",
      hours: "Fall/Spring: Mon-Thu 7am-10pm, Fri 7am-7pm, Sat-Sun 8am-5pm.",
      image: "media/images/buildings/usu.jpg",
    },
    {
      position: { lat: 34.23822992981255, lng: -118.53102437556188 },
      title: "Sierra Hall",
      description: "Large classroom building used for social sciences, humanities, and test prep courses.",
      hours: "Hours vary by class schedule.",
      image: "media/images/buildings/sierrahall.jpg",
    },
    {
      position: { lat: 34.23895590358568, lng: -118.53021073323313 },
      title: "Sierra Tower",
      description: "Tower classrooms and academic offices used for general instruction and campus events.",
      hours: "Hours vary by class and office schedule.",
      image: "media/images/buildings/sierratower.jpg",
    },
    {
      position: { lat: 34.237747282009735, lng: -118.53026034672615 },
      title: "Manzanita Hall",
      description: "Media and performance building with labs, production spaces, green screen tech, and screening rooms.",
      hours: "Hours vary by classes, labs, and events.",
      image: "media/images/buildings/manzanitahall.jpg",
    },
    {
      position: { lat: 34.240363381181886, lng: -118.531318433233 },
      title: "Bayramian Hall",
      description: "Administrative building with student finance, records, counseling, outreach, and other student services.",
      hours: "Office hours vary; many student services run weekdays.",
      image: "media/images/buildings/bayramianhall.jpg",
    },
    {
      position: { lat: 34.2398696201719, lng: -118.53208961789045 },
      title: "University Hall",
      description: "Academic and administrative building used for offices, classes, and university operations.",
      hours: "Hours vary by offices and classes.",
      image: "media/images/buildings/universityhall.jpg",
    },
    {
      position: { lat: 34.24062352779417, lng: -118.52823257556173 },
      title: "Sequoia Hall",
      description: "Home to child development and family sciences, with food science labs and the Marilyn Magaram Center.",
      hours: "Hours vary by classes and labs.",
      image: "media/images/buildings/sequoiahall.jpg",
    },
    {
      position: { lat: 34.239082991108205, lng: -118.52800655002395 },
      title: "Citrus Hall",
      description: "Classroom and lab building commonly used for science and health-related instruction.",
      hours: "Hours vary by classes and labs.",
    },
    {
      position: { lat: 34.23867616671749, lng: -118.52814284111932 },
      title: "Eucalyptus Hall",
      description: "Science-focused lecture and lab building used for general coursework and labs.",
      hours: "Hours vary by classes and labs.",
      image: "media/images/buildings/eucalyptushall.jpg",
    },
    {
      position: { lat: 34.23832473242764, lng: -118.52819760116141 },
      title: "Live Oak Hall",
      description: "Science lecture and laboratory building; also home to math and physics support spaces.",
      hours: "Hours vary by classes and department offices.",
    },
    {
      position: { lat: 34.24194971907548, lng: -118.52680484672598 },
      title: "Redwood Hall",
      description: "Academic building used for classrooms, faculty offices, and student support spaces.",
      hours: "Hours vary by classes and offices.",
      image: "media/images/buildings/redwoodhall.jpg",
    },
    {
      position: { lat: 34.2401, lng: -118.5312 },
      title: "Nordhoff Hall",
      description: "Theatre building with performance spaces, dressing rooms, and production classrooms.",
      hours: "Hours vary by classes, rehearsals, and performances.",
    },
    {
      position: { lat: 34.2388, lng: -118.5327 },
      title: "Art and Design Center",
      description: "Art studios, design spaces, galleries, and classrooms for visual arts and creative work.",
      hours: "Hours vary by classes and gallery events.",
      image: "media/images/buildings/artanddesigncenter.jpg",
    },
    {
      position: { lat: 34.2419, lng: -118.5289 },
      title: "Monterey Hall",
      description: "Academic building with classrooms and faculty offices for general university instruction.",
      hours: "Hours vary by classes and offices.",
      image: "media/images/buildings/montereyhall.jpg",
    },
    {
      position: { lat: 34.2426, lng: -118.5296 },
      title: "Oasis Wellness Center",
      description: "Wellness space for relaxation, meditation, recovery tools, and student well-being programs.",
      hours: "Hours vary by semester and services.",
      image: "media/images/buildings/oasiswellnesscenter.jpg",
    },
    {
      position: { lat: 34.2360648919923, lng: -118.52858363067132 },
      title: "The Soraya (VPAC)",
      description: "Major performing arts venue for concerts, dance, theatre, and campus cultural events.",
      hours: "Hours vary by event and box office schedule.",
      image: "media/images/buildings/thesoraya.jpg",
    },
    {
      position: { lat: 34.242, lng: -118.5286 },
      title: "Extended University Commons",
      description: "Extended learning building with classrooms, program offices, and production support space.",
      hours: "Hours vary; internal use and rentals only.",
    },
    {
      position: { lat: 34.23743119113274, lng: -118.52818173323318 },
      title: "Bookstore / Campus Store Complex",
      description: "Campus store, course materials, supplies, dining, and grab-and-go student services.",
      hours: "Campus Store: Mon-Thu 9am-3pm, Fri 9am-2pm, Sat-Sun closed; dining varies.",
    },
    {
      position: { lat: 34.239912350736546, lng: -118.52497424857565 },
      title: "Student Recreation Center (SRC)",
      description: "Gym, fitness, recreation, and wellness programs for students.",
      hours: "Hours vary by semester; see SRC schedule.",
      image: "media/images/buildings/src.jpg",
    },
    {
      position: { lat: 34.2455, lng: -118.5361 },
      title: "University Village Apartments (Housing)",
      description: "On-campus apartment-style housing for students and families with nearby community spaces.",
      hours: "Residential access daily; housing office weekdays 8am-5pm.",
    },
    {
      position: { lat: 34.2439, lng: -118.5357 },
      title: "Student Housing Administration",
      description: "Main housing office for applications, resident services, and support.",
      hours: "Mon-Fri 8am-5pm, Sat-Sun closed.",
    },
    {
      position: { lat: 34.2462, lng: -118.5363 },
      title: "G9 Housing Parking Structure (landmark)",
      description: "Housing-area parking landmark near residence spaces and campus apartments.",
      hours: "Parking access varies by permit and event schedule.",
    },
    {
      position: { lat: 34.2393, lng: -118.5275 },
      title: "Sustainability Center",
      description: "Campus sustainability resource space tied to environmental programs and student initiatives.",
      hours: "Hours vary by program and office activity.",
    },
    {
      position: { lat: 34.238, lng: -118.5258 },
      title: "Police Services / Parking / Public Safety",
      description: "Public safety, dispatch, parking support, and emergency response services.",
      hours: "Open 24/7 for police services.",
    },
    {
      position: { lat: 34.2385, lng: -118.5271 },
      title: "Central Plant",
      description: "Infrastructure building supporting campus utilities and facility operations.",
      hours: "Not a general public building; operational access only.",
    },
    {
      position: { lat: 34.2381, lng: -118.533 },
      title: "Physical Plant Management",
      description: "Facilities and maintenance operations supporting campus buildings and grounds.",
      hours: "Operational offices; hours vary by unit.",
    }
  ]
};

function getParkingStatus(place) {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  const isWeekend = day === 0 || day === 6;

  if (place.permit === "Employee") {
    if (!isWeekend && hour >= 8 && hour < 15) return "Packed";
    if (!isWeekend && hour >= 15 && hour < 18) return "Busy";
    return "Limited";
  }

  if (place.title.includes("Housing")) {
    if (hour >= 18 && hour < 23) return "Busy";
    if (hour >= 23 || hour < 8) return "Open";
    return "Filling Up";
  }

  if (place.permit === "Student") {
    if (!isWeekend && hour >= 9 && hour < 13) return "Packed";
    if (!isWeekend && hour >= 13 && hour < 16) return "Busy";
    if (!isWeekend && hour >= 7 && hour < 9) return "Filling Up";
    return "Open";
  }

  if (place.permit === "Mixed") {
    if (!isWeekend && hour >= 10 && hour < 14) return "Busy";
    if (!isWeekend && hour >= 14 && hour < 17) return "Filling Up";
    return "Open";
  }

  return "Open";
}

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  await google.maps.importLibrary("marker");

  const csunCenter = { lat: 34.2415, lng: -118.5295 };
  infoWindow = new google.maps.InfoWindow();

  map = new Map(document.getElementById("map"), {
    center: csunCenter,
    zoom: 16,
    mapId: "DEMO_MAP_ID",
    gestureHandling: "greedy"
  });

  foodMarkers = createMarkers(locations.food, "#FFC107");
  parkingMarkers = createMarkers(locations.parking, "#2196F3");
  buildingMarkers = createMarkers(locations.buildings, "#4CAF50");

  document.getElementById("food-btn").addEventListener("click", () => {
    toggleLayer(foodMarkers, "food-btn");
  });

  document.getElementById("parking-btn").addEventListener("click", () => {
    toggleLayer(parkingMarkers, "parking-btn");
  });

  document.getElementById("buildings-btn").addEventListener("click", () => {
    toggleLayer(buildingMarkers, "buildings-btn");
  });

  toggleLayer(foodMarkers, "food-btn");
}

function createMarkers(places, color) {
  const markers = [];

  for (const place of places) {
    const pin = new google.maps.marker.PinElement({
      background: color,
      borderColor: "#000",
      glyphColor: "#000"
    });

    const marker = new google.maps.marker.AdvancedMarkerElement({
      position: place.position,
      title: place.title,
      content: pin.element
    });

    marker.addListener("click", () => {
      const isParking = color === "#2196F3";
      const loc = place.place ? `📍 ${place.place}` : "";
      const hrs = place.hours
        ? `<div class="popup-meta"><strong>Hours:</strong> ${place.hours}</div>`
        : "";

      const desc = place.description
        ? `<div class="popup-note">${place.description}</div>`
        : "";

      const status = isParking ? getParkingStatus(place) : null;

      let statusClass = "";
      if (status === "Open") statusClass = "status-open";
      else if (status === "Filling Up") statusClass = "status-filling";
      else if (status === "Busy") statusClass = "status-busy";
      else if (status === "Packed") statusClass = "status-packed";
      else if (status === "Limited") statusClass = "status-limited";

      const permit = place.permit
        ? `<div class="popup-meta"><strong>Permit:</strong> ${place.permit}</div>`
        : "";

      const note = place.note
        ? `<div class="popup-note">${place.note}</div>`
        : "";

      const image = place.image
        ? `<img src="${place.image}" alt="${place.title}" class="popup-image">`
        : "";

      const statusHTML = status
        ? `<div class="popup-status ${statusClass}">${status}</div>`
        : "";

      const html = `
        <div class="map-popup">
          ${image}
          <div class="popup-title">${place.title || ""}</div>
          ${statusHTML}
          ${permit}
          ${loc ? `<div class="popup-meta">${loc}</div>` : ""}
          ${desc}
          ${note}
          ${hrs}
        </div>
      `;

      infoWindow.setContent(html);
      infoWindow.open({
        anchor: marker,
        map
      });
    });

    markers.push(marker);
  }

  return markers;
}

function toggleLayer(markers, buttonId) {
  const allMarkers = [foodMarkers, parkingMarkers, buildingMarkers];
  const allButtons = document.querySelectorAll("#controls .button");

  allMarkers.forEach(markerArray => {
    markerArray.forEach(marker => {
      marker.map = null;
    });
  });

  allButtons.forEach(button => {
    button.classList.remove("primary");
  });

  markers.forEach(marker => {
    marker.map = map;
  });

  document.getElementById(buttonId).classList.add("primary");
}

initMap();
