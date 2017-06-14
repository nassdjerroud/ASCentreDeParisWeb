// Nombre de lignes affichées par page
var show_per_page = 14; 
var current_page = 0;

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
		var filtre= $("#query").val();
	        $.ajax({
	                url: '/Home/SearchActualite',
	                type: 'POST',
	        		data: { query : filtre },
	                success: function(data) {
	                   $('#search-results').html(data);
	                    setUtilisateurName();   
	                },
		            error: function (ex) {
		                    notificationKO('Erreur lors du refresh des actualités.' + ex);
		                }
	            });
}

// Initialisation de la pagination
function initPagination()
{
    	 // Gestion de la pagination
      var number_of_pages = Math.ceil($('#content').children().length / show_per_page);
      
      var nav = '<ul class="pagination"><li><a href="javascript:previous();">&laquo;</a>';

      var i = -1;
      while(number_of_pages > ++i){
        nav += '<li class="page_link'
        if(!i) nav += ' active';
        nav += '" id="id' + i +'">';
        nav += '<a href="javascript:go_to_page(' + i +')">'+ (i + 1) +'</a>';
      }
      nav += '<li><a href="javascript:next();">&raquo;</a></ul>';

      $('#page_navigation').html(nav);
      set_display(0, show_per_page);
}

