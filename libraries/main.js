				$('.events').bitshows({
					loader: false,
					artist: 'Westage',
		            range: 'upcoming',
		            date_format: 'dd.mm.yyyy',
		            tickets: true,
		            success: function() {
		            	for (var i = 0; i < 3; i++) {
		            	    var selector = '' + i;
		            	    if (selector.length == 1)
		            	        selector = '0' + selector;
		            	    selector = '#event' + selector;
			            	$('.showlist').prepend('<div class="event_info"><a href="' + $('.events li:first .event__tickets').attr('href') + '" title="Get details to the event" target="_blank">facebook Event</a></div>');
			            	$('.showlist').prepend('<div class="event_location">' + $('.events li:first .event__location').text() + '</div>');
			            	$('.showlist').prepend('<div class="event_venue">' + $('.events li:first .event__venue').text() + '</div>');
			            	$('.showlist').prepend('<div class="event_date">' + $('.events li:first .event__date').text() + '</div>');
			            	$('.events li:first').remove();		            	    
		            	}		            	
		            	$('#events_table').remove();
		            },
					error: function() {
						$('.showlist').html('<br> <p>No upcoming dates are announced at this point. <a href="#contact">Get in touch to book me!</a></p>');
					}
				});
				
				$(document).ready(function(){
					$('a[href^="#"]').on('click',function (e) {
					    e.preventDefault();

					    var target = this.hash;
					    var $target = $(target);

					    $('html, body').stop().animate({
					        'scrollTop': $target.offset().top
					    }, 900, 'swing', function () {
					        window.location.hash = target;
					    });
					});
				});