let map

function initMap() {

    map = new google.maps.Map(
        document.querySelector('#restaurants-map'),
        { zoom: 10, center: { lat: 40.392499, lng: -3.698214 } }
    )

    getDirections()
}


function getDirections() {

    axios
        .get('/api/restaurants')
        .then(response => pinRestaurants(response.data))
        .catch(err => console.log(err))
}


function pinRestaurants(restaurants) {

    restaurants.forEach(elm => {
        let position = { lat: elm.location.coordinates[0], lng: elm.location.coordinates[1] }
        new google.maps.Marker({ position, title: elm.title, map })
    })
}