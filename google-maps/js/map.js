
// // Mapa básico

// function initMap() {

//     const myMap = new google.maps.Map(
//         document.querySelector('#map'),
//         { zoom: 10, center: directions.ironhackBCN.coords, styles: mapStyles.retro }
//     )

//     new google.maps.Marker({
//         position: directions.ironhackBCN.coords,
//         title: directions.ironhackBCN.title,
//         map: myMap
//     })
// }




// // Geolocalización

// function initMap() {

//     const map = new google.maps.Map(
//         document.querySelector('#map'),
//         { zoom: 15, center: directions.ironhackBCN.coords, styles: mapStyles.retro }
//     )

//     getUserPosition(map)
// }

// function getUserPosition(map) {

//     if (navigator.geolocation) {

//         // navigator.geolocation.getCurrentPosition(sucessFn, errorFn)
//         navigator.geolocation.getCurrentPosition(

//             position => {

//                 console.log('El objeto de posición es:', position)

//                 const center = {
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude
//                 }

//                 map.setCenter(center)

//                 new google.maps.Marker({ position: center, map, title: 'Estás aquí ahora' })
//             },
//             error => console.log('No se ha podido obtener la localización', error)
//         )
//     } else {
//         console.log("No dispones de módulo de geolocalización")
//     }
// }






// Routes

function initMap() {

    const map = new google.maps.Map(
        document.querySelector('#map'),
        { zoom: 15, center: directions.ironhackBCN.coords, styles: mapStyles.retro }
    )

    const routeDetails = {
        origin: directions.ironhackBCN.coords,
        destination: 'Fabrik Madrid',
        travelMode: 'DRIVING'
    }

    calculateRoute(routeDetails, map)
}


function calculateRoute(details, map) {
    const directionsService = new google.maps.DirectionsService
    directionsService.route(
        details,
        routeInfo => {
            console.log('Este es un servicio de ruta', routeInfo)
            printInfo(routeInfo)
            renderRoute(routeInfo, map)
        }
    )
}


function printInfo(info) {
    let text = ''
    info.routes[0].legs[0].steps.forEach(elm => text += `<li>${elm.instructions}</li>`)
    document.querySelector('#steps').innerHTML = text
}

function renderRoute(info, map) {
    const directionsDisplay = new google.maps.DirectionsRenderer
    directionsDisplay.setDirections(info)
    directionsDisplay.setMap(map)
}