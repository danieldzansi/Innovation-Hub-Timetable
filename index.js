const meetLink = "https://meet.google.com/bsc-mtzz-ttf";

// Function to show alerts
function showAlert(message) {
    alert(message);
}

// Function to simulate class notifications
function checkClassTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    if ((hour === 8 && minute === 55) || (hour === 10 && minute === 55)) {
        showAlert("Your class is starting in 5 minutes! Join here: " + meetLink);
    }
}

// Check every minute
setInterval(checkClassTime, 60000);

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    // Here you would typically send this data to a server
    console.log("Registered:", name, email);
    showAlert("Thank you for registering! You will now receive notifications.");
});