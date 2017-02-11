

$(document).ready(function () {
	document.title = 'Real Football League';

	// Header
	$("#daddyleagues-menu").appendTo("#dl_nav");
	$(".scorelist").appendTo("#dl_scorelist");
	
	$("#daddyleagues-menu .navbar .nav > li:contains('Chat')").remove();
	$("#daddyleagues-menu .navbar .nav > li:contains('Blog')").remove();
	
	$('.playoffs td div:contains("On The Bubble")').parent().addClass("bubble");
	
	/***GOW HOME TEAMS***/
$('.gameoftheweek .ng-scope').wrapInner('<div class="record"></div>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/0.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">chicago</div><span class="chi">bears</span>');
	
$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/1.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">Cincinnati</div><span class="cin">bengals</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/2.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">buffalo</div><span class="buf">bills</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/3.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">denver</div><span class="den">broncos</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/4.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">Cleveland</div><span class="cle">browns</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/5.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">tampa bay</div><span class="tb">buccaneers</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/6.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">arizona</div><span class="ari">cardinals</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/7.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">San Diego</div><span class="sd">chargers</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/8.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">Kansas City</div><span class="kc">Chiefs</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/9.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">Indianapolis</div><span class="ind">colts</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/10.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">dallas</div><span class="dal">cowboys</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/11.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">miami</div><span class="mia">dolphins</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/12.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">philadelphia</div><span class="phi">eagles</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/13.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">atlanta</div><span class="atl">falcons</span></span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/14.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">San Francisco</div><span class="sf">49ers</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/15.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">new york</div><span class="nyg">giants</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/155.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">Jacksonville</div><span class="jax">Jaguars</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/17.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">new york</div><span class="nyj">jets</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/18.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">Detroit</div><span class="det">Lions</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/19.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team">green bay</div><span class="gb ">packers</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/20.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">carolina</div><span class="car">panthers</span></span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/21.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">new england</div><span class="ne">patriots</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/22.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">oakland</div><span class="oak">raiders</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/23.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">St. Louis</div><span class="stl">rams</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/24.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">baltimore</div><span class="bal">ravens</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/25.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">washington</div><span class="was">redskins</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/26.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">new orleans</div><span class="no">saints</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/27.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">seattle</div><span class="sea">seahawks</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/28.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">pittsburgh</div><span class="pit">steelers</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/29.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">tennessee</div><span class="ten">titans</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/30.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">minnesota</div><span class="min">vikings</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/right/31.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="team ">houston</div><span class="hou">texans</span>');

	
/***GOW Vistor teams***/
	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/0.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">chicago</div><span class="chi-away">bears</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/1.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">Cincinnati</div><span class="cin-away">bengals</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/2.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">buffalo</div><span class="buf-away">bills</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/3.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">denver</div><span class="den-away">broncos</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/4.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">Cleveland</div><span class="cle-away">browns</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/5.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">tampa bay</div><span class="tb-away">buccaneers</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/6.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">arizona</div><span class="ari-away">cardinals</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/7.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">San Diego</div><span class="sd-away">chargers</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/8.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">Kansas City</div><span class="kc-away">Chiefs</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/9.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">Indianapolis</div><span class="ind-away">colts</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/10.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">Dallas</div><span class="dal-away">Cowboys</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/11.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">Miami</div><span class="mia-away">Dolphins</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/12.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">philadelphia</div><span class="phi-away">eagles</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/13.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">Atlanta</div><span class="atl-away">Falcons</span></span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/14.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">San Francisco</div><span class="sf-away">49ers</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/15.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">new york</div><span class="nyg-away">giants</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/16.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">Jacksonville</div><span class="jax-away">Jaguars</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/17.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">new york</div><span class="nyj-away">jets</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/18.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">Detroit</div><span class="det-away">Lions</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/19.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">green bay</div><span class="gb-away">packers</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/20.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">Carolina</div><span class="car-away">Panthers</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/21.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">new england</div><span class="ne-away">patriots</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/22.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">oakland</div><span class="oak-away">raiders</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/23.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">St. Louis</div><span class="stl-away">rams</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/24.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">baltimore</div><span class="bal-away">ravens</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/25.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">washington</div><span class="was-away">redskins</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/26.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">new orleans</div><span class="no-away">saints</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/27.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">seattle</div><span class="sea-away">seahawks</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/28.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">Pittsburgh</div><span class="pit-away">Steelers</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/29.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">Tennessee</div><span class="ten-away">Titans</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/30.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">minnesota</div><span class="min-away">vikings</span>');

	$('.gameoftheweek .ng-scope[style*="/img/nfl/teams/left/31.png"]').attr( "style", "" ).css( 'background-image', 'url("")').prepend('<div class="away team ">Houston</div><span class="hou-away">Texans</span>');	
	

	$('.data-table1 td:contains("Cardinals")').prepend('<img src="http://static.nfl.com/static/site/img/teams/ARZ/ARZ_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("arz");
	$('.data-table1 td:contains("Falcons")').prepend('<img src="http://static.nfl.com/static/site/img/teams/ATL/ATL_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("atl");
	$('.data-table1 td:contains("Ravens")').prepend('<img src="http://static.nfl.com/static/site/img/teams/BAL/BAL_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("bal");
	$('.data-table1 td:contains("Bills")').prepend('<img src="http://static.nfl.com/static/site/img/teams/BUF/BUF_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("buf");
	$('.data-table1 td:contains("Panthers")').prepend('<img src="http://static.nfl.com/static/site/img/teams/CAR/CAR_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("car");
	$('.data-table1 td:contains("Bears")').prepend('<img src="http://static.nfl.com/static/site/img/teams/CHI/CHI_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("chi");
	$('.data-table1 td:contains("Bengals")').prepend('<img src="http://static.nfl.com/static/site/img/teams/CIN/CIN_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("cin");
	$('.data-table1 td:contains("Browns")').prepend('<img src="http://static.nfl.com/static/site/img/teams/CLE/CLE_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("cle");
	$('.data-table1 td:contains("Cowboys")').prepend('<img src="http://static.nfl.com/static/site/img/teams/DAL/DAL_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("dal");
	$('.data-table1 td:contains("Broncos")').prepend('<img src="http://static.nfl.com/static/site/img/teams/DEN/DEN_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("den");
	$('.data-table1 td:contains("Lions")').prepend('<img src="http://static.nfl.com/static/site/img/teams/DET/DET_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("det");
	$('.data-table1 td:contains("Packers")').prepend('<img src="http://static.nfl.com/static/site/img/teams/GB/GB_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("gb");
	$('.data-table1 td:contains("Texans")').prepend('<img src="http://static.nfl.com/static/site/img/teams/HOU/HOU_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("hou");
	$('.data-table1 td:contains("Colts")').prepend('<img src="http://static.nfl.com/static/site/img/teams/IND/IND_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("ind");
	$('.data-table1 td:contains("Jaguars")').prepend('<img src="http://static.nfl.com/static/site/img/teams/JAC/JAC_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("jac");
	$('.data-table1 td:contains("Chiefs")').prepend('<img src="http://static.nfl.com/static/site/img/teams/KC/KC_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("kc");
	$('.data-table1 td:contains("Dolphins")').prepend('<img src="http://static.nfl.com/static/site/img/teams/MIA/MIA_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("mia");
	$('.data-table1 td:contains("Vikings")').prepend('<img src="http://static.nfl.com/static/site/img/teams/MIN/MIN_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("min");
	$('.data-table1 td:contains("Patriots")').prepend('<img src="http://static.nfl.com/static/site/img/teams/NE/NE_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("ne");
	$('.data-table1 td:contains("Saints")').prepend('<img src="http://static.nfl.com/static/site/img/teams/NO/NO_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("no");
	$('.data-table1 td:contains("Giants")').prepend('<img src="http://static.nfl.com/static/site/img/teams/NYG/NYG_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("nyg");
	$('.data-table1 td:contains("Jets")').prepend('<img src="http://static.nfl.com/static/site/img/teams/NYJ/NYJ_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("nyj");
	$('.data-table1 td:contains("Raiders")').prepend('<img src="http://static.nfl.com/static/site/img/teams/OAK/OAK_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("oak");
	$('.data-table1 td:contains("Eagles")').prepend('<img src="http://static.nfl.com/static/site/img/teams/PHI/PHI_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("phi");
	$('.data-table1 td:contains("Steelers")').prepend('<img src="http://static.nfl.com/static/site/img/teams/PIT/PIT_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("pit");
	$('.data-table1 td:contains("Chargers")').prepend('<img src="http://static.nfl.com/static/site/img/teams/SD/SD_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("sd");
	$('.data-table1 td:contains("49ers")').prepend('<img src="http://static.nfl.com/static/site/img/teams/SF/SF_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("sf");
	$('.data-table1 td:contains("Seahawks")').prepend('<img src="http://static.nfl.com/static/site/img/teams/SEA/SEA_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("sea");
	$('.data-table1 td:contains("Los Angeles Rams")').prepend('<img src="http://static.nfl.com/static/site/img/teams/STL/STL_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("stl");
	$('.data-table1 td:contains("Buccaneers")').prepend('<img src="http://static.nfl.com/static/site/img/teams/TB/TB_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("tb");
	$('.data-table1 td:contains("Titans")').prepend('<img src="http://static.nfl.com/static/site/img/teams/TEN/TEN_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("ten");
	$('.data-table1 td:contains("Redskins")').prepend('<img src="http://static.nfl.com/static/site/img/teams/WAS/WAS_logo-20x20.gif" width="20" height="20" border="0" alt="Team logo" class="teamLogo">').addClass("was");
	

	
	$('.standings .data-table1 tbody td a:contains("Arizona Cardinals")').text('ARZ');
	$('.standings .data-table1 tbody td a:contains("Atlanta Falcons")').text('ATL');
	$('.standings .data-table1 tbody td a:contains("Baltimore Ravens")').text('BAL');
	$('.standings .data-table1 tbody td a:contains("Buffalo Bills")').text('BUF');
	$('.standings .data-table1 tbody td a:contains("Carolina Panthers")').text('CAR');
	$('.standings .data-table1 tbody td a:contains("Chicago Bears")').text('CHI');
	$('.standings .data-table1 tbody td a:contains("Cincinnati Bengals")').text('CIN');
	$('.standings .data-table1 tbody td a:contains("Cleveland Browns")').text('CLE');
	$('.standings .data-table1 tbody td a:contains("Dallas Cowboys")').text('DAL');
	$('.standings .data-table1 tbody td a:contains("Denver Broncos")').text('DEN');
	$('.standings .data-table1 tbody td a:contains("Detroit Lions")').text('DET');
	$('.standings .data-table1 tbody td a:contains("Green Bay Packers")').text('GB');
	$('.standings .data-table1 tbody td a:contains("Houston Texans")').text('HOU');
	$('.standings .data-table1 tbody td a:contains("Indianapolis Colts")').text('IND');
	$('.standings .data-table1 tbody td a:contains("Jacksonville Jaguars")').text('JAC');
	$('.standings .data-table1 tbody td a:contains("Kansas City Chiefs")').text('KC');
	$('.standings .data-table1 tbody td a:contains("Miami Dolphins")').text('MIA');
	$('.standings .data-table1 tbody td a:contains("Minnesota Vikings")').text('MIN');
	$('.standings .data-table1 tbody td a:contains("New England Patriots")').text('NE');
	$('.standings .data-table1 tbody td a:contains("New Orleans Saints")').text('NO');
	$('.standings .data-table1 tbody td a:contains("New York Giants")').text('NYG');
	$('.standings .data-table1 tbody td a:contains("New York Jets")').text('NYJ');
	$('.standings .data-table1 tbody td a:contains("Oakland Raiders")').text('OAK');
	$('.standings .data-table1 tbody td a:contains("Philadelphia Eagles")').text('PHI');
	$('.standings .data-table1 tbody td a:contains("Pittsburgh Steelers")').text('PIT');
	$('.standings .data-table1 tbody td a:contains("San Diego Chargers")').text('SD');
	$('.standings .data-table1 tbody td a:contains("San Francisco 49ers")').text('SF');
	$('.standings .data-table1 tbody td a:contains("Seattle Seahawks")').text('SEA');
	$('.standings .data-table1 tbody td a:contains("Los Angeles Rams")').text('LA');
	$('.standings .data-table1 tbody td a:contains("Tampa Bay Buccaneers")').text('TB');
	$('.standings .data-table1 tbody td a:contains("Tennessee Titans")').text('TEN');
	$('.standings .data-table1 tbody td a:contains("Washington Redskins")').text('WAS');
	$('.standings .data-table1 tbody td:nth-child(5n)').remove();
	
});
