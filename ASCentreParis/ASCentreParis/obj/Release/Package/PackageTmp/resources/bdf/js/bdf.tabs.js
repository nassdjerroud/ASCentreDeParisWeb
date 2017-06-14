$(function () {

    /*
     * Make bootstrap pages remember which tab they were on!
    */
    $('a[data-toggle="tab"]').on('shown.bs.tab', function () {
        //save the latest tab; use cookies if you like 'em better:
        $.Storage.set('lastTab', $(this).attr('href'));
    });

});