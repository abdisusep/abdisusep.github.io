$(document).ready(function () {

  $('#download-resume').click(function () {
    //download resume
  });

  $('#send-email').click(function () {
   //send email
  });

  // aos
  AOS.init();
  // end

  // add border-bottom when scroll
  $(window).scroll(function(){
    if($(window).scrollTop() < 50){
      $('#mynavbar').removeClass('border-bottom border-light');
    }else{
      $('#mynavbar').addClass('border-bottom border-light');
    }
  });
  // end

  // close collapse 
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });
  // end

  // active button filterable
  $('.btn-filter').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  // end


  // filterable portfolio
  var $grid = $('.item-filter').isotope({});
  // filter items on button click
  $('.menu-filter').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  // end

});
