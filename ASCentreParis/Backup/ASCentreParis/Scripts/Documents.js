// Nombre de lignes affichées par page
var show_per_page = 2; 
var current_page = 0;

    // Initialisation de la page
function initPage()
    {
	initPagination();

      	var addToAll = false;
		var gallery = true;
		var titlePosition = 'inside';
				$(addToAll ? 'img' : 'img.fancybox').each(function(){
					var $this = $(this);
					var title = $this.attr('title');
					var src = $this.attr('data-big') || $this.attr('src');
					var a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
					$this.wrap(a);
				});
				if (gallery)
				$('a.fancybox').attr('rel', 'fancyboxgallery');
				$('a.fancybox').fancybox(
	                {
			        afterLoad: function () { //change here 
				            $('.fancybox-image').loupe(); //apply loupe after popup has been shown
				        }
				     }
	                 );
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