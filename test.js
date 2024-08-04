console.log("test.js file is loaded");

function getLocation() {
  console.log("getLocation function is called");
  const status = document.getElementById("status");
  const location = document.getElementById("location");

  if (navigator.geolocation) {
    status.textContent = "Locating...";
    console.log("Requesting location...");

    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    status.textContent = "Geolocation is not supported by your browser";
    console.log("Geolocation is not supported by your browser");
  }

  function success(position) {
    console.log("Geolocation success");
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    location.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
  }

  function error(err) {
    console.log("Geolocation error", err);
    status.textContent = "Unable to retrieve your location";
  }
}
