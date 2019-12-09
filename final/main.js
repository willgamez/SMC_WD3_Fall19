var cart = document.getElementById("cart");
var cart1= 0;

$(document).ready(function(){
    $("#myModal").modal('show');
});

$('.alert').alert()

$(document).ready(function() {
    $(".navbar-toggler").click(function() {
      $(".navbar-toggler-icon").toggleClass("active");
    });
  });

  $(document).ready(function() {
    $(".checkout").click(function() {
      $(".checkout-toggler-icon").toggleClass("active");
    });
  });

   $(document).ready(function(){
                $('.AddButton').click( function() {
                  console.log('BUY EVERYTHING');
                  cart1 += 1;
                  document.getElementById("cart").innerHTML = cart1;
                });
            });

            $('.modaladdbutton').on('click', function(){
              $('.modal-body').parents()
              console.log('toggle everything');
              cart1 += 1;
              document.getElementById("cart").innerHTML = cart1;
                
            });
            
            
                