


document.querySelectorAll('.H11').forEach(hotel => {
    hotel.addEventListener('click', function() {
        var lat = parseFloat(this.getAttribute('data-lat'));
        var lon = parseFloat(this.getAttribute('data-lon'));
        var name = this.getAttribute('data-name');
    

        if (!isNaN(lat) && !isNaN(lon)) {
            // Mover el mapa a la nueva ubicación
            map.setView([lat, lon], 15);
            var marker = L.marker([0, 0]).addTo(map)
           
            // Mover el marcador a la nueva ubicación y actualizar el popup
            marker.setLatLng([lat, lon]).bindPopup(name).openPopup();
        }
    });
});