define([
  'jquery',
  'underscore',
  'backbone',
  'views/navbar',
  'views/index',
  'views/sign_in',
  'views/sign_up',
  'views/admin_setup'
  ], function($, _, Backbone, NavbarView, IndexView, SignInView, SignUpView, AdminSetupView){
    var AppRouter = Backbone.Router.extend({
      routes: {
        '': 'index',
        'sign_in': 'signIn',
        'sign_up': 'signUp',
        'admin_setup': 'adminSetup',
        '*actions': 'defaultAction'
      },
      index: function(){
        var indexView = new IndexView();
        indexView.render();
      },
      signIn: function(){
        var signInView = new SignInView();
        signInView.render();
      },
      signUp: function(){
        var signUpView = new SignUpView();
        signUpView.render();
      },
      adminSetup: function(){
        var adminSetupView = new AdminSetupView();
        adminSetupView.render();
      }
    });

    var initialize = function(){
      new AppRouter();
      var navbarView = new NavbarView();
      navbarView.render();
      Backbone.history.start();
    };
    return {
      initialize: initialize
    };
  });