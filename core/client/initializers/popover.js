import BodyEventListener from 'ghost/mixins/body-event-listener';

var PopoverService = Ember.Object.extend(Ember.Evented, BodyEventListener, {
    bodyClick: function (event) {
        /*jshint unused:false */
        this.closePopovers();
    },
    closePopovers: function () {
        this.trigger('close');
    },
    togglePopover: function (popoverName) {
        this.trigger('toggle', {target: popoverName});
    }
});

export default {
    name: 'popover',

    initialize: function (container, application) {
        application.register('popover:service', PopoverService);

        application.inject('component:gh-popover', 'popover', 'popover:service');
        application.inject('component:gh-popover-button', 'popover', 'popover:service');
    }
};