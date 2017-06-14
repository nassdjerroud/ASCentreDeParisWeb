if($('#nav-tree').length > 0)
	{
		console.log('yes');
		$('.tree-toggle').click(function () {
	      $(this).parent().parent().children('.item').toggle(300);
	      $(this).toggleClass("folder-open").animate(3000);
	      $(this).toggleClass("folder-close").animate(3000);
	    });
}