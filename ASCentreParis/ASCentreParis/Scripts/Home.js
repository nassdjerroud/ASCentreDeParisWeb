// Nombre de lignes affichées par page
var show_per_page = 8; 
var current_page = 0;
var elementCount = 0;

$(document).ready(function () {
    refreshListeActualites();
    // Lancement de la recherché lorsque la touche entrée est utilisée
    $('#query').unbind();
    $('#query').bind('keyup', function (e) {
        if (e.keyCode == 13) {
            lancerNouvelleRecherche();
        }
    });
    
});

// Fonction permettant d'ouvrir une actualité
function OpenActualite(Id) {
		        var url = '/Home/AfficherActualite' + '?idActualite=' + Id
	           $('.modal-content').load(url);
			    $('#modal-container').animate({
	                    scrollTop: 0
	                }, 800);
		        $('#modal-container').modal({ show: true });
		    }

// Initialisation de la liste des actualités
function refreshListeActualites(){
    var _offSet=parseInt(show_per_page)*current_page;

    var _isSmartPhone=$('#HiddenIsSmallScreen').val();
 
	var filtre= $("#query").val();
	$.ajax({
	                url: '/Home/SearchActualite',
	                type: 'POST',
	                data: { query: filtre, isSmartPhone: _isSmartPhone, offSet: _offSet, limit: show_per_page },
	                success: function(data) {
	                   $('#search-results').html(data);
	                   setUtilisateurName();
                       initHomePagination();
	                },
	                error: function (xhr, status, error) {
	                        var ex = xhr.responseText;
		                    notificationKO('Erreur lors du refresh des actualités.' + ex);
		                }
	            });
}

// Initialisation de la pagination
function initHomePagination()
{
      elementCount=$('#HiddenForElementCount').val();
    	 // Gestion de la pagination
      var number_of_pages = parseInt(elementCount) / parseInt(show_per_page);
      var nav="";
      if(number_of_pages>1){
	      nav = '<ul class="pagination"><li><a href="javascript:previous();">&laquo;</a>';
	     
	      var i = -1;
	      while(number_of_pages > ++i){
	        nav += '<li class="page_link'
	        if (i == current_page) nav += ' active';
	        nav += '" id="id' + i +'">';
	        nav += '<a href="javascript:current_page='+i+';go_to_page(' + i + ')">' + (i + 1) + '</a>';
	      }
	      nav += '<li><a href="javascript:next();">&raquo;</a></ul>';
      }
      $('#page_navigation').html(nav);
}

function set_display() {
    refreshListeActualites();
}

// Click sur le bouton de recherche
function lancerNouvelleRecherche()
{
    current_page=0;
    refreshListeActualites();
}