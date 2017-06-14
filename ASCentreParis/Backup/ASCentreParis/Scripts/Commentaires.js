// Affichage de la partie commentaires
function afficherCommentaires(idElement,isPopUp)
{
	var facteurPopUp="";
	if(isPopUp)
	{
		facteurPopUp="PopUp";
	}

	$('#linkShowCommentaires'+facteurPopUp+'_'+idElement).hide();
	$('#divCommentaires'+facteurPopUp+'_'+idElement).show();
	$('#linkHideCommentaires'+facteurPopUp+'_'+idElement).show();
}

// Masquage de la partie commentaires
function masquerCommentaires(idElement,isPopUp)
{
	var facteurPopUp="";
	if(isPopUp)
	{
		facteurPopUp="PopUp";
	}
	$('#linkShowCommentaires'+facteurPopUp+'_'+idElement).show();
	$('#divCommentaires'+facteurPopUp+'_'+idElement).hide();
	$('#linkHideCommentaires'+facteurPopUp+'_'+idElement).hide();
}

// Fonction permettant de mettre à jour les textboxs avec le nom de l'utilisateur pour toutes les actualités
function setUtilisateurName()
	{
	var UtilisateurName="";
	$.ajax({
		url: '/Commentaire/GetUtilisateurCommentaireSessionName',
		type: 'POST',
		success: function(data) {
				UtilisateurName=data.UtilisateurSessionName;
				$(".TbxUtilisateurCommentaire").val(UtilisateurName);
		                }
		            });


	}

// Fonction permettant d'incrémenter d'une unité le compteur de commentaires pour une actualité
function setCommentaireCount(ActualiteId)
	{
	var oldValueLink=$("#linkShowCommentaires_"+ActualiteId).val();
	var patternCommentaire=" commentaire(s)";
	var newValeur=parseInt(oldValueLink.replace(patternCommentaire,''))+1;
	$("#linkShowCommentaires_"+ActualiteId).val(newValeur+patternCommentaire);
	}



// Fonction permettant de créer un commentaire sur une actualité
function creerCommentaire(ActualiteId,isPopUp)
	{
	var facteurPopUp="";
	if(isPopUp)
	{
		facteurPopUp="PopUp";
	}
	var Utilisateur= $("#tbxUtilisateur"+facteurPopUp+"_"+ActualiteId).val();
	var Message= $("#tbxMessage"+facteurPopUp+"_"+ActualiteId).val();



	var MessageErreur="Erreur lors de la création du commentaire :"
	var isModelOK=true;

	// On vérifie qu'un nom d'utilisateur a été mis
	if(Utilisateur.trim().length==0)
	{
		isModelOK=false;
		MessageErreur=MessageErreur+"</br> - Un nom d'utilisateur est requis"
	}
	// On vérifie qu'un message a été mis
	if(Message.trim().length==0)
	{
		isModelOK=false;
		MessageErreur=MessageErreur+"</br> - Un commentaire est requis"
	}
	if(isModelOK)
	{
		$.ajax({
		                url: '/Commentaire/CreerCommentairePost',
		                type: 'POST',
		                data: { 'Utilisateur' : Utilisateur, 'Message' : Message , 'ActualiteId' : ActualiteId  },
		                success: function(data) {
		                    // On met à jour la partie liste des commentaires
		                    notificationOK('Le commentaire a été ajouté avec succès');
		                    $('#divPartialListCommentaires'+facteurPopUp+'_'+ActualiteId).html(data);
		                    setUtilisateurName();
		                    setCommentaireCount(ActualiteId);

		                },
			        error: function (ex) {
			                    notificationKO('Erreur lors de la création du commentaire.' + ex);
			          }
		            });
	  }
	  else
	  {
	  	notificationKO(MessageErreur);
	  }
	  


	}

// MAJ des couleurs des div pour les commentaires
function setCommentsColors()
	  {
	  $('.divCommentaire').removeClass('divCommentaire').addClass('divCommentaireArticle');
	  $('.divListeCommentaires').removeClass('divListeCommentaires').addClass('divListeCommentairesArticle');
	  }