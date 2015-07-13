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









});