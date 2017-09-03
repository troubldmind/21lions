function scorelist(){
	
var scorelist= $("ol li:first-child");
  
$(scorelist).animate({height:0},400,     function scorelist(){
	$('ol').append(this);
	$(this).animate({height:87},400);
	});
}
setInterval(scorelist, 6000);


/***scorelist***/
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
$('a>span:contains("JAX")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/jac.png" width="35" height="25"" class="scoreboard"> JAC</span>');
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
$('a>span:contains("LAR")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/stl.png" width="35" height="25"" class="scoreboard"> LAR</span>');
$('a>span:contains("LAC")').replaceWith('<img src="http://i.nflcdn.com/static/site/6.9/img/logos/teams-gloss-81x54/sd.png" width="35" height="25"" class="scoreboard"> LAC</span>');
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

  !function(a){a.Flader=function(b,c){var d={btns_classe:"",wrap_classe:"",slide_type:"slide",fixe_height:!1,speed:500,easing:"",mouse_event:"click",cycling_slide:!0,auto_slide:!1,auto_slide_delay:5e3,onSlide:function(){}},e=this;e.settings={};var g,h,i,j,k,l,m,n,o,f=a(b),b=b,p=!1,q=["slide","fade"],r=!1;e.init=function(){function o(){r=!1}e.settings=a.extend({},d,c),a.support.transition&&void 0!==a.fn.transition||(a.fn.transition=a.fn.animate),~a.inArray(e.settings.slide_type,q)||(e.settings.slide_type="slide"),e.settings.cycling_slide||"slide"!=e.settings.slide_type||(e.settings.auto_slide=!1),k=a('[data-function="slider_content"]',f).length?a('[data-function="slider_content"]',f):a("<div/>",{"data-function":"slider_content"}),l=a('[data-function="slider_item"]',f).addClass("slider_item"),g=a("<div/>",{"class":"slider_wrap"}),i=a("<button/>",{"class":"slider_nav left"}).addClass(e.settings.btns_classe).on(e.settings.mouse_event,function(){t("prev")}),j=a("<button/>",{"class":"slider_nav right"}).addClass(e.settings.btns_classe).on(e.settings.mouse_event,function(){t("next")}),k.addClass("slider_content"),f.append(g.append(k.append(l))),l.length>1&&f.append(g.append(i,j)),m=l.filter(".active"),(!m.length||m.length>1)&&(m=l.removeClass("active").first().addClass("active")),e.settings.cycling_slide||(h=null,0===m.index()&&(h=i.addClass("hide")),m.index()===l.length-1&&(h=j.addClass("hide")));var b=maxWidth=0,n=m.index();a.each(l,function(c){b=Math.max(b,a(this).outerHeight()),"slide"==e.settings.slide_type&&a(this).css({left:100.05*(c-n)+"%"})}),e.settings.fixe_height&&f.height(b),"mousehold"===e.settings.mouse_event&&(e.settings.easing="linear",i.on({mousedown:function(){r=!0,a(this).trigger("mousehold")},"mouseout mouseup":o}),j.on({mousedown:function(){r=!0,a(this).trigger("mousehold")},"mouseout mouseup":o})),f.addClass(e.settings.slide_type+" slider_container"),e.settings.auto_slide&&s()};var s=function(){o=setTimeout(function(){t()},e.settings.auto_slide_delay)},t=function(b){if(!p){void 0===b&&(b="next"),void 0!==o&&clearTimeout(o),m=l.filter(".active"),n=m[b]().length?m[b]():l.filter("next"===b?":first":":last");var c={current:m,follow:n};p=!0,a.when("fade"===e.settings.slide_type?u():v(b),e.settings.onSlide(c)).done(function(){m.removeClass("active"),p=!1,r&&t(b),e.settings.auto_slide&&!r&&s()})}},u=function(){return n.addClass("active").css({opacity:0,"z-index":20}).transition({opacity:1,duration:e.settings.speed,easing:e.settings.easing},function(){m.css({opacity:"0"}),n.css({"z-index":""})})},v=function(b){n.addClass("active"),n["next"===b?"before":"after"](m),l=a('[data-function="slider_item"]',f);var c=l.filter(m).index(),d=l.filter(n).index();return e.settings.cycling_slide||(null!==h&&h.removeClass("hide"),h=null,0===d&&(h=i.addClass("hide")),d===l.length-1&&(h=j.addClass("hide"))),l.each(function(b){a(this).css({left:100.05*(b-c)+"%"}).transition({left:100.05*(b-d)+"%",duration:e.settings.speed,easing:e.settings.easing})})};e.init()},a.fn.Flader=function(b){return this.each(function(){if(void 0==a(this).data("Flader")){var c=new a.Flader(this,b);a(this).data("Flader",c)}})}}(jQuery);
  
  
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

