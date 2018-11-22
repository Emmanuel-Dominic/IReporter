//onclick order
function signup() {
   alert ("Successfully Registered!! You can Now Login");
}

//onclick Delete.
function Delete() {
  obj.style.backgroundColor="red";
  obj.innerHTML="Deleted";
}

//map function
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(0.342500,32.588889),
    zoom:10,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}