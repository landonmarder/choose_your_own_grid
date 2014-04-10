//= require "lib/jquery-1.10.2"
//= require "lib/rainbow-custom.min"
//= require_tree .

$(function(){
  $('.row').on('click', function(){
    var explanation = this.children[2];
  });
});
