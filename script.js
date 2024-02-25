// Function to handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var sex = document.getElementById("sex").value;

    // Create registration object
    var registration = {
        name: name,
        email: email,
        password: password,
        age: age,
        sex: sex
    };

    // Retrieve existing registrations from local storage
    var registrations = JSON.parse(localStorage.getItem("registrations")) || [];

    // Add new registration to the array
    registrations.push(registration);

    // Store updated registrations in local storage
    localStorage.setItem("registrations", JSON.stringify(registrations));

    // Display registration information
    displayRegistrations(registrations);
});

// Function to display all registrations
function displayRegistrations(registrations) {
    var registrationInfo = document.getElementById("registrationInfo");
    registrationInfo.innerHTML = "<h2>All Registrations:</h2>";

    if (registrations.length === 0) {
        registrationInfo.innerHTML += "<p>No registrations yet.</p>";
    } else {
        registrations.forEach(function(registration, index) {
            registrationInfo.innerHTML += "<div class='registration'>" +
                "<p><strong>Name:</strong> " + registration.name + "</p>" +
                "<p><strong>Email:</strong> " + registration.email + "</p>" +
                "<p><strong>Password:</strong> " + registration.password + "</p>" +
                "<p><strong>Age:</strong> " + registration.age + "</p>" +
                "<p><strong>Sex:</strong> " + registration.sex + "</p>" +
                "</div>";
        });
    }
}

// Function to clear all registrations
document.getElementById("clearButton").addEventListener("click", function() {
    localStorage.removeItem("registrations");
    document.getElementById("registrationInfo").innerHTML = "<h2>All Registrations:</h2><p>No registrations yet.</p>";
});
// Initial display of registrations when the page loads
var initialRegistrations = JSON.parse(localStorage.getItem("registrations")) || [];
displayRegistrations(initialRegistrations);
