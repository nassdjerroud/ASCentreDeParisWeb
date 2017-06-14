// Fonction appelée à l'ouverture de la modale de login
function initFenetreLogin(model)
	{
	// Focus sur le premier champ texte
	$("input:text:visible:first").focus();

	// Si la connexion est OK, on ferme la fenetre
	if(model.isConnectionOK)
	{
	    notificationOK('Bonjour '+model.Login+'. Vous êtes désormais connecté :)');
	    fermerModalLogin();
	
	    // On met à jour le banner 
	        $.ajax({
	                url: '/Home/AfficherHeader',
	                type: 'POST',
	                success: function(data) {
	                   $('#Header').html(data);
	                },
		            error: function (ex) {
		                    notificationKO('Erreur lors du refresh du header.' + ex);
		                }
	            });
	}
	
	 // L'action submit du formulaire est désactivée pour être remplacée par une action customisée.
	   $('#MyForm').submit(function(e) {
		    e.preventDefault();
	        var _model=$('#MyForm').serialize();
	        $.ajax({
	                url: '/Login/LoginPost',
	                type: 'POST',
	                data: _model,
	                success: function(data) {
	                    // On met à jour la modale
	                    $('#form-container').html(data);
	                    // On scroll en haut afin que l'utilisateur puisse voir le résultat de son action
	                    $('#modal-container').animate({
		                    scrollTop: 0
		                }, 800);
	                },
		            error: function (ex) {
		                    notificationKO('Erreur lors de la validation du formulaire.' + ex);
		                }
	            });
			});
		}


// Fermeture de la modale de login
function fermerModalLogin()
		{
			fermerModal();
	        // On remet l'ancienne class à la modale
	    	$('#modal-dialog').removeClass('SmallModal').addClass('LargeModal');
		}


// Ouverture de la modal pour se connecter
function loginOnClick()
	    {
	     // Ouverture d'une modale petite
	     $('#modal-dialog').removeClass('LargeModal').addClass('SmallModal');
	      var url = '/Login/Login';
	           $('.modal-content').load(url);
			    $('#modal-container').animate({
	                    scrollTop: 0
	                }, 800);
	     // alert('show modal');
	      $('#modal-container').modal({ show: true });
	    //  alert('show modal after');
	      return false;
	     }
	
// Déconnexion de l'utilisateur
function logOff()
		{
	    // Appel serveur pour se deconnecter
	     $.ajax({
	                url: '/Login/LogOffPost',
	                type: 'POST',
	                success: function(data) {
	                    // On regarde si tout s'est bien passé
	                    if(data.Resultat)
	                        {
					notificationOK('Au revoir!');
					// On met à jour le banner 
					$.ajax({
						url: '/Home/AfficherHeader',
						type: 'POST',
						success: function(data) {
						      $('#Header').html(data);
						 },
						 error: function (ex) {
							notificationKO('Erreur lors du refresh du header.' + ex);
						}
						});
		                	}
	                    else
	                        {
				notificationKO('Erreur lors de la déconnection.');
		                }	
	                        
	                },
		            error: function (ex) {
		                    notificationKO('Erreur lors de la déconnection.' + ex);
		                }
	            });
	     }
