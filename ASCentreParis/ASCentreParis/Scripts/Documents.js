// Nombre de lignes affichées par page
var show_per_page = 2;
var current_page = 0;
var elementCount = 0;
var _isSmartPhone = null;

$(document).ready(function () {
    _isSmartPhone = $('#HiddenIsSmallScreen').val();
    initPageDocument();
    
});

// Initialisation de la page
function initPageDocument() {
    elementCount=$('#HiddenForElementCount').val();
    NombreDocumentsParLigne=$('#HiddenForNombreDocumentsParLigne').val();
    NombreLignes=$('#HiddenForNombreLignes').val();

    show_per_page=NombreDocumentsParLigne*NombreLignes;
    refreshListeDocuments();
}

function set_display() {
    refreshListeDocuments();
}

// Refresh de la liste des documents
function refreshListeDocuments(){
    var _offSet=parseInt(show_per_page)*current_page;
    var _idCategorieDocument= $('#HiddenForIdCategorieDocument').val();
    var _isSmartPhone=$('#HiddenIsSmallScreen').val();



    var filtre= $("#query").val();
    $.ajax({
                    url: '/Document/SearchDocument',
                    type: 'POST',
                    data: {idCategorieDocument :_idCategorieDocument, isSmartPhone: _isSmartPhone, offSet: _offSet, limit: show_per_page },
                    success: function(data) {
                       $('#divListeDocuments').html(data);
                       initDownloadForms();
                       initFancyBoxes();
                       initVideoLoad();
                       initDocumentPagination();
                    },
                    error: function (xhr, status, error) {
                            var ex = xhr.responseText;
                            notificationKO('Erreur lors du refresh des documents.' + ex);
                        }
                });

}




// Initialisation des images
function initFancyBoxes() {
    if (_isSmartPhone=='false') {
        var addToAll = false;
        var gallery = true;
        var titlePosition = 'inside';
        $(addToAll ? 'img' : 'img.fancybox').each(function () {
            var $this = $(this);
            var title = $this.attr('title');
            var src = $this.attr('data-big') || $this.attr('src');
            var a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
            $this.wrap(a);
        });
        if (gallery) {
            $('a.fancybox').attr('rel', 'fancyboxgallery');
        }
        $('a.fancybox').fancybox(
            {
                afterLoad: function () { //change here 
                    $('.fancybox-image').loupe(); //apply loupe after popup has been shown
                }
            }
        );
    }
    else {
        $('.fancybox').removeClass('imgBox');
        $('.fancybox').removeClass('fancybox');
    }

}


// Initialisation des formulaires de dowloads
function initDownloadForms() {

    $('.formDownload').each(function (form) {

        var action = $(this).attr('action');
        var param = $(this).attr('data-id');
        $(this).attr('action', action + '?idDocument=' + param);

    });

}

// Initialisation de la pagination
function initDocumentPagination() {
         // Gestion de la pagination
      var number_of_pages = elementCount / show_per_page;
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