function checkVisible( elm, evalType ) {
    if(elm.length){
    evalType = evalType || "visible";

    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();

    if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (evalType === "above") return ((y < (vpH + st)));
    if (evalType === "stricklyAbove") return ((y < (st - elementHeight+5)));
    }
    return(false)
}

function sendEmail(name, email, subject, body){
  if(grecaptcha.getResponse().length!=0){
document.getElementById("sendEmail").innerHTML = '<a style="display: none;" id="sendIt" href="mailto:wvaught3@gatech.edu?cc='+email+'&subject='+subject+' - '+name+'&body='+body+'">Send Email</a>';
document.getElementById("sendIt").click();
  }
}

function darkMode(){
  if($("#everything").hasClass("darkGeneric")){
    $("#timelineLine").removeClass("timeline__progressbarDark").addClass("timeline__progressbarLight");
    $("#mode").text("Dark Mode").removeClass("btn-light").addClass("btn-dark");
    $("#moon").removeClass("fa-sun").addClass("fa-moon");
    $("hamburger").removeClass("darkMode").addClass("lightMode");
    $("#everything").toggleClass("darkGeneric");
    $("#everything").toggleClass("lightGeneric");
    $("#navbar").removeClass("darkModeNavbar").addClass("lightModeNavbar");
    $("#navbar2").removeClass("darkModeNavbar").addClass("lightModeNavbar");
    $("#footer").removeClass("darkModeNavbar").addClass("lightModeNavbar");
    $("#navbar").find(".nav-link").removeClass("text-light").addClass("text-dark");
    $("#navbar2").find(".nav-link").removeClass("text-light").addClass("text-dark");
    $("#container").find( ".darkMode").removeClass("darkMode").addClass("lightMode");
    $("#container").find( ".darkGeneric").removeClass("darkGeneric").addClass("lightGeneric");
    $("#container").find( ".btn-outline-light").removeClass("btn-outline-light").addClass("btn-outline-dark");
    $("#contactForm").find(".darkModeForm").removeClass("darkModeForm")
  }else{
    $("#timelineLine").removeClass("timeline__progressbarLight").addClass("timeline__progressbarDark");
    $("#mode").text("Light Mode").removeClass("btn-dark").addClass("btn-light");
    $("#moon").removeClass("fa-moon").addClass("fa-sun");
    $("hamburger").removeClass("lightMode").addClass("darkMode");
    $("#everything").toggleClass("darkGeneric");
    $("#everything").toggleClass("lightGeneric");
    $("#navbar").removeClass("lightModeNavbar").addClass("darkModeNavbar");
    $("#navbar2").removeClass("lightModeNavbar").addClass("darkModeNavbar");
    $("#footer").removeClass("lightModeNavbar").addClass("darkModeNavbar");
    $("#navbar").find(".nav-link").removeClass("text-dark").addClass("text-light");
    $("#navbar2").find(".nav-link").removeClass("text-dark").addClass("text-light");
    $("#container").find( ".lightMode").removeClass("lightMode").addClass("darkMode");
    $("#container").find( ".lightGeneric").removeClass("lightGeneric").addClass("darkGeneric");
    $("#container").find( ".btn-outline-dark").removeClass("btn-outline-dark").addClass("btn-outline-light");
    $("#contactForm").find(".form-control").addClass("darkModeForm");
    }
}
$( document ).ready(function() {
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches){
    $("#timelineLine").removeClass("timeline__progressbarLight").addClass("timeline__progressbarDark");
    $("#mode").text("Light Mode").removeClass("btn-dark").addClass("btn-light");
    $("#moon").removeClass("fa-moon").addClass("fa-sun");
    $("#everything").removeClass("lightGeneric").addClass("darkGeneric");
    $("#container").find( ".lightMode").removeClass("lightMode").addClass("darkMode");
    $("#container").find( ".lightGeneric").removeClass("lightGeneric").addClass("darkGeneric");
    $("#container").find( ".btn-outline-dark").removeClass("btn-outline-dark").addClass("btn-outline-light");
    $("#navbar").removeClass("lightModeNavbar").addClass("darkModeNavbar");
    $("#navbar2").removeClass("lightModeNavbar").addClass("darkModeNavbar");
    $("#footer").removeClass("lightModeNavbar").addClass("darkModeNavbar");
    $("#navbar").find(".nav-link").removeClass("text-dark").addClass("text-light");
    $("#navbar2").find(".nav-link").removeClass("text-dark").addClass("text-light");
    $("#contactForm").find(".form-control").addClass("darkModeForm");
}

    $( window ).scroll(function() {
        if(checkVisible($('#timelineStart'), 'stricklyAbove')){
          $( "#name" ).fadeIn( "slow");
          $( "#nameSmall" ).fadeIn( "slow");
        }else{
          $( "#name" ).fadeOut( "fast");
          $( "#nameSmall" ).fadeOut( "fast");
        }

        if(checkVisible($('#contact'), 'stricklyAbove')){
          $( "#homeLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#backLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#eduLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#skillLink").removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#expLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#passLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#conLink" ).addClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1homeLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1backLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1eduLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#1skillLink").removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1expLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#1passLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1conLink" ).addClass( "active fw-bold fs-5 pb-0 pt-1");
        }else if(checkVisible($('#passions'), 'stricklyAbove')){
          $( "#homeLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#backLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#eduLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#skillLink").removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#expLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#passLink" ).addClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#conLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1homeLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1backLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1eduLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#1skillLink").removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1expLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#1passLink" ).addClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1conLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
        }else if(checkVisible($('#experience'), 'stricklyAbove')){
          $( "#homeLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#backLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#eduLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#skillLink").removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#expLink" ).addClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#passLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#conLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1homeLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1backLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1eduLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#1skillLink").removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1expLink" ).addClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#1passLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1conLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
        }else if(checkVisible($('#skills'), 'stricklyAbove')){
          $( "#homeLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#backLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#eduLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#skillLink").addClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#expLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#passLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#conLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1homeLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1backLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1eduLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#1skillLink").addClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1expLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#1passLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1conLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
        }else if(checkVisible($('#education'), 'stricklyAbove')){
          $( "#homeLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#backLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#eduLink" ).addClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#skillLink").removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#expLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#passLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#conLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1homeLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1backLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1eduLink" ).addClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#1skillLink").removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1expLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#1passLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1conLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
        }else if(checkVisible($('#background'), 'stricklyAbove')){
          $( "#homeLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#backLink" ).addClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#eduLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#skillLink").removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#expLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#passLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#conLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1homeLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1backLink" ).addClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1eduLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#1skillLink").removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1expLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#1passLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1conLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
        }else{
          $( "#homeLink" ).addClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#backLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#eduLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#skillLink").removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#expLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#passLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#conLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1homeLink" ).addClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1backLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1eduLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#1skillLink").removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1expLink" ).removeClass("active fw-bold fs-5 pb-0 pt-1");
          $( "#1passLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
          $( "#1conLink" ).removeClass( "active fw-bold fs-5 pb-0 pt-1");
        }
});
    });