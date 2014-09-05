define([
  'jquery',
  'underscore',
  'backbone',
  'hbs!templates/navbar',
  'views/alerts'
  ], function($, _, Backbone, navbarTemplate, AlertsView){
    var NavbarView = Backbone.View.extend({
      el: $('#navbar'),
      events: {
      },
      render: function(){
        this.$el.html(navbarTemplate());
      }
    });
    return NavbarView;
  });