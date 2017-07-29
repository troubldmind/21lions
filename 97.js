/***scorelist***/
function scorelist(){
	
var scorelist= $("ol li:first-child");
  
$(scorelist).animate({height:0},400,     function scorelist(){
	$('ol').append(this);
	$(this).animate({height:68},400);
	});
}
setInterval(scorelist, 6000);


$('a>span:contains("ARI")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ari.png" width="35" height="25"" class="scoreboard">ARI</span>');
$('a>span:contains("ATL")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/atl.png" width="35" height="25"" class="scoreboard">ATL</span>');
$('a>span:contains("BAL")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/bal.png" width="35" height="25"" class="scoreboard"> BAL</span>');
$('a>span:contains("BUF")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/buf.png" width="35" height="25"" class="scoreboard"> BUF</span>');
$('a>span:contains("CAR")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/car.png" width="35" height="25"" class="scoreboard"> CAR</span>');
$('a>span:contains("CHI")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/chi.png" width="35" height="25"" class="scoreboard"> CHI</span>');
$('a>span:contains("CIN")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/cin.png" width="35" height="25"" class="scoreboard"> CIN</span>');
$('a >span:contains("CLE")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/cle.png" width="35" height="25""" class="scoreboard"> CLE</span>');
$('a>span:contains("DAL")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/dal.png" width="35" height="25"" class="scoreboard"> DAL</span>');
$('a>span:contains("DEN")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/den.png" width="35" height="25"" class="scoreboard"> DEN</span>');
$('a>span:contains("DET")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/det.png" width="35" height="25"" class="scoreboard"> DET</span>');
$('a>span:contains("GB")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/gb.png" width="35" height="25"" class="scoreboard"> GB</span>');
$('a>span:contains("HOU")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/hou.png" width="35" height="25"" class="scoreboard"> HOU</span>');
$('a>span:contains("IND")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ind.png" width="35" height="25"" class="scoreboard"> IND</span>');
$('a>span:contains("JAC")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/jac.png" width="35" height="25"" class="scoreboard"> JAC</span>');
$('a>span:contains("KC")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/kc.png" width="35" height="25"" class="scoreboard"> KC</span>');
$('a>span:contains("MIA")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/mia.png" width="35" height="25"" class="scoreboard"> MIA</span>');
$('a>span:contains("MIN")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/min.png" width="35" height="25"" class="scoreboard"> MIN</span>');
$('a>span:contains("NE")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ne.png"width="35" height="25"" class="scoreboard"> NE</span>');
$('a>span:contains("NO")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/no.png" width="35" height="25"" class="scoreboard"> NO</span>');
$('a>span:contains("NYG")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/nyg.png" width="35" height="25"" class="scoreboard"> NYG</span>');
$('a>span:contains("NYJ")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/nyj.png" width="35" height="25"" class="scoreboard"> NYJ</span>');
$('a>span:contains("OAK")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/oak.png" width="35" height="25"" class="scoreboard"> OAK</span>');
$('a>span:contains("PHI")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/phi.png" width="35" height="25"" class="scoreboard"> PHI</span>');
$('a>span:contains("PIT")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/pit.png" width="35" height="25"" class="scoreboard"> PIT</span>');
$('a>span:contains("SD")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/sd.png" width="35" height="25"" class="scoreboard"> SD</span>');
$('a>span:contains("SF")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/sf.png" width="35" height="25"" class="scoreboard"> SF</span>');
$('a>span:contains("SEA")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/sea.png" width="35" height="25"" class="scoreboard"> SEA</span>');
$('a>span:contains("LA")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/stl.png" width="35" height="25"" class="scoreboard"> LA</span>');
$('a>span:contains("TB")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/tb.png" width="35" height="25"" class="scoreboard"> TB</span>');
$('a>span:contains("TEN")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ten.png" width="35" height="25"" class="scoreboard"> TEN</span>');
$('a>span:contains("WAS")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/was.png" width="35" height="25"" class="scoreboard"> WAS</span>');


/**about our league panels***/
var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});

/***StarFlash***/
$(function () {
	    setInterval(function () {
		    $('.star-1').fadeOut(150).delay(2000).fadeIn(300).fadeOut(150).delay(1254);
	        $('.star-2').fadeOut(300).fadeIn(120).fadeOut(120).delay(1920);
	        $('.star-3').fadeOut(150).delay(1200).fadeIn(300).fadeOut(150).delay(800);
	        $('.star-4').fadeOut(700).fadeIn(300).fadeOut(160).delay(1350);
		$('.star-5').fadeOut(900).fadeIn(500).fadeOut(360).delay(1550);
	    }, 1);
    });


/***SlideShow***/
$("#slideshow > div:gt(0)").hide();setInterval(function() {
$('#slideshow > div:first')
.fadeOut(1500)
.next()
.fadeIn(2000)
.end()
.appendTo('#slideshow');
}, 10000);


/***NavScrollBar***/
var lastScrollTop = 0;
var navbar        = $('.navbar');
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       navbar.addClass('navbar-scroll-custom');
   } else {
      navbar.removeClass('navbar-scroll-custom');
   }
   lastScrollTop = st;
});

$(document).ready(function(){
  $(window).scroll(function(){
    $(".section").each(function(){
      var x = $(window).scrollTop() + $(window).height();
      var y = $(this).offset().top + ($(this).height() / 4);

      if (x >= y) {
        $(this).addClass('active');
      };
    });
  });
});

/***StandingImage***/
$('a:contains("New Orleans Saints")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/no"><img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/no.png"  class="teamlogo">New Orleans Saints</a>');
$('a:contains("New York Jets")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/nyj"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/nyj.png"  class="teamlogo">New York Jets</a>');
$('a:contains("Miami Dolphins")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/mia"><img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/mia.png"  class="teamlogo"> Miami Dolphins</a>');
$('a:contains("Cleveland Browns")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/cle"><img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/cle.png"  class="teamlogo"> Cleveland Browns</a>');
$('a:contains("Cincinnati Bengals")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/cin"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/cin.png"  class="teamlogo">Cincinnati Bengals</a>');
$('a:contains("Baltimore Ravens")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/bal"><img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/bal.png"  class="teamlogo">Baltimore Ravens</a>');
$('a:contains("Tennessee Titans")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/ten"><img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ten.png"  class="teamlogo"> Tennessee Titans</a>');
$('a:contains("Indianapolis Colts")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/ind"><img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ind.png"  class="teamlogo"> Indianapolis Colts</a>');
$('a:contains("Houston Texans")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/hou"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/hou.png"  class="teamlogo">Houston Texans</a>');
$('a:contains("Oakland Raiders")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/oak"><img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/oak.png"  class="teamlogo"> Oakland Raiders</a>');
$('a:contains("Denver Broncos")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/den"><img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/den.png"  class="teamlogo">Denver Broncos</a>');
$('a:contains("Kansas City Chiefs")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/kc"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/kc.png"  class="teamlogo">Kansas City Chiefs</a>');
$('a:contains("Dallas Cowboys")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/dal"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/dal.png"  class="teamlogo">Dallas Cowboys</a>');
$('a:contains("New York Giants")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/nyg"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/nyg.png"  class="teamlogo">New York Giants</a>');
$('a:contains("Detroit Lions")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/det"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/det.png"  class="teamlogo">Detroit Lions</a>');
$('a:contains("Green Bay Packers")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/GB"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/gb.png"  class="teamlogo">Green Bay Packers</a>');
$('a:contains("Minnesota Vikings")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/min"><img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/min.png"  class="teamlogo">Minnesota Vikings</a>');
$('a:contains("Chicago Bears")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/chi"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/chi.png"  class="teamlogo">Chicago Bears</a>');
$('a:contains("Carolina Panthers")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/car"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/car.png"  class="teamlogo">Carolina Panthers</a>');
$('a:contains("Atlanta Falcons")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/atl"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/atl.png"  class="teamlogo">Atlanta Falcons</a>');
$('a:contains("Los Angeles Rams")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/la"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/stl.png"  class="teamlogo">Los Angeles Rams</a>');
$('a:contains("Seattle Seahawks")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/sea"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/sea.png"  class="teamlogo">Seattle Seahawks</a>');
$('a:contains("Arizona Cardinals")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/ari"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ari.png"  class="teamlogo">Arizona Cardinals</a>');
$('a:contains("Buffalo Bills")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/buf"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/buf.png"  class="teamlogo">Buffalo Bills</a>');
$('a:contains("Pittsburgh Steelers")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/pit"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/pit.png"  class="teamlogo">Pittsburgh Steelers</a>');
$('a:contains("San Francisco 49ers")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/sf"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/sf.png"  class="teamlogo">San Francisco 49ers</a>');
$('a:contains("Washington Redskins")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/was"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/was.png"  class="teamlogo">Washington Redskins</a>');
$('a:contains("San Diego Chargers")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/sd"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/sd.png"  class="teamlogo">San Diego Chargers</a>');
$('a:contains("Jacksonville Jaguars")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/jac"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/jac.png"  class="teamlogo">Jacksonville Jaguars</a>');
$('a:contains("New England Patriots")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/ne"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ne.png"  class="teamlogo">New England Patriots</a>');
$('a:contains("Tampa Bay Buccaneers")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/tb"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/tb.png"  class="teamlogo">Tampa Bay Buccaneers</a>');
$('a:contains("Philadelphia Eagles")').replaceWith('<a href="http://daddyleagues.com/xnfl/team/phi"> <img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/phi.png"  class="teamlogo">Philadelphia Eagles</a>');
