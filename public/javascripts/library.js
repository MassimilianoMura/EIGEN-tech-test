'use strict';

$(document).ready(function () {
  $('.nav li').click(function() {
    $('.nav li').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
      $this.addClass('active');
    }
  });
});

$(document).on('click','.navbar-collapse.in', function (e) {
  if( $(e.target).is('a') ) {
    $(this).collapse('hide');
  }
});