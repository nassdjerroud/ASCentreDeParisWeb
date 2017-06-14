

$.validator.methods.number = function (value, element) {
    if (!isNaN(Globalize.parseFloat(value))) {
        return true;
    }
    return false;
};
$.validator.methods.date = function (value, element) {
    if (Globalize.parseDate(value) != null) {
        return true;
    }
    return false;
};
jQuery.extend(jQuery.validator.methods, {
    range: function (value, element, param) {
        var val = Globalize.parseFloat(value);
        return this.optional(element) || (val >= param[0] && val <= param[1]);
    }
});

// Application du datepicker a toutes les classes .date
//$(function InitDatePickers() {
//    $(".input-group.date")
//        .datepicker($.extend({
//            changeYear: true,
//            onClose: function () {
//                $(".input-group.date").valid();
//            }
//        }, $.datepicker.regional["fr"]));
//});

// Culture fr-FR
$(function InitCulture() {
    Globalize.culture('fr-FR');
});
