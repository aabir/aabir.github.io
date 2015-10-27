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
		
		$('.load-after').delay(3000).animate({ // Wait to finish hello animation
			opacity: 1	
		}, 5000)
		/* Animation WOW */
		new WOW().init();
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
			textDiv.text(" WordPress custom theme development, custom post type, meta box, shortcode and theme options with an insightful and authentic way. ");		
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
            'opacity' : 1 - st/400
        }); 
    });
});

var animate = function(){
	$('#hello').lazylinepainter({
		"svgData": pathObj,
		"strokeWidth":2,
		"strokeColor": "#f5f5f5",
		"delay": 1500
	}).lazylinepainter('paint'); 
};

var pathObj = {
    "hello": {
        "strokepath": [
            {
                "path": "m 9.2460938,53 0,-44.3808594 5.8730472,0 0,18.2246094 23.068359,0 0,-18.2246094 5.873047,0 0,44.3808594 -5.873047,0 0,-20.918945 -23.068359,0 0,20.918945 z",
                "duration": 600
            },
            {
                "path": "m 75.181641,42.646484 5.630859,0.696289 c -0.888052,3.28972 -2.532907,5.842778 -4.93457,7.65918 -2.401717,1.816407 -5.469423,2.724609 -9.203125,2.724609 -4.702487,0 -8.431162,-1.448078 -11.186035,-4.344238 -2.754887,-2.896152 -4.132327,-6.957834 -4.132325,-12.185058 -2e-6,-5.408833 1.392575,-9.606746 4.177735,-12.59375 2.785147,-2.986948 6.397773,-4.480436 10.83789,-4.480469 4.298807,3.3e-5 7.810522,1.463247 10.535157,4.389648 2.724578,2.926458 4.086882,7.043642 4.086914,12.351563 -3.2e-5,0.322932 -0.01012,0.807307 -0.03027,1.453125 l -23.976562,0 c 0.201815,3.531912 1.200837,6.236336 2.99707,8.113281 1.796211,1.876958 4.036443,2.815434 6.720703,2.81543 1.998027,4e-6 3.703429,-0.524736 5.116211,-1.574219 1.412736,-1.049473 2.532852,-2.724601 3.360352,-5.025391 z m -17.891602,-8.80957 17.952148,0 c -0.242213,-2.704405 -0.92841,-4.732723 -2.058593,-6.084961 -1.7357,-2.098931 -3.986023,-3.148409 -6.750977,-3.148437 -2.502619,2.8e-5 -4.606621,0.837592 -6.312012,2.512695 -1.705413,1.675154 -2.648934,3.915386 -2.830566,6.720703 z",
                "duration": 1800
            },
            {
                "path": "m 87.563477,53 0,-44.3808594 5.449218,0 0,44.3808594 z",
                "duration": 600
            },
            {
                "path": "m 101.36816,53 0,-44.3808594 5.44922,0 0,44.3808594 z",
                "duration": 600
            },
            {
                "path": "m 113.26563,36.924805 c -1e-5,-5.953754 1.65494,-10.363581 4.96484,-13.229493 2.76496,-2.381478 6.1354,-3.572232 10.11133,-3.572265 4.4199,3.3e-5 8.03252,1.448111 10.83789,4.344238 2.80531,2.896185 4.20797,6.89732 4.20801,12.003418 -4e-5,4.137382 -0.62064,7.391774 -1.86182,9.763184 -1.24124,2.371423 -3.04755,4.213056 -5.41895,5.524902 -2.37144,1.311849 -4.95981,1.967773 -7.76513,1.967773 -4.50067,0 -8.13852,-1.443033 -10.91358,-4.329101 -2.77507,-2.886061 -4.1626,-7.043609 -4.16259,-12.472656 z m 5.60058,0 c -10e-6,4.117199 0.8981,7.200041 2.69434,9.248535 1.79621,2.048507 4.05662,3.072758 6.78125,3.072754 2.7044,4e-6 4.95473,-1.029292 6.75097,-3.087891 1.7962,-2.058585 2.69431,-5.196928 2.69434,-9.415039 -3e-5,-3.975891 -0.90318,-6.988095 -2.70947,-9.036621 -1.80634,-2.048475 -4.05162,-3.072726 -6.73584,-3.072754 -2.72463,2.8e-5 -4.98504,1.019233 -6.78125,3.057617 -1.79624,2.038435 -2.69435,5.116231 -2.69434,9.233399 z",
                "duration": 1800
            }
        ],
        "dimensions": {
            "width": 150,
            "height": 65
        }
    }
}; 


// Get Browser-Specifc Prefix
function getBrowserPrefix() {
   
  // Check for the unprefixed property.
  if ('hidden' in document) {
    return null;
  }
 
  // All the possible prefixes.
  var browserPrefixes = ['moz', 'ms', 'o', 'webkit'];
 
  for (var i = 0; i < browserPrefixes.length; i++) {
    var prefix = browserPrefixes[i] + 'Hidden';
    if (prefix in document) {
      return browserPrefixes[i];
    }
  }
 
  // The API is not supported in browser.
  return null;
}
 
// Get Browser Specific Hidden Property
function hiddenProperty(prefix) {
  if (prefix) {
    return prefix + 'Hidden';
  } else {
    return 'hidden';
  }
}
 
// Get Browser Specific Visibility State
function visibilityState(prefix) {
  if (prefix) {
    return prefix + 'VisibilityState';
  } else {
    return 'visibilityState';
  }
}
 
// Get Browser Specific Event
function visibilityEvent(prefix) {
  if (prefix) {
    return prefix + 'visibilitychange';
  } else {
    return 'visibilitychange';
  }
}

// Get Browser Prefix
var prefix = getBrowserPrefix();
var hidden = hiddenProperty(prefix);
var visibilityState = visibilityState(prefix);
var visibilityEvent = visibilityEvent(prefix);
 
document.addEventListener(visibilityEvent, function(event) {
  if (!document[hidden]) {
		$(function(){animate();})
  } 
});

function hello(){
	if (!document[hidden]) {
		$(function(){animate();})
	} 	
}