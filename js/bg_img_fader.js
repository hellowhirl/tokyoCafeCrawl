$(document).ready(function(){

  var count = 0;
  var images = ["images/banner/seatsChairs.jpg","images/banner/counterTop2.jpg","images/banner/orderCounter.jpg","images/banner/wrappedSnacks.jpg"];
  var image = $(".fader");

  image.css("background-image","url("+images[count++]+")");

  setInterval(function(){
    image.fadeOut(300, function(){
      image.css("background-image","url("+images[count++]+")");
      image.fadeIn(300);
    });
    if(count == images.length)
    {
      count = 0;
    }
  },6000);

});