;(function(factory){
if(typeof define == 'function' && define.amd){
    //seajs or requirejs environment
    define(['jquery', 'class'], factory);
}else if(typeof module === 'object' && typeof module.exports == 'object'){
    module.exports = factory(
        require('jquery'),
        require('class'),
        require('overlay')
    );
}else{
    factory(window.jQuery, window.jQuery.klass, window.jQuery.overlay);
}
})(function($, Class, Overlay){
return Class.$factory('mask', Overlay, {
    initialize: function(opt){
        var options = $.extend({
            dom: null,
            container: document.body,
            color: '#000',
            opacity: 0.6,
            autoOpen: true
        }, opt || {});

        this._super({
            container: options.dom || options.container,
            autoOpen: options.autoOpen,
            className: 'ui3-mask'
        });

        this.setOpacity(options.opacity);
        this.setColor(options.color);
        this.css({
            left: 0,
            top: 0,
            zIndex: 10000
        });
        this.initEvent();
    },

    initEvent: function(){
        var self = this;

        self.o2s(window, 'resize', function(){
            self.setSize();
        });
    },

    setOpacity: function(opacity){
        this.css('opacity', opacity);
    },

    setColor: function(color){
        this.css('backgroundColor', color);
    },

    setSize: function(){
        var container = this.container;

        if(Overlay.isDocumentOrBody(container)){
            container = $(document);
        }

        this.css({
            width: container.outerWidth(),
            height: container.outerHeight()
        });
    }
});
});