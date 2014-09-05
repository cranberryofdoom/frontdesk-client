define([
  'jquery',
  'backbone',
  'hbs!templates/sign_in',
  'views/alerts',
  ], function($, Backbone, signInTemplate, AlertsView){
    var SignInView = Backbone.View.extend({
      el: $('#container'),
      events: {
      },
      render: function(){
        this.$el.html(signInTemplate());
      }
    });
    return SignInView;
  });