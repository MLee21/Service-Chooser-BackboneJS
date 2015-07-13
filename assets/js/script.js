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











});