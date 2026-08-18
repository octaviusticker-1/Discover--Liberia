// =========================================
// DISCOVER LIBERIA
// Destination Details
// =========================================

"use strict";

// ---------- DESTINATION DATA ----------
const destinations = {

    monrovia: {
        name: "Monrovia",
        location: "Montserrado County, Liberia",
        category: "City",
        type: "City",
        region: "Montserrado County",
        image: "../Assets/image/destinations/monrovia.jpg",
        map: "monrovia,liberia",
        overview: "Discover Liberia's capital, coastline, landmarks, markets, and vibrant city life.",
        why: "Monrovia offers visitors an opportunity to experience Liberia's history, culture, coastline, and everyday city life.",
        highlights: [
            "Explore the city center",
            "Visit Liberia's historic landmarks",
            "Enjoy the Atlantic coastline",
            "Experience local markets and culture"
        ]
    },


    robertsport: {
        name: "Robertsport",
        location: "Grand Cape Mount County, Liberia",
        category: "Beach",
        type: "Beach",
        region: "Grand Cape Mount County",
        image: "../Assets/image/destinations/robertsport.jpg",
        map: "robertsport,liberia",
        overview: "Explore beautiful beaches, surfing spots, coastal scenery, and the natural beauty of Robertsport.",
        why: "Robertsport is a great destination for visitors who want to enjoy Liberia's coastline, beaches, surfing, and relaxed atmosphere.",
        highlights: [
            "Enjoy the beautiful beaches",
            "Experience the surfing environment",
            "Explore the coastal scenery",
            "Discover local communities"
        ]
    },


    buchanan: {
        name: "Buchanan",
        location: "Grand Bassa County, Liberia",
        category: "Beach",
        type: "Beach",
        region: "Grand Bassa County",
        image: "../Assets/image/destinations/buchanan.jpg",
        map: "buchanan,liberia",
        overview: "Enjoy Buchanan's beautiful coastline, beaches, and relaxing atmosphere.",
        why: "Buchanan offers a peaceful coastal experience with beaches, ocean views, and local community life.",
        highlights: [
            "Relax on the beach",
            "Explore the coastline",
            "Enjoy ocean views",
            "Experience local communities"
        ]
    },


    "mount-nimba": {
        name: "Mount Nimba",
        location: "Nimba County, Liberia",
        category: "Nature",
        type: "Mountain",
        region: "Nimba County",
        image: "../Assets/image/destinations/mount-nimba.jpg",
        map: "mount-nimba,liberia",
        overview: "Discover the spectacular landscapes and biodiversity around Mount Nimba.",
        why: "Mount Nimba is an outstanding destination for visitors interested in mountains, forests, wildlife, and Liberia's natural environment.",
        highlights: [
            "Explore mountain landscapes",
            "Discover forest environments",
            "Experience Liberia's biodiversity",
            "Enjoy scenic views"
        ]
    },


    gbarnga: {
        name: "Gbarnga",
        location: "Bong County, Liberia",
        category: "City",
        type: "City",
        region: "Bong County",
        image: "../Assets/image/destinations/gbarnga.jpg",
        map: "gbarnga,liberia",
        overview: "Explore Gbarnga, a major city and cultural center in central Liberia.",
        why: "Gbarnga gives visitors an opportunity to experience central Liberia, local culture, communities, and surrounding landscapes.",
        highlights: [
            "Explore the city",
            "Experience local culture",
            "Discover central Liberia",
            "Visit surrounding communities"
        ]
    },


    "providence-island": {
        name: "Providence Island",
        location: "Monrovia, Liberia",
        category: "History",
        type: "Historical Site",
        region: "Montserrado County",
        image: "../Assets/image/destinations/providence  island.jpg",
        map: "providence  island,liberia",
        overview: "Visit one of Liberia's important historical landmarks in the heart of Monrovia.",
        why: "Providence Island provides visitors with an opportunity to learn about an important part of Liberia's history.",
        highlights: [
            "Explore the historic site",
            "Learn about Liberia's history",
            "Enjoy views around the area",
            "Discover Monrovia's historical heritage"
        ]
    }

};

// ---------- GET DESTINATION FROM URL ----------

const params = new URLSearchParams(window.location.search);

const place = params.get("place") || "monrovia";

const destination = destinations[place];


// ---------- PAGE ELEMENTS ----------

const heroImage =
    document.getElementById("destinationHeroImage");

const category =
    document.getElementById("destinationCategory");

const nameElement =
    document.getElementById("destinationName");

const locationElement =
    document.getElementById("destinationLocation");

const title =
    document.getElementById("destinationTitle");

const overview =
    document.getElementById("destinationOverview");

const why =
    document.getElementById("destinationWhy");

const highlights =
    document.getElementById("destinationHighlights");

const infoLocation =
    document.getElementById("infoLocation");

const infoType =
    document.getElementById("infoType");

const infoRegion =
    document.getElementById("infoRegion");

    const destinationMap =
    document.getElementById("destinationMap");


// ---------- LOAD DESTINATION ----------

if (destination) {

    // Browser tab title
    document.title =
        `${destination.name} | Discover Liberia`;


    // Category
    if (category) {
        category.textContent =
            destination.category;
    }


    // Destination name
    if (nameElement) {
        nameElement.textContent =
            destination.name;
    }


    // Location
    if (locationElement) {
        locationElement.textContent =
            destination.location;
    }


    // Page title
    if (title) {
        title.textContent =
            `Explore ${destination.name}`;
    }


    // Overview
    if (overview) {
        overview.textContent =
            destination.overview;
    }


    // Why visit
    if (why) {
        why.textContent =
            destination.why;
    }


    // Information section
    if (infoLocation) {
        infoLocation.textContent =
            destination.location;
    }

    if (infoType) {
        infoType.textContent =
            destination.type;
    }

    if (infoRegion) {
        infoRegion.textContent =
            destination.region;
    }

    if (destinationMap && destination.map) {

    destinationMap.src =
        `https://www.google.com/maps?q=${encodeURIComponent(destination.map)}&output=embed`;

}



    // Highlights
    if (highlights) {

        highlights.innerHTML = "";

        destination.highlights.forEach((item) => {

            const li =
                document.createElement("li");

            li.textContent =
                `✓ ${item}`;

            highlights.appendChild(li);

        });
    }


    // Hero image
    // We will connect the real destination
    // images later when the image paths are ready.

    if (heroImage && destination.image) {

        heroImage.src =
            destination.image;

        heroImage.alt =
            destination.name;
    }

}


// ---------- INVALID DESTINATION ----------

else {

    if (nameElement) {
        nameElement.textContent =
            "Destination not found";
    }

    if (locationElement) {
        locationElement.textContent =
            "Please return to the destinations page.";
    }

}