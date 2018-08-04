const mapboxgl = require("mapbox-gl");
const createMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoibmlzaHRoYW1hbGhvdHJhIiwiYSI6ImNqa2Z1c29hNzBic2czeHM3NHI4Mml4N20ifQ.Y0TLm0RaTs9RixZC6kpyeQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = createMarker("Activity", [-74.009, 40.705]);
marker.addTo(map);

