
!function(a){a.Flader=function(b,c){var d={btns_classe:"",wrap_classe:"",slide_type:"slide",fixe_height:!1,speed:500,easing:"",mouse_event:"click",cycling_slide:!0,auto_slide:!1,auto_slide_delay:5e3,onSlide:function(){}},e=this;e.settings={};var g,h,i,j,k,l,m,n,o,f=a(b),b=b,p=!1,q=["slide","fade"],r=!1;e.init=function(){function o(){r=!1}e.settings=a.extend({},d,c),a.support.transition&&void 0!==a.fn.transition||(a.fn.transition=a.fn.animate),~a.inArray(e.settings.slide_type,q)||(e.settings.slide_type="slide"),e.settings.cycling_slide||"slide"!=e.settings.slide_type||(e.settings.auto_slide=!1),k=a('[data-function="slider_content"]',f).length?a('[data-function="slider_content"]',f):a("<div/>",{"data-function":"slider_content"}),l=a('[data-function="slider_item"]',f).addClass("slider_item"),g=a("<div/>",{"class":"slider_wrap"}),i=a("<button/>",{"class":"slider_nav left"}).addClass(e.settings.btns_classe).on(e.settings.mouse_event,function(){t("prev")}),j=a("<button/>",{"class":"slider_nav right"}).addClass(e.settings.btns_classe).on(e.settings.mouse_event,function(){t("next")}),k.addClass("slider_content"),f.append(g.append(k.append(l))),l.length>1&&f.append(g.append(i,j)),m=l.filter(".active"),(!m.length||m.length>1)&&(m=l.removeClass("active").first().addClass("active")),e.settings.cycling_slide||(h=null,0===m.index()&&(h=i.addClass("hide")),m.index()===l.length-1&&(h=j.addClass("hide")));var b=maxWidth=0,n=m.index();a.each(l,function(c){b=Math.max(b,a(this).outerHeight()),"slide"==e.settings.slide_type&&a(this).css({left:100.05*(c-n)+"%"})}),e.settings.fixe_height&&f.height(b),"mousehold"===e.settings.mouse_event&&(e.settings.easing="linear",i.on({mousedown:function(){r=!0,a(this).trigger("mousehold")},"mouseout mouseup":o}),j.on({mousedown:function(){r=!0,a(this).trigger("mousehold")},"mouseout mouseup":o})),f.addClass(e.settings.slide_type+" slider_container"),e.settings.auto_slide&&s()};var s=function(){o=setTimeout(function(){t()},e.settings.auto_slide_delay)},t=function(b){if(!p){void 0===b&&(b="next"),void 0!==o&&clearTimeout(o),m=l.filter(".active"),n=m[b]().length?m[b]():l.filter("next"===b?":first":":last");var c={current:m,follow:n};p=!0,a.when("fade"===e.settings.slide_type?u():v(b),e.settings.onSlide(c)).done(function(){m.removeClass("active"),p=!1,r&&t(b),e.settings.auto_slide&&!r&&s()})}},u=function(){return n.addClass("active").css({opacity:0,"z-index":20}).transition({opacity:1,duration:e.settings.speed,easing:e.settings.easing},function(){m.css({opacity:"0"}),n.css({"z-index":""})})},v=function(b){n.addClass("active"),n["next"===b?"before":"after"](m),l=a('[data-function="slider_item"]',f);var c=l.filter(m).index(),d=l.filter(n).index();return e.settings.cycling_slide||(null!==h&&h.removeClass("hide"),h=null,0===d&&(h=i.addClass("hide")),d===l.length-1&&(h=j.addClass("hide"))),l.each(function(b){a(this).css({left:100.05*(b-c)+"%"}).transition({left:100.05*(b-d)+"%",duration:e.settings.speed,easing:e.settings.easing})})};e.init()},a.fn.Flader=function(b){return this.each(function(){if(void 0==a(this).data("Flader")){var c=new a.Flader(this,b);a(this).data("Flader",c)}})}}(jQuery);

/* INITIALISE */
$('.fader').Flader({
	  slide_type: 'fade',
	  auto_slide: true
});
$('.slider_finite').Flader({
     fixe_height: true,
	  cycling_slide: false
});
$('.slider_infinite').Flader({
	  mouse_event: 'mousehold'
});



$("#slideshow > div:gt(0)").hide();setInterval(function() {
$('#slideshow > div:first')
.fadeOut(3000)
.next()
.fadeIn(2500)
.end()
.appendTo('#slideshow');
}, 19000);

$('.data-table1 td:contains("Cardinals")').prepend('<img src="http://www.mghelmets.com/logos/az-cardinals.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("arz");

$('.data-table1 td:contains("Falcons")').prepend('<img src="http://www.mghelmets.com/logos/atl-falcons.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("atl");

$('.data-table1 td:contains("Ravens")').prepend('<img src="http://www.mghelmets.com/logos/blt-ravens.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("bal");

$('.data-table1 td:contains("Bills")').prepend('<img src="http://www.mghelmets.com/logos/buf-bills.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("buf");

$('.data-table1 td:contains("Panthers")').prepend('<img src="http://www.mghelmets.com/logos/ca-panthers.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("car");

$('.data-table1 td:contains("Bears")').prepend('<img src="http://www.mghelmets.com/logos/chi-bears.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("chi");

$('.data-table1 td:contains("Bengals")').prepend('<img src="http://www.mghelmets.com/logos/cin-bengals.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("cin");

$('.data-table1 td:contains("Browns")').prepend('<img src="http://www.mghelmets.com/logos/clv-browns.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("cle");

$('.data-table1 td:contains("Cowboys")').prepend('<img src="http://www.mghelmets.com/logos/dal-cowboys.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("dal");

$('.data-table1 td:contains("Broncos")').prepend('<img src="http://www.mghelmets.com/logos/den-broncos.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("den");

$('.data-table1 td:contains("Lions")').prepend('<img src="http://www.mghelmets.com/logos/det-lions.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("det");

$('.data-table1 td:contains("Packers")').prepend('<img src="http://www.mghelmets.com/logos/gb-packers.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("gb");

$('.data-table1 td:contains("Texans")').prepend('<img src="http://www.mghelmets.com/logos/hou-texans.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("hou");

$('.data-table1 td:contains("Colts")').prepend('<img src="http://www.mghelmets.com/logos/ind-colts.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("ind");

$('.data-table1 td:contains("Jaguars")').prepend('<img src="http://www.mghelmets.com/logos/jax-jaguars.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("jac");

$('.data-table1 td:contains("Chiefs")').prepend('<img src="http://www.mghelmets.com/logos/kc-chiefs.png" width="25" height="19" border="0" alt="Team logo" class="teamLogo">').addClass("kc");

$('.data-table1 td:contains("Dolphins")').prepend('<img src="http://www.mghelmets.com/logos/miami-dolphins.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("mia");

$('.data-table1 td:contains("Vikings")').prepend('<img src="http://www.mghelmets.com/logos/min-vikings.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("min");

$('.data-table1 td:contains("Patriots")').prepend('<img src="http://www.mghelmets.com/logos/ne-patriots.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("ne");

$('.data-table1 td:contains("Saints")').prepend('<img src="http://www.mghelmets.com/logos/no-saints.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("no");

$('.data-table1 td:contains("Giants")').prepend('<img src="http://www.mghelmets.com/logos/ny-giants.png" width="20" height="16" border="0" alt="Team logo" class="teamLogo">').addClass("nyg");

$('.data-table1 td:contains("Jets")').prepend('<img src="http://www.mghelmets.com/logos/ny-jets.png" width="25" height="21"border="0" alt="Team logo" class="teamLogo">').addClass("nyj");

$('.data-table1 td:contains("Raiders")').prepend('<img src="http://www.mghelmets.com/logos/oak-raiders.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("oak");

$('.data-table1 td:contains("Eagles")').prepend('<img src="http://www.mghelmets.com/logos/phi-eagles.png" width="19" height="15" border="0" alt="Team logo" class="teamLogo">').addClass("phi");


$('.data-table1 td:contains("Steelers")').prepend('<img src="http://www.mghelmets.com/logos/pit-steelers.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("pit");

$('.data-table1 td:contains("Chargers")').prepend('<img src="http://www.mghelmets.com/logos/sd-chargers.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("sd");

$('.data-table1 td:contains("49ers")').prepend('<img src="http://www.mghelmets.com/logos/sf-49ers.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("sf");

$('.data-table1 td:contains("Seahawks")').prepend('<img src="http://www.mghelmets.com/logos/sea-seahawks.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("sea");

$('.data-table1 td:contains("Rams")').prepend('<img src="http://www.mghelmets.com/logos/stl-rams.png" width="25" height="21"border="0" alt="Team logo" class="teamLogo">').addClass("stl");

$('.data-table1 td:contains("Buccaneers")').prepend('<img src="http://www.mghelmets.com/logos/tb-bucs.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("tb");

$('.data-table1 td:contains("Titans")').prepend('<img src="http://www.mghelmets.com/logos/ten-titans.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("ten");

$('.data-table1 td:contains("Redskins")').prepend('<img src="http://www.mghelmets.com/logos/wash-redskins.png" width="25" height="21" border="0" alt="Team logo" class="teamLogo">').addClass("was");


$('a>span:contains("ARI")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ari.png" width="20" height="15"" class="scoreboard"> ARI</span>');
$('a>span:contains("ATL")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/atl.png" width="20" height="15"" class="scoreboard"> ATL</span>');
$('a>span:contains("BAL")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/bal.png" width="20" height="15"" class="scoreboard"> BAL</span>');
$('a>span:contains("BUF")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/buf.png" width="20" height="15"" class="scoreboard"> BUF</span>');
$('a>span:contains("CAR")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/car.png" width="20" height="15"" class="scoreboard"> CAR</span>');
$('a>span:contains("CHI")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/chi.png" width="20" height="15"" class="scoreboard"> CHI</span>');
$('a>span:contains("CIN")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/cin.png" width="20" height="15"" class="scoreboard"> CIN</span>');
$('a >span:contains("CLE")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/cle.png" width="20" height="15""" class="scoreboard"> CLE</span>');
$('a>span:contains("DAL")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/dal.png" width="20" height="15"" class="scoreboard"> DAL</span>');
$('a>span:contains("DEN")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/den.png" width="20" height="15"" class="scoreboard"> DEN</span>');
$('a>span:contains("DET")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/det.png" width="20" height="15"" class="scoreboard"> DET</span>');
$('a>span:contains("GB")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/gb.png" width="20" height="15"" class="scoreboard"> GB</span>');
$('a>span:contains("HOU")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/hou.png" width="20" height="15"" class="scoreboard"> HOU</span>');
$('a>span:contains("IND")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ind.png" width="20" height="15"" class="scoreboard"> IND</span>');
$('a>span:contains("JAX")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/jac.png" width="20" height="15"" class="scoreboard"> JAC</span>');
$('a>span:contains("KC")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/kc.png" width="20" height="15"" class="scoreboard"> KC</span>');
$('a>span:contains("MIA")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/mia.png" width="20" height="15"" class="scoreboard"> MIA</span>');
$('a>span:contains("MIN")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/min.png" width="20" height="15"" class="scoreboard"> MIN</span>');
$('a>span:contains("NE")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ne.png"width="20" height="15"" class="scoreboard"> NE</span>');
$('a>span:contains("NO")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/no.png" width="20" height="15"" class="scoreboard"> NO</span>');
$('a>span:contains("NYG")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/nyg.png" width="20" height="15"" class="scoreboard"> NYG</span>');
$('a>span:contains("NYJ")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/nyj.png" width="20" height="15"" class="scoreboard"> NYJ</span>');
$('a>span:contains("OAK")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/oak.png" width="20" height="15"" class="scoreboard"> OAK</span>');
$('a>span:contains("PHI")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/phi.png" width="20" height="15"" class="scoreboard"> PHI</span>');
$('a>span:contains("PIT")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/pit.png" width="20" height="15"" class="scoreboard"> PIT</span>');
$('a>span:contains("SD")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/sd.png" width="20" height="15"" class="scoreboard"> SD</span>');
$('a>span:contains("SF")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/sf.png" width="20" height="15"" class="scoreboard"> SF</span>');
$('a>span:contains("SEA")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/sea.png" width="20" height="15"" class="scoreboard"> SEA</span>');
$('a>span:contains("LA")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/stl.png" width="20" height="15"" class="scoreboard"> LA</span>');
$('a>span:contains("TB")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/tb.png" width="20" height="15"" class="scoreboard"> TB</span>');
$('a>span:contains("TEN")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/ten.png" width="20" height="15"" class="scoreboard"> TEN</span>');
$('a>span:contains("WAS")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/was.png" width="20" height="15"" class="scoreboard"> WAS</span>');
