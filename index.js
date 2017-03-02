$(document).ready(function() {
  $("button").on("click", function() {
    console.log($("button"));

    $("ul").animate({
      width: ["toggle", "easeOutBounce"],
      height: ["toggle", "easeOutBounce"],
      opacity: "toggle"
   
    }, 1000, "linear", function() {
      
    });

  });

});