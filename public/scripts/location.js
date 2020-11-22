function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    //   console.log("No position")
    }
  }
  
function showPosition(position) {
     let positionCor = {
         "poslat" : position.coords.latitude,
         "poslang" : position.coords.longitude
     }
     socket.emit("pos" , positionCor)     
}