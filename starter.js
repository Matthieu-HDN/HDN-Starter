jQuery(function($){

// ACTION-BAR

$('.logo').after('<div id="Action_bar"><div class="column"><span class="action-left action_details">24h/24 & 7jours/7</span><span class="action-center action_tel"><a href="tel:0607720330"><i class="icon-phone"></i> 06 07 72 03 30</a></span><span class="action-right action-link"><a href="/contact/" class="my-btn top-btn">RÉSERVER UN TAXI </a></span></div></div>');


    
// SLIDE TO ANCHOR

$(function() {
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname == this.hostname
            && this.pathname.replace(/^\//,"") == location.pathname.replace(/^\//,"")
        ) {
            var anchor = $(this.hash);
            anchor = anchor.length ? anchor : $("[name=" + this.hash.slice(1) +"]");
            if ( anchor.length ) {
                $("html, body").animate( { scrollTop: anchor.offset().top }, 1500);
            }
        }
    });
});



 $(document).ready(function() {

$('#btn-facebook').click(function() {
    windowObjectReference = window.open("https://www.facebook.com/Colivreur-France-109232730647741/") ;
    });

$('#btn-twitter').click(function() {
   windowObjectReference = window.open( "https://twitter.com/ColivNicolas") ;
});

$('#btn-instagram').click(function() {
   windowObjectReference = window.open( "https://www.instagram.com/colivreur_fr/");
});

$('#btn-tel').click(function() {
   window.location = "tel:0616692778";
});

$('#btn-mail').click(function() {
   window.location.href = "mailto:contact@colivreur.com" ;
});

 });
});
