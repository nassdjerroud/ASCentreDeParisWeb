	// VARIABLES
	var reenable = false;  
	var isSorting = false;
    var nbPagesTotal = 0;
    var total = 0;
    var tableTop = -1;
    var currentPage = 0;
    var sortColumn = -1;
    var sortDirection = true;
    var sSearch = '';
    var idToDelete = -1;
    var selectedSaisies = {};
    var firstSelectionValidation = true;
    var firstLoad = true;


          // Retourne un objet contenant les valeurs sélectionnées pour chaque filtre ainsi que les paramètres actuels de la datatable
    function getFiltres() {
        return {
            _sortColumn: sortColumn,
            _sortDirection: sortDirection,
            _search: sSearch
        }
    };



// Gestion des évènements
function setEvents() {
        nbPagesTotal = Math.ceil(total / $('#table_id_length select').val());
        tableTop = $('#table_id').offset().top;
        var infos = $('#table_id').DataTable().page.info();

        currentPage = infos.page;

        $('#table_id_filter input').unbind();
        $('#table_id_filter input').bind('keyup', function (e) {
            if (e.keyCode == 13) {
                sSearch = $('#table_id_filter input').val();
                loadTable();
            }
        });
        $('#table_id_filter > label > .rechercheLibre').on('click', function (e) {
            sSearch = $('#table_id_filter input').val();
            loadTable();
        });

        $('#table_id thead').on('click', 'th', function () {
            if (!isSorting) {
                if ($(this).hasClass("nosort")) // Pas de tri sur les colonnes marquées par la classe "nosort"
                    return;

                if (sortColumn == this.cellIndex)
                    sortDirection = !sortDirection;
                else {
                    sortColumn = this.cellIndex;
                    sortDirection = true;
                }

                $('#table_id th.sortableColumn').css('background-image', 'url(../resources/img/sort_none.png)');
                $(this).css('background-image', 'url(../resources/img/sort_' + (sortDirection ? 'a' : 'de') + 'sc.png)');

                isSorting = true;
                loadTable();
            }
        });

        setPagination(infos,nbPagesTotal);
        $('ul.pagination li').on('click', function (e) {
            reenable = true;
            enableResultat(false);

            var classe = $(this).attr("class");
            var active = parseInt($('ul.pagination li.active').find('a').text());
            var pageToSelect;
            switch(classe) {
                case 'first': pageToSelect = 0; break;
                case 'prev': pageToSelect = active - 2; break;
                case 'next': pageToSelect = active; break;
                case 'last': pageToSelect = nbPagesTotal - 1; break;
                default: pageToSelect = parseInt($(this).find('a').text()) - 1; break;
            }

            if (pageToSelect >= 0)
                $('#table_id').dataTable().fnPageChange(pageToSelect);
        });

        $('#table_id_length select').change(function () {
            reenable = true;
            enableResultat(false);
        });
    }
	



// Initialisation de la datatable
function initTable() {
	   var filtres = getFiltres();
	
        return $('#table_id').dataTable({
            "autoWidth": false,
            "processing": true,     // control the processing indicator.
            "serverSide": true,     // recommended to use serverSide when data is more than 10000 rows for performance reasons
            "info": true,           // control table information display field
            "stateSave": false,     //restore table state on page reload,
            "lengthMenu": [[10, 25, 100, -1], [10, 25, 100, "Tous"]],    // use the first inner array as the page length values and the second inner array as the displayed options
            "ajax": {
                "url": '/Administration/RechercheActualitesAjax',
                "type": "POST",
                "data": { "filtres": filtres }
            },
            "aaSorting": [],
	        "columns": [
			             {
                    "mRender": function (data, type, row) {
                        var render = '';

                        var texte = '';
                        if( row.Id ) {
                            texte = row.Id;
                        }

                        render += "<label id='lblId' class='notEditable' style='font-weight: normal;'>" + texte + "</label>";
                        return render;
                    },
                    "orderable": true,
                    "sClass": "td-align-right"
                }
	           ,
	                {
                    "mRender": function (data, type, row) {
                        var render = '';

                        var texte = '';
                        if( row.LibelleEquipe ) {
                            texte = row.LibelleEquipe;
                        }

                        render += "<label id='lblLibelleEquipe'  class='notEditable' style='font-weight: normal;'>" + texte + "</label>";
                        return render;
                    },
                    "orderable": true,
                    "sClass": "td-align-left"
                }
		           ,
                {
                    "mRender": function (data, type, row) {
                        var render = '';

                        var texte = '';
                        if( row.Titre ) {
                            texte = row.Titre;
                        }

                        render += "<label id='lblTitre"+row.Id+"'  class='notEditable' style='font-weight: normal;'>" + texte + "</label>";
                        return render;
                    },
                    "orderable": true,
                    "sClass": "td-align-left"
                }
		           ,
                {
                    "mRender": function (data, type, row) {
                        var render = '';

                        var texte = '';
                        if( row.Resume ) {
                            texte = row.Resume;
                        }

                        render += "<label id='lblResume'  class='notEditable' style='font-weight: normal;'>" + texte + "</label>";
                        return render;
                    },
                    "orderable": true,
                    "sClass": "td-align-left"
                }
		        ,
	             {
                    "mRender": function (data, type, row) {
                        var render = '';

                        var texte = '';
                        if( row.strDateCreation ) {
                            texte = row.strDateCreation;
                        }

                        render += "<label id='lblDateCreation' class='notEditable' style='font-weight: normal;'>" + texte + "</label>";
                        return render;
                    },
                    "orderable": true,
                    "sClass": "td-align-center"
                }
		            ,

	             {
                    "mRender": function (data, type, row) {
                        var render = '';

                        var texte = '';
                        if( row.CheminDocument) {
                            texte = row.CheminDocument;
						}

	                    render += "<label id='lblURL"+row.Id+"' class='notEditable' style='font-weight: normal;'>" + texte + "</label>";
                        return render;
                    },
                    "orderable": true,
                    "sClass": "td-align-left"
                }
		            ,
                {
                    "mRender": function (data, type, row) {
                        var render = '';
                            render += '<a class="actionButtons" href="#" ';
                            render += '	onclick="javascript:ouvrirFormulaireCreation(\'GererActualite\',\'Administration\','+row.Id+')"';
                            render += '	>';
                            render += '	<img src="../resources/img/pencil.png" title="Modifier l\'élément"/>';
                            render += '</a>';
                            render += ' ';
                            render += '<a class="actionButtons" href="#" style="margin-left:8px;"';
                            render += '	onclick="javascript:supprimerElement(\'SupprimerActualite\',\'Administration\','+row.Id+',\''+row.Titre.replace("'"," ")+'\');"';
                            render += '	>';
                            render += '	<img src="../resources/img/cross.png" title="Supprimer l\'élément"/>';
                            render += '</a>';
                        //render += "<img src='../resources/img/ok.png' title='Enregistrer la modification' class='editButtons btnSave' style='display: none;padding-right: 5px; cursor:pointer'/><img src='../resources/img/notok.png' title='Annuler la modification' class='editButtons btnUndo' style='display: none; cursor:pointer'/>";
                        return render;
                    },
                    "orderable": false,
                    "sClass": "td-align-center"
                }
            ],
            "aoColumnDefs": [
                {
                    'bSortable': false,
                    'aTargets': ['nosort'],
                }
            ],
            "drawCallback": function (oSettings) {
	  
                if (reenable && !isSorting) {
                    enableResultat(true);
                    reenable = false;
                }
                isSorting = false;

                setEvents();
                if (sortColumn == -1)
                    $('#table_id th.sortableColumn').css('background-image', 'url(../resources/img/sort_none.png)');

	   
            },
            "fnInfoCallback": function( oSettings, iStart, iEnd, iMax, iTotal, sPre ) {
       
	           var infos = $('#table_id').DataTable().page.info();
                var end = 0;
                if (infos.length > 0) {
                    end = total > infos.length ? ((infos.page + 1) * infos.length) : total;
                    end = end > total ? total : end;
                }
                else end = total;

                if (((infos.page * infos.length) + 1) > end)
                {
                    if (infos.page > 1)
                    {
                        return "";
                    }
                }
	       
                return 'Affichage ' + ((infos.page * infos.length) + 1) + ' à ' + end + ' sur ' + total + ' enregistrement(s)';

	         },
            "fnInitComplete": function (settings, json) {
	          
                total = json.NbResultatTotal;

                if (total == 0) {
                   // $('#divAucunResultat').show();
                   // $('#VueRecherche').hide();
                }
                else {
                    $('#divAucunResultat').hide();
                     $('#VueRecherche').show();

                    var infos = $('#table_id').DataTable().page.info();
                    nbPagesTotal = Math.ceil(total / infos.length);

                    var end = total > infos.length ? ((infos.page + 1) * infos.length) : total;
                    $('#table_id_info').html('Affichage ' + ((infos.page * infos.length) + 1) + ' à ' + end + ' sur ' + total + ' enregistrement(s)');

                    if (total > 2000) {
                        $('#table_id_length option[value="-1"]').text('2000');
                        $('#table_id_length option[value="-1"]').val('2000');
                    }
				setEvents();
                }

                enableResultat(true);
	    
            },
            "oLanguage": {
                "sZeroRecords": "Aucun résultat sur cette page de résultat."
            }
        });
    }



// Lancement de la recherche
 function btnRecherche_onclick() {
        sortColumn = -1;
        sSearch = '';
       loadTable();
    }



// chargement de la table
 function loadTable() {
        enableResultat(false);
	    if($('#table_id').dataTable!=undefined)
            $('#table_id').dataTable().fnDestroy();
        initTable();
        $('#table_id_filter input').before("<span class='bdf-datatable-filtre'>Filtre </span>");
        $('#table_id_filter input').after(" <span class='glyphicon glyphicon-search rechercheLibre' style='font-size:14px;vertical-align:sub;color:black;cursor:pointer'></span>");
        $('#table_id_filter input').attr("placeholder","Éléments recherchés...");
        if (firstLoad) {
            $('#table_id_filter input').val('');
            $('#table_id th.sortableColumn').css('background-image', 'url(../resources/img/sort_none.png)');

            $('#table_id').dataTable().fnPageChange(0);

            firstLoad = false;
        }
        else {
            $('#table_id_filter input').val(sSearch);
        }
    }
