;(function(factory){
if(typeof define == 'function' && define.amd){
    //seajs or requirejs environment
    define(['jquery', 'class', 'overlay'], factory);
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
return Class.$factory('mask', {
    initialize: function(opt){
        var options = $.extend({
            dom: null,
            container: document.body,
            color: '#000',
            opacity: 0.6,
            autoOpen: true
        }, opt || {});

        this.$overlay = new Overlay({
            container: options.dom || options.container,
            autoOpen: options.autoOpen,
            className: 'ui3-mask'
        });

        this.setOpacity(options.opacity);
        this.setColor(options.color);
        this.initEvent();
    },

    initEvent: function(){
        var self = this;

        self.o2s(window, 'resize', function(){
            self.$overlay.setSize(false, false);
        });
    },

    setOpacity: function(opacity){
        this.$overlay.css('opacity', opacity);
    },

    setColor: function(color){
        this.$overlay.css('backgroundColor', color);
    },

    destroy: function(){
        this.$overlay.destroy();
        this.$overlay = null;
        this.ofs(window, 'resize');
    }
});
});