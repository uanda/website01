$(document).ready(function() {
   
    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#header', offset: 100});
    
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -55, 'axis':'y'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	}); 
     
    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */
    
    $('input, textarea').placeholder();         
    
    /* ======= Countdown ========= */
	// set the date we're counting down to
    var target_date = new Date("December 23, 2016").getTime();
     
    // variables for time units
    var days, hours, minutes, seconds;
     
    // get tag element
    var countdown =  document.getElementById("countdown-box");
    var days_span = document.createElement("SPAN");
    days_span.className = 'days';
    countdown.appendChild(days_span);
    var hours_span = document.createElement("SPAN");
    hours_span.className = 'hours';
    countdown.appendChild(hours_span);
    var minutes_span = document.createElement("SPAN");
    minutes_span.className = 'minutes';
    countdown.appendChild(minutes_span);
    var secs_span = document.createElement("SPAN");
    secs_span.className = 'secs';
    countdown.appendChild(secs_span);
     
    // update the tag with id "countdown" every 1 second
    setInterval(function () {
     
        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;
     
        // do some time calculations
        days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;
         
        hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;
         
        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);
         
        // format countdown string + set tag value.
        days_span.innerHTML = '<span class="number">' + days + '</span>' + '<span class="unit script">Days</span>';
        hours_span.innerHTML = '<span class="number">' + hours + '</span>' + '<span class="unit script">Hrs</span>';
        minutes_span.innerHTML = '<span class="number">' + minutes + '</span>' + '<span class="unit script">Mins</span>';
        secs_span.innerHTML = '<span class="number">' + seconds + '</span>' + '<span class="unit script">Secs</span>';
        
      
        //countdown.innerHTML = days + "d, " + hours + "h, "
       // + minutes + "m, " + seconds + "s";  
     
    }, 1000);
     

    /* ======= Google Map ======= */
    map = new GMaps({
        div: '#map',
        lat: 31.511575,
        lng: 74.345334,
        scrollwheel: false,
        zoom: 12,
    });
    //garison golf club
    map.addMarker({
        lat: 31.542527,
        lng: 74.395277,
        verticalAlign: 'top',
        title: 'Barat Location',  
        infoWindow: {
            content: '<div class="note">Ceremony</div><h4 class="map-title script">Garrison golf and country club lahore</h4><div class="address"><span class="region"></span><br><span class="postal-code"></span><br><span class="city-name"></span></div>'
        }
        
        
    });
    
    //askari 10
    map.addMarker({
        lat: 31.536059,
        lng: 74.414546,
        title: 'Reception Location',      
        infoWindow: {
            content: '<div class="note">Reception</div><h4 class="map-title script">Askari X marquee</h4><div class="address"><span class="region"></span><br><span class="postal-code"></span><br><span class="city-name"></span></div>'
        } 
        
    });
    //gourmet marquee
    map.addMarker({
        lat: 31.466600, 
        lng: 74.308814,
        title: 'Reception Location',
        infoWindow: {
            content: '<div class="note">Reception</div><h4 class="map-title script">Gourmet Broadway Marquee</h4><div class="address"><span class="region"></span><br><span class="postal-code"></span><br><span class="city-name"></span></div>'
        }

    });
    
    /*display marker 1 address on load */
    google.maps.event.trigger(map.markers[0], 'click');
    /*display marker 2 address on load */
    google.maps.event.trigger(map.markers[1], 'click');

    
    /* ===== Packery ===== */
    //Ref: http://packery.metafizzy.co/
    //Ref: http://imagesloaded.desandro.com/

    var $container = $('#photos-wrapper');
    
    // init
    $container.imagesLoaded(function () {
        $container.packery({
            itemSelector: '.item',
            percentPosition: true
        });
    });
    
    
    /* ======= RSVP Form (Dependent form field) ============ */
    $('#cguests').on("change", function(){
        
        if ($(this).val() == "") {
            $('.guestinfo-group').slideUp(); //hide
            console.log('not selected');
        } else if ($(this).val() == 'No Guests' ) {
            $('.guestinfo-group').slideUp(); //hide
            console.log('No guests');
            $('#cguestinfo').val('No Guests'); //Pass data to the field so mailer.php can send the form.
            
        } else {
            $('.guestinfo-group').slideDown(); //show
            $('#cguestinfo').val(''); //Clear data
            console.log('Has guests');
        }

       
    });
    
    /* ======= jQuery form validator ======= */ 
    /* Ref: http://jqueryvalidation.org/documentation/ */   
    $(".rsvp-form").validate({
		messages: {
		    name: {
    			required: 'Please enter your full name' //You can customise this message
			},
			email: {
				required: 'Please enter your email' //You can customise this message
			},
			events: {
				required: 'Are you attending?' //You can customise this message
			},
			guests: {
				required: 'How many guests?' //You can customise this message
			},
			guestinfo: {
				required: 'Please provide name(s)' //You can customise this message
			},
		}
	});
  

});