!function ($) {

  var register = function(){

    $(document).on('click', '.nav-list LI A', function(event) {

      $('.nav-pane').hide();
      $('.nav-list LI').removeClass('active');
      
      var $e = $(event.currentTarget);
      $e.closest('LI').addClass('active');
      $("#" + $e.data("toggle")).show();
      
      event.preventDefault();
    });
  }

  // Plugin initialization on DOM ready
  $(document).ready(function($) {
    register();
  });
  
}(window.jQuery);