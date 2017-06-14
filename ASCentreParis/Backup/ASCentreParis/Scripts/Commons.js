

   function enableResultat(enable) {
	
        if (enable) {
            $("#VueRecherche").removeClass("disabled");
            $('#loading').hide();
        }
        else {
            $("#VueRecherche").addClass("disabled");
            $('#loading').show();
        }
	
    }


     // Gestion de la pagination de la DataTable
    function setPagination(infos,nbPagesTotal) {
        if (total < infos.length || infos.length < 0)
            $('#table_id_paginate').hide();
        else {
            $('ul.pagination li').remove();
            if (infos.page > 0) {
                $('ul.pagination').append($('<li class="first"><a href="#"><i class="glyphicon glyphicon-fast-backward"></i></a></li>'));
                $('ul.pagination').append($('<li class="prev"><a href="#"><i class="glyphicon glyphicon-step-backward"></i></a></li>'));
            }

            var start = infos.page < 3 ? 0 : infos.page - 2,
                end = Math.min(nbPagesTotal - 1, infos.page < 3 ? 4 : infos.page + 2);
            for (var i = start;i <= end; i++) {
                $('ul.pagination').append($('<li' + (i == infos.page ? ' class="active"' : '') + '><a href="#">' + (i + 1) + '</a></li>'));
            }

            if (infos.page < nbPagesTotal - 1) {
                $('ul.pagination').append($('<li class="next"><a href="#"><i class="glyphicon glyphicon-step-forward"></i></a></li>'));
                $('ul.pagination').append($('<li class="last"><a href="#"><i class="glyphicon glyphicon-fast-forward"></i></a></li>'));
            }
            $('#table_id_paginate').show();
        }
    }

    // fonction permettant de mettre des séparateurs de milliers
    function lisibilite_nombre(nbr)
{
		var nombre = ''+nbr;
		var retour = '';
		var count=0;
		for(var i=nombre.length-1 ; i>=0 ; i--)
		{
			if(count!=0 && count % 3 == 0)
				retour = nombre[i]+' '+retour ;
			else
				retour = nombre[i]+retour ;
			count++;
		}
		//alert('nb : '+nbr+' => '+retour);
		return retour;
}


    function set_display(first, last) {
      $('#content').children().css('display', 'none');
      $('#content').children().slice(first, last).css('display', 'block');
    }

    function previous(){
        if($('.active').prev('.page_link').length) go_to_page(current_page - 1);
    }

    function next(){
        if($('.active').next('.page_link').length) go_to_page(current_page + 1);
    }

    function go_to_page(page_num){
      current_page = page_num;
      start_from = current_page * show_per_page;
      end_on = start_from + show_per_page;
      set_display(start_from, end_on);
      $('.active').removeClass('active');
      $('#id' + page_num).addClass('active');
    }  

// Fonction permettant de fermer la modale
function fermerModal()
	      		 {

	      		 $('#modal-container').hide();
	             $('.modal-backdrop').hide();
				}

// Fermeture de la modale d'administration
function fermerModalAdministration()
		{
			fermerModal();
			// refresh de la datatble
			refreshDataTable('table_id');
	        // On remet l'ancienne class à la modale
	    	$('#modal-dialog').removeClass('MediumModal').addClass('LargeModal');
		}



// Message à l'utilisateur lorsqu'une action est correctement réalisée
function notificationOK(message)
	      		 {
	      		 toastr.options = {
					  "closeButton": false,
					  "debug": false,
					  "newestOnTop": false,
					  "progressBar": false,
					  "positionClass": "toast-top-right",
					  "preventDuplicates": false,
					  "onclick": null,
					  "showDuration": "300",
					  "hideDuration": "1000",
					  "timeOut": "7000",
					  "extendedTimeOut": "1000",
					  "showEasing": "swing",
					  "hideEasing": "linear",
					  "showMethod": "fadeIn",
					  "hideMethod": "fadeOut"
					}
	      		 toastr.success(message) 
				}

// Message à l'utilisateur lorsqu'une action n'est pas correctement réalisée
function notificationKO(message)
	      		 {
	      		 toastr.options = {
					  "closeButton": false,
					  "debug": false,
					  "newestOnTop": false,
					  "progressBar": false,
					  "positionClass": "toast-top-right",
					  "preventDuplicates": false,
					  "onclick": null,
					  "showDuration": "300",
					  "hideDuration": "1000",
					  "timeOut": "20000",
					  "extendedTimeOut": "1000",
					  "showEasing": "swing",
					  "hideEasing": "linear",
					  "showMethod": "fadeIn",
					  "hideMethod": "fadeOut"
					}
	      		 toastr.error(message) 
				}

// Fonction permettant d'ouvrir une pop-up de gestion d'une equipe
function ouvrirFormulaireCreation(_Action,_Controller,_idElement) 
	{
                var parametreURL='';
                if(_idElement!= undefined && _idElement>0)
                    {
                    parametreURL='?idElement=' + _idElement
                    }
	            $('#modal-dialog').removeClass('LargeModal').addClass('MediumModal');
	            var url='/'+_Controller+'/'+_Action+parametreURL;
	           $('.modal-content').load(url);
			    $('#modal-container').animate({
	                    scrollTop: 0
	                }, 800);
		        $('#modal-container').modal({ show: true });
	}

// Fonction permettant de supprimer un élément
function supprimerElement(_Action,_Controller,_idElement,_Libelle) 
	{
	var url='/'+_Controller+'/'+_Action
	var message="Confirmez-vous la suppression de l'élément ayant pour id "+_idElement;
	if(_Libelle!=undefined  &&  _Libelle!='')
	        {
	         message=message+" et pour libellé '"+_Libelle+"'";
	        }
     var confirmation = confirm(message+" ?");
	
	 if(confirmation)
	        {
	        $.ajax({
		           "url": url,
		           "type": "POST",
	                dataType: "json",
	                data: { idElement: _idElement },
	                success: function (Data) 
	                               {
	                                if (Data.Retour) 
	                                   {
                                       //total -= 1;
                                        refreshDataTable('table_id');
					notificationOK("L'élément a été supprimé avec succès.");
                                       } 
	                               else 
	                                    {
	                                   	notificationKO("Erreur lors de la suppression de l'élément. "+Data.Message);
                                        }
	                                },
	                error: function (ex) {
	                    notificationKO('Erreur lors de la suppression du document.' + ex);
	                }
	            });
	       }
	}

// Fonction permettant de raffraichir une datatable
function refreshDataTable(table_id)
{
 	//$('#'+table_id).dataTable().fnDraw(false);
 	loadTable();
}

 // Fonction générique permettant de mettre à jour un document dans un formulaire du menu administration
 function MAJDocument(controller,TypeDocument,Chapitre)
	{	                    
	       	var success=true;
	        // On récupère le fichier chargé
	        var formData = new FormData();
            var totalFiles = document.getElementById("FileUpload"+TypeDocument).files.length;
            for (var i = 0; i < totalFiles; i++)
            {
                var file = document.getElementById("FileUpload"+TypeDocument).files[i];
                formData.append("FileUpload", file);
            
		        // Appel serveur
		        var urlServeur='/'+controller+'/UploadDocument'+TypeDocument+Chapitre;
		        $.ajax({
	                type: "POST",
	                url: urlServeur,
	                data: formData,
	                dataType: 'json',
	                contentType: false,
	                processData: false,
	                success: function (data) {
	                    if(data.result=="KO"){
		                    success=false;
	                    	notificationKO("Erreur lors de l'import du fichier de type "+TypeDocument+". "+data.message);
	                	}
						else if(data.result=="OK"){
	                    	notificationOK("Le fichier de type "+TypeDocument+" a été chargé avec succès.");
	                    	// On cache la partie upload et on affiche le nom du fichier chargé
	                    	$('#upload_document_'+TypeDocument).hide();
	                    	$('#suppression_document_'+TypeDocument).show();
	                    	var nomLbl='LblNomFichier'+TypeDocument;
	     			if(document.getElementById(nomLbl)!=undefined)
	                    		{
	       				document.getElementById(nomLbl).innerHTML=data.fileName;
	       				}
	                	}
		
	                },
	                error: function (error) {
		                success=false;
	                    notificationKO("Erreur lors de l'import du fichier de type "+TypeDocument+". "+error);
	                }
	            });
	     }
	return success;
    }


function getInfosModel(_model)
{
		                    	var mode=_model.ModePage;
		                    	var id=_model.Actualite.Id;
		                    //	alert('mode :'+mode);
		                    //	alert('id :'+id);
}
// Getsion d'un formulaire contenant des fichiers
function gestionFormulaireAvecFichiers(controller,chapitre,documents)
{
	        var _model=$('#MyForm').serialize();
	        $.ajax({
	                url: '/'+ controller+'/Gerer'+chapitre+'Post',
	                type: 'POST',
	                data: _model,
	                success: function(data) {
	                        if(data!=undefined)
	                        {
		                        // MAJ des documents
		                        documents.forEach(function(document) {
		                        	MAJDocument(controller,document,chapitre);
						});
					// Refresh de la page mère
					btnRecherche_onclick();
		                    	// On met à jour la modale
		                    	$('#form-container').html(data);
		             

		                    	// On scroll en haut afin que l'utilisateur puisse voir le résultat de son action
		                    	$('#modal-container').animate({
				                    scrollTop: 0
				                	}, 800);
		                	}
	                        else
	                        {
					notificationKO('Erreur lors de la validation du formulaire.');
		                }	
	                },
		            error: function (ex) {
		                    notificationKO('Erreur lors de la validation du formulaire.' + ex);
		                }
	            });
}
// Initialisation du formulaire avec fichiers obligatoires et optionnels
function initformWithFiles(controller,chapitre,MandatoryFiles,OptionnalFiles)	
{

	 // L'action submit du formulaire est désactivée pour être remplacée par une action customisée.
	$('#MyForm').submit(function(e) {
			e.preventDefault();
			var areFilesUploaded=true;
			var typeDocumentObligatoireNonCharge="";
			// On parcourt les fichiers du formulaire, et on regarde s'ils sont bien chargés
			 MandatoryFiles.forEach(function(document) {
		            var nomLbl='LblNomFichier'+document;
					// On regarde si un fichier est déja présent ou si un fichier a été chargé
	     			if($('#'+nomLbl).text()=="N/A" && ($('#infoFichier').html()== undefined ||  $('#infoFichier').html()=='') )
	                    {
	       				areFilesUploaded=false;
	       				typeDocumentObligatoireNonCharge=document;
	       				}
			});
			// Si tous les fichiers sont chargés, on continue
			if(areFilesUploaded)
			{
				// Concaténation des deux tableaux de documents
			    var documents=MandatoryFiles.concat(OptionnalFiles); 
		    	gestionFormulaireAvecFichiers(controller,chapitre,documents);
		    }
		    // Sinon, on arrete et on envoie un warning
		    else
		    {
		    	notificationKO("Il est obligatoire de charger un fichier de type "+typeDocumentObligatoireNonCharge+" afin d'effectuer une sauvegarde");
		    }
		});
}



// Suppression d'un fichier du  formulaire
function supprimerFichier(_Controller,_Chapitre,_idElement,_TypeDocument)
{
    var nomLbl='LblNomFichier'+_TypeDocument;
    //var txtValue = $('#'+nomLbl).text();
    //alert('avant :'+txtValue);
 	//$('#'+nomLbl).text("test");
 	var message="Confirmez-vous la suppression du fichier?";
 	var confirmation = confirm(message);
	
	if(confirmation)
		{
  		$.ajax({
	  		url: '/'+ _Controller+'/SupprimerFichier'+_Chapitre,
	  		type: 'POST',
	        dataType: "json",
	        data: { idElement: _idElement,TypeDocument: _TypeDocument },
	  		success: function (data) {
	                    if(!data.Retour){
	                    	notificationKO("Erreur lors de la suppression du fichier. "+data.message);
	                	}
						else {
	                    	notificationOK("Le fichier a été supprimé avec succès.");

	                    	// On cache les infos sur l'ancien dichier et on affiche la partie permettant de charger un fichier
	                    	$('#upload_document_'+_TypeDocument).show();
	                    	$('#suppression_document_'+_TypeDocument).hide();
	                    	// on écrase le label contenant le nom du fichier
	                    	$('#'+nomLbl).text("N/A");
	                	}
		
	                },
	           error: function (ex) {
		       	notificationKO('Erreur lors de la suppression du document.' + ex);
		        }
	  	});
	  }
}

// Affichage des informations sur un fichier
function GetFileInfo (fileInput,info) {
            var fileInput = document.getElementById(fileInput);

            var message = "";
            if ('files' in fileInput) {
                if (fileInput.files.length == 0) {
                    message = "Please browse for one or more files.";
                } else {
                    for (var i = 0; i < fileInput.files.length; i++) {
                        message += "<br /><b>Informations sur le fichier :</b><br />";
                        var file = fileInput.files[i];
                        if ('name' in file) {
                            message += "Nom : " + file.name + "<br />";
                        }
                        else {
                            message += "Nom : " + file.fileName + "<br />";
                        }
                        if ('size' in file) {
                            message += "Taille : " + file.size + " bytes <br />";
                        }
                        else {
                            message += "Taille : " + file.fileSize + " bytes <br />";
                        }
                        if ('mediaType' in file) {
                            message += "type: " + file.mediaType + "<br />";
                        }
                    }
                }
            } 
            else {
                if (fileInput.value == "") {
                    message += "Please browse for one or more files.";
                    message += "<br />Use the Control or Shift key for multiple selection.";
                }
                else {
                    message += "Your browser doesn't support the files property!";
                    message += "<br />The path of the selected file: " + fileInput.value;
                }
            }

            var info = document.getElementById(info);
            info.innerHTML = message;
        }