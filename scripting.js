function checkVisible( elm, evalType ) {
    if(elm.length){
    evalType = evalType || "visible";

    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (evalType === "above") return ((y < (vpH + st)));
    if (evalType === "stricklyAbove") return ((y < (st - elementHeight)));
    }
    return(false)
}

function sendEmail(name, email, subject, body){
  if(grecaptcha.getResponse().length!=0){
document.getElementById("sendEmail").innerHTML = '<a style="display: none;" id="sendIt" href="mailto:wvaught3@gatech.edu?cc='+email+'&subject='+subject+' - '+name+'&body='+body+'">Send Email</a>';
document.getElementById("sendIt").click();
  }
}

$( document ).ready(function() {
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (!prefersDarkScheme.matches) {
    $("#timelineLine").addClass("timeline__progressbarLight");
    $("#mode").text("Dark Mode").addClass("btn-dark");
    $("#everything").removeClass("generic").addClass("lightGeneric");
    $("#navbar").removeClass("darkModeNavbar").addClass("lightModeNavbar");
    $("#footer").removeClass("darkModeNavbar").addClass("lightModeNavbar");
    $("#navbar").find(".nav-link").removeClass("text-light").addClass("text-dark");
    $("#navbar").find("svg").addClass("vectorLight");
    $("#container").find( ".mode").removeClass("mode").addClass("lightMode");
    $("#container").find( ".generic").removeClass("generic").addClass("lightGeneric");
    $("#container").find( ".btn-outline-light").removeClass("btn-outline-light").addClass("btn-outline-dark");
    $("#contactForm").find(".darkModeForm").removeClass("darkModeForm")
}else{
    $("#timelineLine").addClass("timeline__progressbarDark");
    $("#mode").text("Light Mode").addClass("btn-light");
    $("#everything").removeClass("generic").addClass("darkGeneric");
    $("#container").find( ".mode").removeClass("mode").addClass("darkMode");
    $("#container").find( ".generic").removeClass("generic").addClass("darkGeneric");
    $("#navbar").removeClass("lightModeNavbar").addClass("darkModeNavbar");
    $("#footer").removeClass("lightModeNavbar").addClass("darkModeNavbar");
    $("#navbar").find(".nav-link").removeClass("text-dark").addClass("text-light");
    $("#navbar").find("svg").addClass("vectorDark");
    $("#contactForm").find(".form-control").addClass("darkModeForm");
}

    $( window ).scroll(function() {
        if(checkVisible($('#timelineStart'), 'stricklyAbove')){
          //$("#mode").fadeOut("fast", function(){
          $( "#name" ).fadeIn( "slow");
          //});
        }else{
          $( "#name" ).fadeOut( "fast", function(){
          //$("#mode").fadeIn("fast");
          });
        }
});

$("#mode").click(function(){
  if($("#everything").hasClass("darkGeneric")){
    $("#timelineLine").removeClass("timeline__progressbarDark").addClass("timeline__progressbarLight");
    $("#mode").text("Dark Mode").removeClass("btn-light").addClass("btn-dark");
    $("#everything").toggleClass("darkGeneric");
    $("#everything").toggleClass("lightGeneric");
    $("#navbar").removeClass("darkModeNavbar").addClass("lightModeNavbar");
    $("#footer").removeClass("darkModeNavbar").addClass("lightModeNavbar");
    $("#navbar").find(".nav-link").removeClass("text-light").addClass("text-dark");
    $("#navbar").find("svg").removeClass("vectorDark").addClass("vectorLight");
    $("#container").find( ".darkMode").removeClass("darkMode").addClass("lightMode");
    $("#container").find( ".darkGeneric").removeClass("darkGeneric").addClass("lightGeneric");
    $("#container").find( ".btn-outline-light").removeClass("btn-outline-light").addClass("btn-outline-dark");
    $("#contactForm").find(".darkModeForm").removeClass("darkModeForm")
  }else{
    $("#timelineLine").removeClass("timeline__progressbarLight").addClass("timeline__progressbarDark");
    $("#mode").text("Light Mode").removeClass("btn-dark").addClass("btn-light");
    $("#everything").toggleClass("darkGeneric");
    $("#everything").toggleClass("lightGeneric");
    $("#navbar").removeClass("lightModeNavbar").addClass("darkModeNavbar");
    $("#footer").removeClass("lightModeNavbar").addClass("darkModeNavbar");
    $("#navbar").find(".nav-link").removeClass("text-dark").addClass("text-light");
    $("#navbar").find("svg").removeClass("vectorLight").addClass("vectorDark");
    $("#container").find( ".lightMode").removeClass("lightMode").addClass("darkMode");
    $("#container").find( ".lightGeneric").removeClass("lightGeneric").addClass("darkGeneric");
    $("#container").find( ".btn-outline-dark").removeClass("btn-outline-dark").addClass("btn-outline-light");
    $("#contactForm").find(".form-control").addClass("darkModeForm");
    }
});
        // if(checkVisible($('#timelineEnd'), 'above')){
        //   $("#timelineLine").fadeOut("slow");
        //     $( "#timeline" ).stop().fadeTo( 500, 0.0);
        // }else{
        //   $("#timelineLine").fadeIn("slow");
        //   $( "#timeline" ).stop().fadeTo( 300, 1);
        // }

    });