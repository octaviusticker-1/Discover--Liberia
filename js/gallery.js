// =========================================
// DISCOVER LIBERIA
// Gallery
// =========================================

"use strict";

// =========================================
// GALLERY FILTERS
// =========================================

const filterButtons = document.querySelectorAll(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        // Remove active state
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Activate clicked button
        button.classList.add("active");

        // Show / hide gallery items
        galleryItems.forEach((item) => {

            const category = item.dataset.category;

            if (filter === "all" || category === filter) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }

        });

    });

});


// =========================================
// GALLERY LIGHTBOX
// =========================================

const lightbox =
    document.getElementById("galleryLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxCaption =
    document.getElementById("lightboxCaption");

const lightboxClose =
    document.getElementById("lightboxClose");

const lightboxPrev =
    document.getElementById("lightboxPrev");

const lightboxNext =
    document.getElementById("lightboxNext");

let currentImage = 0;


// =========================================
// GET VISIBLE IMAGES
// =========================================

function getVisibleItems() {

    return Array.from(galleryItems)
        .filter((item) => {
            return item.style.display !== "none";
        });

}


// =========================================
// SHOW IMAGE
// =========================================

function showImage(index) {

    const visibleItems =
        getVisibleItems();

    if (!visibleItems.length) {
        return;
    }

    if (index < 0) {
        index = visibleItems.length - 1;
    }

    if (index >= visibleItems.length) {
        index = 0;
    }

    currentImage = index;

    const item =
        visibleItems[currentImage];

    const image =
        item.querySelector("img");

    const title =
        item.querySelector("h3");

    if (!image) {
        return;
    }

    lightboxImage.src =
        image.src;

    lightboxImage.alt =
        image.alt;

    lightboxCaption.textContent =
        title
            ? title.textContent
            : image.alt;

}


// =========================================
// OPEN LIGHTBOX
// =========================================

galleryItems.forEach((item) => {

    item.addEventListener("click", () => {

        const visibleItems =
            getVisibleItems();

        const index =
            visibleItems.indexOf(item);

        showImage(index);

        lightbox.classList.add("show");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );

    });

});


// =========================================
// NEXT IMAGE
// =========================================

lightboxNext.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        showImage(currentImage + 1);

    }
);


// =========================================
// PREVIOUS IMAGE
// =========================================

lightboxPrev.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        showImage(currentImage - 1);

    }
);


// =========================================
// CLOSE LIGHTBOX
// =========================================

function closeLightbox() {

    lightbox.classList.remove("show");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    lightboxImage.src = "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


// =========================================
// CLICK OUTSIDE TO CLOSE
// =========================================

lightbox.addEventListener(
    "click",
    (event) => {

        if (event.target === lightbox) {

            closeLightbox();

        }

    }
);


// =========================================
// KEYBOARD CONTROLS
// =========================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !lightbox.classList.contains("show")
        ) {
            return;
        }

        if (event.key === "Escape") {

            closeLightbox();

        }

        if (event.key === "ArrowRight") {

            showImage(currentImage + 1);

        }

        if (event.key === "ArrowLeft") {

            showImage(currentImage - 1);

        }

    }
);


// =========================================
// CLOSE LIGHTBOX
// =========================================

function closeLightbox() {

    lightbox.classList.remove("show");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    lightboxImage.src = "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


// Click outside image to close

lightbox.addEventListener(
    "click",
    (event) => {

        if (event.target === lightbox) {
            closeLightbox();
        }

    }
);


// =========================================
// ESCAPE KEY
// =========================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            lightbox.classList.contains("show")
        ) {

            closeLightbox();

        }

    }
);

// =========================================
// FOOTER YEAR
// =========================================

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}