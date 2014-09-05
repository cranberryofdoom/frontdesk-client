define([
  'jquery',
  'underscore',
  'backbone',
  'hbs!templates/index',
  'views/alerts'
  ], function($, _, Backbone, indexTemplate, AlertsView){
    var IndexView = Backbone.View.extend({
      el: $('#container'),
      events: {
      },
      render: function(){
        this.$el.html(indexTemplate());
      }
    });
    return IndexView;
  });