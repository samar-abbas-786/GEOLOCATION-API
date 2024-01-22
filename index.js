const successCallback = (position) => {
  console.log(position);
};

const errorCallback = (error) => {
  console.log(error);
};

function getLocation() {
  alert("We got Your Location!! Thanks/!!");
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

// function getLocation() {
//   const id = navigator.geolocation.watchPosition(
//     successCallback,
//     errorCallback
//   );
//   const options = {
//     enableHighAccuracy: true,
//     timeout: 10000,
//   };
// }
