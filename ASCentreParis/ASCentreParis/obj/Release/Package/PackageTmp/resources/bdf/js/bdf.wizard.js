$( document ).ready(function() {

/* Atention : 2 parties à activer à chaque étape du parcours :
 * Le lien avec le 'li' et la 'section' référente 
 */
	
			var $steps = $('.steps li');
			 var windowSize; 
			
			/* activer le wizardvalider seulement sur la dernière étape */
			$("#wizardvalider").hide(); 				  	
				
			$('.previous').click(function(){
				
				/* gestion de la section */
				$(this).parents('.step-content').removeClass('active');
				$(this).parents('.step-content').prev().addClass('active');
				
				/* gestion du 'li' */
				var $activeli = $steps.filter('.active');
				$activeli.removeClass('active');
				$activeli.removeClass('done');
				$activeli.prev('li').addClass('active');	
				
				windowSize = $('body').width();
		        // default is large window styling; adjust if appropriate
		        if (windowSize <= 767) {
		        	$(".steps > li:not(.active)").hide();
		        	$(".steps > li.active").show();
		        }
		            				
				$("#wizardvalider").hide(); 				  	

			});

			$('.next').click(function(){
				
				/* gestion de la section */  
				$(this).parents('.step-content').removeClass('active');
				// $(this).parents('.step-content').addClass('done');
				$(this).parents('.step-content').next().addClass('active');
				  
				/* gesion du 'li' */
				var $activeli = $steps.filter('.active');
				$activeli.removeClass('active');				  
				$activeli.addClass('done');
				$activeli.next('li').addClass('active');

				 windowSize = $('body').width();	
			     if (windowSize <= 767) {
			         $(".steps > li:not(.active)").hide();
			         $(".steps > li.active").show();
			     }
				
				// rajout de l'evenement onclick sur le li visité
				// traitement du click sur un li done à postériori
				$activeli.on("click", function(){
					// gestion des li
					$activeli.nextAll().removeClass('done');
					$activeli.prevAll().addClass('done');					
					$activeli.nextAll().removeClass('active');
					$activeli.prevAll().removeClass('active');
					$activeli.removeClass('done');					
					$activeli.addClass('active');

					$activeli.nextAll().off('click');
										
					//gestion des sections
					$('.step-content').removeClass('active');
					$($activeli.attr('id')).addClass('active');
					// gestion du bouton valider
					$('#wizardvalider').hide();				  						
				 });
				
				$activeli.next('li').on("click", function(){
					// gestion des li
					$activeli.next('li').nextAll().removeClass('done');
					$activeli.next('li').prevAll().addClass('done');					
					$activeli.next('li').nextAll().removeClass('active');
					$activeli.next('li').prevAll().removeClass('active');
					$activeli.next('li').removeClass('done');					
					$activeli.next('li').addClass('active');
					
					$activeli.next('li').nextAll().off('click');
					
					//gestion des sections
					$('.step-content').next().removeClass('active');
					$($activeli.next('li').attr('id')).addClass('active');
					// gestion du bouton valider
					 var currentId = $($activeli.next('li').attr('id')).attr('id');
					 // if currentStep == 4 and next click
					 var step = "step";
					 var stepLength = $steps.length;
					 var fullStepId = step+stepLength;
					 if (currentId==fullStepId){
					  $('#wizardvalider').show(); 
					 }
				 });
								
				 var currentId = $(this).parents('.step-content').next().attr('id');
				 // if currentStep == 4 and next click
				 var step = "step";
				 var stepLength = $steps.length;
				 var fullStepId = step+stepLength;
				 if (currentId==fullStepId){
				  $('#wizardvalider').show(); 				  	
				 }

			});
			
});