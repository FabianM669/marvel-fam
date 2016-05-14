var _ = require('underscore');
var $ = require('jquery');
var Backbone = require('backbone');
var pDataCollection = require('../pDataCollection.js');
var dispatcher = require('../router/dispatcher.js');


var MainView = Backbone.View.extend({

    className: 'main-dock',

    template: _.template(require('./MainView.html')),

    events: {
        'click .charactersButton': 'onCharactersClick',
        'click .matchupButton': 'onBattleSetupClick'
    },

    onCharactersClick: function () {
        window.location.hash = 'searchFull';
    },

    onBattleSetupClick: function () {
        window.location.hash = 'battleSetup';
    },

    initialize: function () {
        this.$el.html(this.template());
        $('body').append(this.$el);


        pDataCollection.fetch({ data: { limit: 5, order: 'desc' } });

        this.listenTo(dispatcher, 'show', this.show);
    },

    show: function (view) {
        if (this.savedView) {
            this.savedView.remove();
        };

        view.render();
        $('.entry-point').append(view.$el);
        this.savedView = view;
    },

    render: function () {
    }

});

module.exports = MainView;
