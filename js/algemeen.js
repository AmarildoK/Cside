var apiKey = "6c6fe642c14dc06386a4889464defdae";
var userId = "129404347@N04";

var getAlbumList = "https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key="+apiKey+"&user_id="+userId+"&format=json&jsoncallback=?";


//change text of div with id=#cover_omschrijving span
 function  getAlbumDescription(id) {
    $.getJSON(getAlbumList ,{

    }).success(function(data){
        $.grep(data.photosets.photoset, function (element, index) {
            if(element.id == id){
                $('#cover_omschrijving span').text(element.description._content);
            }
        });
    }).fail(function(){
        $('#cover_omschrijving span').text('No description found.');
    });
};




//get parmater by id --> some random user on the internet
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
//var getAlbumList = "https://api.flickr.com/services/rest/?method=flickr.photos.delete&api_key=6c6fe642c14dc06386a4889464defdae&photo_id=15447324783&api_sig=;
//een resize function changes width & height for responsiveness
var resize = function(){

    var orgWidth = 1920;
    var orgHeight = 1200;

    width = $(window).width()*0.75;
    height = orgHeight / orgWidth * width;


};