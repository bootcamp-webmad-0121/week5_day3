
function initMap() {

    const myMap = new google.maps.Map(
        document.querySelector('#map'),
        { zoom: 10, center: directions.ironhackBCN.coords, styles: mapStyles.retro }
    )

    new google.maps.Marker({
        position: directions.ironhackBCN.coords,
        title: directions.ironhackBCN.title,
        map: myMap
    })
}