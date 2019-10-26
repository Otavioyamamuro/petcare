$(document).ready(function () {

  $(window).scroll(function () {
    var win = $(window);
    var page = {
      top: win.scrollTop(),
      left: win.scrollLeft()
    };
    if (page.top >= 250) {
      $('.site-top-nav').addClass('is-fixed');
      $('.site-top-nav').removeClass('nop')
      $('#sidebar-toggle').removeClass('logo-white')
      $('#sidebar-toggle').addClass('logo-black')
      $('.nav-menu li a').css({
        color: '#818285'
      })
      $('.back-button').css({
        color: '#818285'
      })
    } else {
      if ($(".site-top-nav").hasClass("is-fixed")) {
        $('.site-top-nav').removeClass('is-fixed')
        $('.site-top-nav').addClass('nop')
        $('#sidebar-toggle').removeClass('logo-black')
        $('#sidebar-toggle').addClass('logo-white')
        $('.nav-menu li a').css({
          color: 'white'
        })
        $('.back-button').css({
          color: 'white'
        })
      }
    }
    if (page.top < 160) {
      if ($(".site-top-nav").hasClass("nop")) {
        $('.site-top-nav').removeClass('nop')
      }
    }
  });
});
