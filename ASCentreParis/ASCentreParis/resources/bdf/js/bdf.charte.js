$(document).ready(function() {

	function resizeElements(id) {
	    var elementHeight = 0;
	    $(id).each(function () {
	        if ($(this).height() > elementHeight) {
	            elementHeight = $(this).height();
	        }
	    });
	    $(id).each(function () {
	        $(this).height(elementHeight);
	    });
	}

	$('.navbar .menu-item').hover(
		function () {
			$(this).children('.sub-menu-item').css('display', 'block');
			if ($(this).width() > $(this).children('.sub-menu-item').width()) {
				$(this).children('.sub-menu-item').css('width', ($(this).width() - 1) + 'px');
			}
		 resizeElements($(this).find('.column'));
		},
		function () {
			if (!$(this).hasClass('currentOpen')) {
				$(this).children('.sub-menu-item').css('display', 'none');
			}
		}
	);

	$('.toolbar .menu-item').hover(
		function () {
		    $(this).children('.sub-menu-item').css('display', 'block');
		    if ($(this).width() > $(this).children('.sub-menu-item').width()) {
		        $(this).children('.sub-menu-item').css('width', ($(this).width() - 1) + 'px');
		    }
		    resizeElements($(this).find('.column'));
		},
		function () {
		    if (!$(this).hasClass('currentOpen')) {
		        $(this).children('.sub-menu-item').css('display', 'none');
		    }
		}
	);
	
	/* gestion/sauvegarde de l'entrée du menu groupe selectionné */
	
	$("#example-navbar-collapse ul>li>a:not(.dropdown-toggle)").on("click", function(){
		// recuperation du menu groupe
		var menu = $(this).parents("ul").attr("data-menu");
		// utilisation de jquery.Storage.js pour transmettre le nom du menu groupe selectionne
		$.Storage.set("menu",menu);
	});

	/* gestion/sauvegarde de l'entrée du menu barre outils selectionné */
	
	$("#functionbar ul>li>a:not(.dropdown-toggle)").on("click", function(){
		// recuperation du menu groupe
		var outils = $(this).parents("ul").attr("data-outils");
		// utilisation de jquery.Storage.js pour transmettre le nom du menu groupe selectionne
		$.Storage.set("outils",outils);
		// rechargement de la page pour prise en compte de outils
		location.reload(true);		
	});
		
	/*** nav-tabs ***/
	$('.nav-tabs a').click(function (e) {
	  e.preventDefault();
	  $(this).tab().show();
	});

	/** Hover nav menu **/

	// http://stackoverflow.com/questions/17254104/adding-listener-to-matchmedia-js-polyfill-issue	
	
	if(window.matchMedia){
	
		var handleMyMediaQuery = function(mql) {
	        if (mql.matches) {
	            // do match actions
				$('ul.navbar-nav li').addClass('hovernav');
	        } else {
	            // do unmatch actions
				$('ul.navbar-nav li').removeClass('hovernav');
	        }
	    },
	    myMediaQuery = window.matchMedia('(min-width: 768px)');
	
	    handleMyMediaQuery(myMediaQuery);
	    if (myMediaQuery.addListener){
	    	myMediaQuery.addListener(handleMyMediaQuery);
	    }	
	}
	
	/* nav color hack **/

	if($('nav[role=navigation]').length > 0)
	{
		$('nav[role=navigation] ul.navbar-nav li a').on('mouseover', function () {
				$(this).closest('nav[role=navigation]').toggleClass("top-bordered", this);
		});
	}
	
	/* gestion liste déroulante choix de pays - sauvegarde */
	
	$("#listPays li a").click(function(){
		  var selText = $(this).text();
		  $.Storage.set("selectedlangue",selText+' <span class="caret"></span>');
	});

	// sauvegardes des menus selectionnes
		
	if (window.location.href.indexOf("index")>=0){
		$("#accueil").addClass("menu-selected");
	}else{
		// Si il y a un menu sauvegardé dans Storage, activation (surbrillance) du menu
		var savedmenu = $.Storage.get("menu"); 										
		$("#"+savedmenu).prev().addClass("menu-selected");		
	}

	// Si il y a un menu sauvegardé dans Storage, activation (surbrillance) du menu
	var savedoutils = $.Storage.get("outils"); 	
	$("#"+savedoutils).prev().addClass("menu-selected");		
	
	// langue par defaut= francais, sinon restitution langue sauvegardee
	var savedlangue = $.Storage.get("selectedlangue");
	if (savedlangue ===''){
		$('#dropdownlangue').html('Français  <span class="caret"></span>');		
	}else{
		$('#dropdownlangue').html(savedlangue);
	}
	
});						