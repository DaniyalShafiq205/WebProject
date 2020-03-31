$(document).ready(function() {
    $("#submit").click(function(e) {
    //   if (Cnic && Email && Password) {
    //     console.log(e);
    //     
    //   }
      
    //   console.log($("#Email").val());
    //   console.log($("#Password").val());
    let ptrn = /^[A-za-z]*[0-9]*[@]{1}[A-za-z]*(.com){1}$/;
    if (ptrn.test($("#Email").val())) {
      $(".Email").addClass("d-none");
    } else {
        e.preventDefault();
      $(".Email").removeClass("d-none");
      
    }
     ptrn = /^[0-9]{8,}$/;
      if (ptrn.test($("#Password").val())) {
        $(".Password").addClass("d-none");
      } else {
        
        $(".Password").removeClass("d-none");
      }

    });
  
    // $("#Email").blur(function(e) {
      
    // });
  
    // $("#Password").keyup(function(e) {
      
    // });
  });
  