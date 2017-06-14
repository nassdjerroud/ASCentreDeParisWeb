$(document).ready(function() {

	if($('.code').length > 0)
	{
		$('.code').html(function(i,h){
		    return h.replace(/[<>\"\'\t\n]/g, function(m) { return {
		      '<' : '&lt;',
		      '>' : '&gt;',
		      "'" : '&#39;',
		      '"' : '&quot;',
		      '\t': '  ',
		      '\n': '<br/>'
		    }[m]});
		 });
		prettyPrint();
		if($('.precode').length > 0)
		{
			$('.precode').next('pre').css('display', 'none');
			$('.precode button').on( 'click', function() {
				$(this).parent().next('pre').slideToggle(500);
			});
		}
	};
	
});						