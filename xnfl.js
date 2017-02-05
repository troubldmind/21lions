
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
$('a>span:contains("STL")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/stl.png" width="35" height="25"" class="scoreboard"> STL</span>');
$('a>span:contains("TB")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/tb.png" width="35" height="25"" class="scoreboard"> TB</span>');
$('a>span:contains("TEN")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ten.png" width="35" height="25"" class="scoreboard"> TEN</span>');
$('a>span:contains("WAS")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/was.png" width="35" height="25"" class="scoreboard"> WAS</span>');
$('a>span:contains("LDN")').replaceWith('<img src="http://i1178.photobucket.com/albums/x364/garza21lions/loncopy_zps1e944b9b.jpg" width="35" height="25"" class="scoreboard"> LDN</span>');




$(document).ready(function(){
  

  // NAVIGATION MENU
  
  // menu icon states, opening main nav
  $('#menu-icon').click(function(){
    $(this).toggleClass('open');
    $('#menu,#menu-toggle,#page-content,#menu-overlay').toggleClass('open');
    $('#menu li,.submenu-toggle').removeClass('open');
    $('#menu li').removeClass('disabled');
  });
  
  // clicking on overlay closes menu
  $('#menu-overlay').click(function(){
    $('*').removeClass('open');
    $('*').removeClass('disabled');
  });
  
  // add child menu toggles and parent class
  $('#menu li').has('ul').addClass('parent').prepend('<div class="submenu-toggle">open</div>');
  
  // toggle child menus
  $('.submenu-toggle').click(function(){
    var currentToggle=$(this);
    currentToggle.parent().siblings().toggleClass('disabled');
    currentToggle.parent().toggleClass('open');
    currentToggle.toggleClass('open');
  });
  });
