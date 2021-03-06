// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devour").on("click", function(event) {
  
        let id = $(this).data("id");
        let letsEat = $(this).data("devoured");
  
        if (!letsEat) {
          letsEat = true
        } else (
          letsEat = false
        )
  
        let letsEatState = {
        devoured: letsEat
        };
  
        $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: letsEatState
        }).then(
        function() {
            location.reload();
        }
        );
    });
      $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#burgerName").val().trim(),
          devoured: 0
        }
    
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
      $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    });