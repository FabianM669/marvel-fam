var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var utils = require('../utils/utils.js');
var HeroPickView = require('../heroPick/HeroPickView.js');
var searchController = require('../heroPick/searchController.js');

// This is the battle setup view

var BattleSetupView = Backbone.View.extend({

    template: _.template(require('./BattleSetupView.html')),

    events: {
        'click .statBattleButton': 'onStatButtonClick',
        'click .turnBattleButton': 'onTurnBattleClick',
        'click .randomPickButton': 'onRandomBattleClick'
    },

    onStatButtonClick: function () {
        if ((this.heroPick1.withHero === true) && (this.heroPick2.withHero === true)) {
            window.location.hash = '/battleSpace/'
                + this.heroPick1.model.get('id') + '/'
                + this.heroPick2.model.get('id') + '/stats';
        };
    },

    onTurnBattleClick: function () {
        if ((this.heroPick1.withHero === true) && (this.heroPick2.withHero === true)) {
            window.location.hash = '/battleSpace/'
                + this.heroPick1.model.get('id') + '/'
                + this.heroPick2.model.get('id') + '/turn';
        };

    },

    onRandomBattleClick: function () {
        console.log( "this button is soooo random" );
    },


    initialize: function (options) {

        if (options.withHero === true) {
            this.heroPick1 = new HeroPickView({model: options.model1});
            this.heroPick2 = new HeroPickView();

        } else {

            this.heroPick1 = new HeroPickView();
            this.heroPick2 = new HeroPickView();

        }

        this.$el.append(this.template());

        this.$el.find('.character_1').append(this.heroPick1.$el);

        this.$el.find('.character_2').append(this.heroPick2.$el);

        // this.$el.find('.bio_img').css({
        //     'background-image': "url('" + this.model.get('thumbnail') +
        //     '.' + this.model.get('extension') + "')" });

    },

    render: function () {

    },

    clickPick1: function () {

    },

    remove: function () {
        this.heroPick1.remove();
        this.heroPick2.remove();
        searchController.enable();
        Backbone.View.prototype.remove.call(this);
    }


});

module.exports = BattleSetupView;



