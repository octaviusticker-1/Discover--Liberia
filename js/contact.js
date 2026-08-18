"use strict";

// =========================================
// CONTACT FORM
// =========================================

const contactForm =
    document.getElementById("contactForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const subjectInput =
    document.getElementById("subject");

const messageInput =
    document.getElementById("message");

const formSuccess =
    document.getElementById("formSuccess");


// =========================================
// VALIDATION
// =========================================

function showError(input, message) {

    const error =
        document.getElementById(
            `${input.id}Error`
        );

    error.textContent = message;

    input.classList.add("input-error");
}


function clearError(input) {

    const error =
        document.getElementById(
            `${input.id}Error`
        );

    error.textContent = "";

    input.classList.remove("input-error");
}


// =========================================
// EMAIL CHECK
// =========================================

function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        .test(email);

}


// =========================================
// FORM SUBMIT
// =========================================

contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        let valid = true;

        formSuccess.textContent = "";


        // Name

        if (nameInput.value.trim() === "") {

            showError(
                nameInput,
                "Please enter your name."
            );

            valid = false;

        } else {

            clearError(nameInput);

        }


        // Email

        if (emailInput.value.trim() === "") {

            showError(
                emailInput,
                "Please enter your email."
            );

            valid = false;

        } else if (
            !isValidEmail(emailInput.value.trim())
        ) {

            showError(
                emailInput,
                "Please enter a valid email address."
            );

            valid = false;

        } else {

            clearError(emailInput);

        }


        // Subject

        if (subjectInput.value.trim() === "") {

            showError(
                subjectInput,
                "Please enter a subject."
            );

            valid = false;

        } else {

            clearError(subjectInput);

        }


        // Message

        if (messageInput.value.trim() === "") {

            showError(
                messageInput,
                "Please enter a message."
            );

            valid = false;

        } else {

            clearError(messageInput);

        }


        // Success

        if (valid) {

            formSuccess.textContent =
                "Your message has been prepared successfully. " +
                "Email sending will be connected in the next step.";

            contactForm.reset();

        }

    }
);


// =========================================
// CLEAR ERRORS WHILE TYPING
// =========================================

[
    nameInput,
    emailInput,
    subjectInput,
    messageInput
].forEach((input) => {

    input.addEventListener(
        "input",
        () => clearError(input)
    );

});


// =========================================
// CURRENT YEAR
// =========================================

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}