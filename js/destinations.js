// =========================================
// DISCOVER LIBERIA
// Destination Filtering
// =========================================

"use strict";

const filterButtons =
    document.querySelectorAll(".filter-btn");

const destinationCards =
    document.querySelectorAll(".destination-card");


filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedCategory =
            button.dataset.filter;


        // Update active button

        filterButtons.forEach((item) => {
            item.classList.remove("active");
        });

        button.classList.add("active");


        // Filter destinations

        destinationCards.forEach((card) => {

            const cardCategory =
                card.dataset.category;


            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {

                card.classList.remove("is-hidden");

            } else {

                card.classList.add("is-hidden");

            }

        });

    });

});