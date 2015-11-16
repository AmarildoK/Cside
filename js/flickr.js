//var
var height;
var width;

//var id of photoalbum
var id = getUrlParameter('id');

//get album pic
var getAlbum = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+apiKey+"&extras=geo,url_o&photoset_id="+id+"&media=photos&format=json&jsoncallback=?";

//get all pic from album
$.getJSON(getAlbum ,  function(data){

   //change description on hardcover(first page)
   getAlbumDescription(id);

   $('#flipbook').append("<div id=\"cover\" class=\"hard\"><h1>"+data.photoset.title+"</h1><div id=\"cover_omschrijving\"><span></span></div></div>");

   $.each(data.photoset.photo,function (k, set){
     $('#flipbook').append("<div class=\"page\"><img src="+ set.url_o +" alt="+set.title._content+"/></div>");
      //$('#flipbook').append('<div style="background: url("+set.url_o+");"></div>');
   });

   $('#flipbook').append("<div id=\"cover\"><h1>The end</h1></div></div>");
   resize();

   //set flipbook
   $("#flipbook").turn({
      width: width,
      height: height,
      gradients: true,
      autoCenter :true,
      display: 'double'

   });

});


//Move page on keydown left arrow & right arrow
$(window).bind('keydown', function(e){
   if (e.keyCode==37)
      $('#flipbook').turn('previous');
   else if (e.keyCode==39)
      $('#flipbook').turn('next');

});

//get width and height --> responsive
$(window).on('resize',function(){
   resize();
   $('#flipbook').turn("size",width,height);
   if($("#flipbook").width()>500){
      $("#flipbook").turn("display", "double");
   }else{
      $("#flipbook").turn("display", "single");
   }
});


//close book with small animation & return to map view
$("#closeButton").on('click',function(){
   $("#flipbook").slideUp("slow",function(){
      window.location.replace("index.html");
   });
   //Uncaught zoom is an invalid value --> error that i get when trying this
   //$('#flipbook').turn('zoom',0.5);
});



