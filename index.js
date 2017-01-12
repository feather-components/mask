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
    },

    initEvent: function(){
        var self = this;

        self.o2s(window, 'resize', function(){
            self.setSize(false, false);
        });
    },

    setOpacity: function(opacity){
        this.css('opacity', opacity);
    },

    setColor: function(color){
        this.css('backgroundColor', color);
    },

    destroy: function(){
        this._super.destroy.call(this);
        this.ofs(window, 'resize');
    }
});
});