



function startMap() {


    //Map options
    var mapOptions = {
        center: { lat: 42.213, lng: 19.436},
        zoom: 2
    };

    //draw map on canavas
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);


    $.getJSON(getAlbumList , {

    }).done(function(data){

        /// Place all markers
        $.each(data.photosets.photoset, function (i, set) {

            var getAlbum = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+apiKey+"&extras=geo,url_o&photoset_id="+set.id+"&media=photos&format=json&jsoncallback=?";

            //getAlbum
            $.getJSON(getAlbum,function(photos){

                //get first picture
                var getPic = photos.photoset.photo[0];

                //console.log(getPic);
                //get location maker
                var location=new google.maps.LatLng(getPic.latitude,getPic.longitude);

                //First pic album place on map
                var firstImage = {
                    url: getPic.url_o,//url
                    scaledSize: new google.maps.Size(65,43),//size is scaled from orig
                    origin: new google.maps.Point(0,0),//where image starts
                    anchor: new google.maps.Point(33,70)//achor point, the point that stands on location
                };
                //marker with custom image
                var marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    icon: firstImage
                });
                //place marker on map
                marker.setMap(map);


                //Make marker + options
                var marker=new google.maps.Marker({
                    position:location,
                    icon: "img/marker.png"
                });

                //place marker on map
                marker.setMap(map);

                //event listener on click to album --> go album page with album id
                google.maps.event.addListener(marker, 'click', function() {
                    window.location.href = "album.html?id="+set.id+""
                });

                //make infowindow
                var infowindow = new google.maps.InfoWindow({
                    content:set.title._content
                });

                //event listner when mouse is on marker --> show name of album
                google.maps.event.addListener(marker, 'mouseover', function() {
                    infowindow.open(map,marker);
                });

                //add listner when marker is left
                google.maps.event.addListener(marker, 'mouseout', function() {
                    infowindow.close();
                });





            });
        });
    });
}

google.maps.event.addDomListener(window, 'load', startMap);