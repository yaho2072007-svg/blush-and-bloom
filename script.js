// Contact Form

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {

            alert("Please fill all the fields.");

        } else {

            alert("Thank you! Your message has been submitted.");

            form.reset();
        }

    });

}
// Product Details

const buttons = document.querySelectorAll(".view-btn");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const product = button.getAttribute("data-product");

        alert("You selected: " + product);

    });

});