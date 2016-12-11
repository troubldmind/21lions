$(document).ready(function(){document.title='Gridiron Kings';if($('.nav.pull-right li a:contains("Register")').length>0){if(document.URL.toLowerCase().indexOf("daddyleagues.com/gik/coaches")>=0){$('.data-table1').remove();}}
$('.maincontent').addClass('clearfix');


jQuery({ Counter: 0 }).animate({ Counter: $('.Single').text() }, {
  duration: 6000,
  step: function () {
    $('.Single').text(Math.ceil(this.Counter));
  }
});


$('.Count').each(function () {
  jQuery({ Counter: 0 }).animate({ Counter: $(this).text() }, {
    duration: 7000,
    step: function () {
      $(this).text(Math.ceil(this.Counter));
    }
  });
});

jQuery({ Counter: 0 }).animate({ Counter: $('.test').text() }, {
  duration: 10000,
  step: function () {
    $('.test').text(Math.ceil(this.Counter));
  }
});


$('.Count').each(function () {
  jQuery({ Counter: 0 }).animate({ Counter: $(this).text() }, {
    duration: 8000,
    step: function () {
      $(this).text(Math.ceil(this.Counter));
    }
  });
});



$(document).ready(function() {
	 
	$('.acc-btn').click(function() {
	 	$('.acc-content').slideUp('normal');
      if($(this).next().is(':hidden') == true) {
		  	$(this).next().slideDown('normal');
  		 } 
	 });
	 $('.acc-content').hide();

});




(function($) {
	$.fn.dropdown = function(opts) {
		// default configuration
		var config = $.extend({}, { 
            fadeInTime: 1100,
            fadeOutTime: 1100,
            interval: 8600
        }, opts);
		// main function
		function init(obj) {
            var dNewsticker = obj;
            var dFrame = dNewsticker.find('.js-frame');
            var dItem = dFrame.find('.js-item');
            var dCurrent;
            var stop = false;

            dItem.eq(0).addClass('current');
            dItem.eq(0).show();
            
            var move = setInterval(function(){
                if(!stop){
                    dCurrent = dFrame.find('.current');
                    dCurrent.fadeOut(config.fadeOutTime, function(){
                        if(dCurrent.next().length !== 0){
                            dCurrent.removeClass('current');
                            dCurrent.next().addClass('current');
                            dCurrent.next().fadeIn(config.fadeInTime);
                        }
                        else{
                            dCurrent.removeClass('current');
                            dItem.eq(0).addClass('current');
                            dItem.eq(0).fadeIn(config.fadeInTime);
                        }
                    });
                }
            }, config.interval);
            
            dNewsticker.on('mouseover mouseout', function(e){
                if(e.type == 'mouseover'){
                    stop = true;
                }
                else{
                    stop = false;
                }
            });
        }
		// initialize every element
		this.each(function() {
			init($(this));
		});
		return this;
	};
	// start
	$(function() {
		$('.js-newsticker').dropdown();
	});
})(jQuery);


$("#slideshow > div:gt(0)").hide();setInterval(function() {
$('#slideshow > div:first')
.fadeOut(3000)
.next()
.fadeIn(2500)
.end()
.appendTo('#slideshow');
}, 19000);



function tickOut(){
        $('#ticker li:first').animate({'opacity':0}, 1000, function () {
            //$(this).hide()
            $(this).appendTo($('#ticker'))
            $('#ticker li:first').hide()
            $('#ticker li:first').fadeIn(1000)
              $('#ticker li:not(:first)').css('opacity', '3')
        });
    }

setInterval(function(){ tickOut () }, 7500);




;$('.standings .data-table1 tbody td:nth-child(5n)').remove();
$( ".tabs" ).tabs();});
