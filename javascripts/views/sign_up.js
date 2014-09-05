define([
  'jquery',
  'backbone',
  'hbs!templates/sign_up',
  'views/alerts',
  'views/admin_setup'
  ], function($, Backbone, signUpTemplate, AlertsView, AdminSetupView){
    var SignUpView = Backbone.View.extend({
      el: $('#container'),
      events: {
        'submit #form-sign-up': 'submitForm'
      },
      render: function(){
        this.$el.html(signUpTemplate());
      },
      submitForm: function(){
        Backbone.history.navigate("/admin_setup", {trigger: true});
        return false;
      }
    });
    return SignUpView;
  });