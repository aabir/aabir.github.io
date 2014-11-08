/* Place holder */
/*jQuery('input,textarea').focus(function(){
   jQuery(this).data('placeholder',$(this).attr('placeholder'))
   jQuery(this).attr('placeholder','');
});
jQuery('input,textarea').blur(function(){
   jQuery(this).attr('placeholder',$(this).data('placeholder'));
});	
/* Place holder end */

$(function(){
	$(window).load(function(){
		$('.spinner').fadeOut(500);
		$('#body').css('display', 'block');
	});
});

/* NAV */
$(function(){
	$("#nav").on("click", function(e){
		e.PreventDefault;
		var nav = $("#show");
		var status = nav.css("display");
		
		//console.log(status);
		if(status == "none"){
			nav.show(500);
		} else {
			nav.hide(500);
		}
	});
});

/* Animation Init */
$(function(){
	new WOW().init();
});

/* Menu Scroll */
$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});


/* Menu Toggle */

$('#nav-toggle').on('click', function(){
	$(this).toggleClass('active');
});

$(".clicked").on('click', function(){
	$("#nav-toggle").removeClass("active");
});


/* Parallax */
jQuery(document).ready(function(){
	// Cache the Window object
	$window = jQuery(window);
                
   jQuery('.fullscreen[data-type="background"]').each(function(){
     var $bgobj = jQuery(this); // assigning the object
                    
      jQuery(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';

		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		
		}); 
	});
});  // window scroll Ends


/* Circle Text */
$(function(){
	$(".small-circle").on("mouseenter", function(){
		var id = $(this).attr('id');	
		var textDiv = $(".skill-text");
		textDiv.empty();
		
		if(id == "html"){	
			textDiv.text("I love to discover the power and beauty of HTML5");	
		} else if(id == "css"){
			textDiv.text(" RWD, Bootstrap, Foundation CSS framework and SASS Preprocessor ");		
		} else if(id == "js"){
			textDiv.text(" JavaScript with JQUERY ");		
		} else if(id == "php"){
			textDiv.text(" PHP with CodeIgniter, CakePHP and Laravel framework ");		
		} else if(id == "mysql"){
			textDiv.text(" MySQL for backend memory ");	
		} else if(id == "wp"){
			textDiv.text(" WordPress custom theme development, custom post type, meta box and theme options with an insightful and authentic way. ");		
		}
		
	});
});

/*PopUP*/
$(document).ready(function() {
	$('.grid').magnificPopup({
		delegate: 'a',
		type: 'inline',
		tLoading: 'Loading portfolio #%curr%...',
		gallery: {
			enabled: true,
		}
	});
});

/* Contact Form */

$(function(){
		
	var form = $('#contact-form');
	var loading = $(".loading");
	
	form.parsley({ errorClass: 'parsley-error' });
		
	form.on('submit', function(e){
		e.preventDefault();
		
		if(form.parsley("isValid") == true){
			
			data = form.serialize();
			
			loading.css("display", "block");					
			
			$.ajax({
				url: "contact_processor.php",
				type: "POST",
				dataType: "json",
				data: data,
				success: function(rt){
					if(rt && rt.success == true) {
						$("#form-success").html(" <p>Thank you for your submission.</p> ");
						form[0].reset();
					} else if(rt && rt.success == false) {
						//showResponse(1);
						loading.css("display", "none");	
					}
				}
			});			
		}
	})
});

/* Text Fadeout */

jQuery(function($) {
    var divs = $('.fade');
    $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        divs.css({ 
            //'margin-top' : -(st/3)+"px", 
            'opacity' : 1 - st/300
        }); 
    });
});


/* Page Visibility Effect */ 
 $(function() {
	$(document).on({
		'show.visibility': function() {
			$("#first").addClass("fadeOut");
		}/*,
		'hide.visibility': function() {
			$("#first").removeClass("fadeOut");
		}*/
	});
});
	