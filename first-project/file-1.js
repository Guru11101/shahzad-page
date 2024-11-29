$(document).ready(function() {
  // Function to handle the menu visibility
  function handleMenuVisibility() {
    if ($(window).width() > 991) {
      $(".menu-open").show(); // Show the menu if above 767px
    } else {
      $(".menu-open").hide(); // Hide the menu if below 767px
    }
  }

  // Initial check on page load
  handleMenuVisibility();

  // Toggle menu on mobile menu icon click
  $(".mobile-menu-icon").click(function() {
    if ($(window).width() <= 991) {
      $(".menu-open").toggle();
    }
  });

  // Hide menu when clicking outside of it
  $(document).click(function(event) {
    if (!$(event.target).closest('.mobile-menu-icon, .menu-open').length && $(window).width() <= 767) {
      $(".menu-open").hide();
    }
  });

  // Handle window resize
  $(window).resize(function() {
    handleMenuVisibility();
  });
});


// $(".mobile-menu-icon").click(function(){
//   $(".menu-open").toggle();
// });