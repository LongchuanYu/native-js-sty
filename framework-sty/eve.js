(function($, window, document, undefined ){
    var Eve = {
        init: function(){
            console.log(this)
        },
        getName: '2'
    }
    $.fn.eveIt = function(){
        var eveit = Object.create(Eve);
        console.log(eveit);
    }
})(jQuery, window, document)
