

	
	
	function initModal()
	{
		      $('#Achat').click(function () {
            // update the block message
            var Budget = $("#Budget_Achat_cache").html();
            var idPartie = $("#idPartie_Achat_cache").html();
            var idJoueur = $("#idJoueur_Achat_cache").html();
            var idClubPartie = $("#idClub_Achat_cache").html();

            var iBudget = Budget.trim().replace(' ', '').replace(' ', '').replace(' ', '').replace(',', '.');
            var iProposition = $("#TbxProposition_Achat").val().trim().replace(' ', '').replace(' ', '').replace(' ', '').replace(',', '.');


            if (isNaN(iProposition) || iProposition<0 || iProposition=='') {
                $('#warning_Achat').html('<span style="color:red">Veuillez renter un nombre valide<span>');
            }
            else if (parseFloat(iProposition) > parseFloat(iBudget)) {
                $('#warning_Achat').html('<span style="color:red">La proposition dépasse le budget transfert restant<span>');
            }
            else {
                $.ajax({
                    type: 'POST',
                    url: '@Url.Action("CreerPropositionTransfertJoueurAsync", "Transfert")',
                    dataType: "json",
                    data: { sidClub: idClubPartie, fProposition: iProposition, sidJoueur: idJoueur, sidPartie: idPartie },
                    success: function (Retour) {

                        $('#warning_Achat').html('<span style="color:green">La proposition a été envoyée au club<span>');
                        var BoutonAchat = document.getElementById("Achat");
                        BoutonAchat.style.display = 'None';
                        var BoutonAbandon = document.getElementById("Abandon_Achat");
                        BoutonAbandon.style.display = 'None';
                        var BoutonRetour = document.getElementById("Retour_Achat");
                        BoutonRetour.style.display = 'inline';
                        var TbxProposition = document.getElementById("TbxProposition_Achat");
                        TbxProposition.disabled = true;
                        var IconeAchat = document.getElementById("link_achat_" + idJoueur);
                        IconeAchat.style.display = 'None';
                        var IconeAnnulation = document.getElementById("link_annuler_achat_" + idJoueur);
                        IconeAnnulation.style.display = 'inline';
                        $('#span_annulation_proposition_' + idJoueur).attr("title","Annuler la proposition de transfert de "+Retour+" euros");

                    },
                    error: function (xhr, status, error) {
                        var ex = xhr.responseText;
                        alert('Erreur lors de la création de la demande transfert.' + ex);
                    }
                });

            }


        });



        $('#Abandon_Achat').click(function () {
            $.unblockUI();
            return false;
        });

        $('#Retour_Achat').click(function () {
            $.unblockUI();
            return false;
        });

        $('#Renouvellement').click(function () {
            // update the block message

          

            var Salaire = $("#salaire_renouvellement_cache").html();
            var DateFinContrat = $("#datefincontrat_renouvellement_cache").html();
            var idPartie = $("#idPartie_renouvellement_cache").html();
            var idJoueur = $("#idJoueur_renouvellement_cache").html();
            var idClubPartie = $("#idClub_renouvellement_cache").html();




        });


        $('#Abandon_renouvellement').click(function () {
            $.unblockUI();
            return false;
        });

        $('#Retour_renouvellement').click(function () {
            $.unblockUI();
            return false;
        });
		
	}