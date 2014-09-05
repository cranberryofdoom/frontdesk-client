define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  'hbs!templates/admin_setup',
  'views/alerts'
  ], function($, _, Backbone, Bootstrap, adminSetupTemplate, AlertsView){
    var AdminSetupView = Backbone.View.extend({
      el: $('#container'),
      events: {
      },
      render: function(){
        this.$el.html(adminSetupTemplate());
      }
    });
    return AdminSetupView;
  });