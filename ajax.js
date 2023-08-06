$(document).ready(function() {
    $('button').click(function(event) {
      // Prevent the button from submitting normally
      event.preventDefault();

      // Get the button value
      var buttonValue = $(this).val();

      // Send the button value to the server
      $.ajax({
        type: 'POST',
        url: 'path.php',
        data: { button: buttonValue },
        success: function(response) {
          // Handle the server response
          console.log(response);
        }
      });
    });
  });