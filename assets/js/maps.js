function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: 52.1028275,
            lng: -7.6569345
        }
    });

    // The location of Modelligo Hives
  const markerOne = { lat: 52.146036, lng: -7.807280 };
  const markerA = new google.maps.Marker({
    position: markerOne,
    map: map,
    label: "M",
    title: "Modelligo Hives"
  });

    // The location of Cappagh Hives
  const markerTwo = { lat: 52.101602, lng: -7.749043 };
  const markerB = new google.maps.Marker({
    position: markerTwo,
    map: map,
    label: "C",
    title: "Cappagh Hives"
  });


   // The location of Modelligo Hives
  const markerThree = { lat: 52.111792, lng: -7.625117 };
  const markerC = new google.maps.Marker({
    position: markerThree,
    map: map,
    label: "D",
    title: "Dungarvan Hives"
  });

   // var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

function Redirect() {
    window.location = "honey.html";
};