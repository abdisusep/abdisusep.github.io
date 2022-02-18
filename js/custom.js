AOS.init();

$(document).ready(function () {
  var navbar = $('#mynavbar');
    $(window).scroll(function(){
        if($(window).scrollTop() < 50){
          navbar.removeClass('border-bottom border-light');
        }else{
          navbar.addClass('border-bottom border-light');
        }
    });

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    // filterable portfolio
    $('.btn-filter').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
      
    });
    // end


    var $grid = $('.item-filter').isotope({
      // options
    });
    // filter items on button click
    $('.menu-filter').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

});