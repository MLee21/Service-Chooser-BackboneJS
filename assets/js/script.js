$(function(){

  var Service = BackBone.Model.extend({
    defaults:{
      title: "My service",
      price: 100,
      checked: false
    },

    toggle: function() {
      this.set('checked', !this.get('checked'));
    }

  });

  var ServiceList = Backbone.Collection.extend({
    model: Service,

    getChecked: function() {
      return this.where({checked:true});
    }
  });

  var services = new ServiceList([
    new Service({ title: 'web development', price: 200 }),
    new Service({ title: 'web design', price: 250 }),
    new Service({ title: 'photography', price: 100 }),
    new Service({ title: 'coffee drinking', price: 10 })
  ]);

  var ServiceView = Backbone.View.extend({
    tagName: 'li',

    events:{
      'click': 'toggleService'
    },

    initialize: function(){
      this.listenTo(this.model, 'change', this.render);
    },

  });







});