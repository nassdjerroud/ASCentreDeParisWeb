			$(document).ready(function() {
					
					// gestion couleur panneau actif/inactif
					
					$('.panel-collapse').on('show.bs.collapse',function(){
						$(this).prev('.panel-heading').addClass("active-panel");
						// $(this).prev('.panel-heading').attr('title','panneau actif');	// accessibilité					
						$(this).prev('.panel-heading').find('collapsed').addClass("active-panel");						
					});					
					$('.panel-collapse').on('hide.bs.collapse',function(){
						$(this).prev('.panel-heading').removeClass("active-panel");
						// $(this).prev('.panel-heading').removeAttr('title','panneau actif');			// accessibilité	 		
						$(this).prev('.panel-heading').find('collapsed').addClass("active-panel");
					});					

	        	});						
