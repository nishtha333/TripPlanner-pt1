const mapboxgl = require("mapbox-gl");

const iconURLs = {
    Hotel: "http://i.imgur.com/D9574Cu.png",
    Restaurant: "http://i.imgur.com/cqR6pUI.png",
    Activity: "http://i.imgur.com/WbMOfMl.png"
};

const createMarker = (type, coordinates) => {

    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;

    return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
}

module.exports = createMarker;
