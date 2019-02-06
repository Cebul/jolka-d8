jQuery(document).ready(function($) {
  $('#block-jolka-main-menu li').hover(function() {
    $(this).find('.sub-menu').toggle();
  });
});
