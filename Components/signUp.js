
// $("#Password").keyup(function(e) {
  //   var ptrn = /^([0-9]*)$/;
  //   if (ptrn.test($("#Password").val())) {
  //     $(".Password").addClass("d-none");
  //   } else {
  //     $(".Password").removeClass("d-none");
  //   }
  // });
$(document).ready(function() {
  $("#submit").click(function(e) {

    let ptrn = /^[0-9]{5}(-){1}[0-9]{7}(-){1}\d{1}$/;
    if (ptrn.test($("#Cnic").val())) {
      $(".Cnic").addClass("d-none");
    } else {
      $(".Cnic").removeClass("d-none");
      e.preventDefault();
      
    }
 
   ptrn = /^[A-za-z]*[0-9]*[@]{1}[A-za-z]*(.com){1}$/;
  if (ptrn.test($("#Email").val())) {
    $(".Email").addClass("d-none");
  } else {
    $(".Email").removeClass("d-none");
    e.preventDefault();
   
  }
   ptrn = /^[0-9]{8,}$/;
    if (ptrn.test($("#Password").val())) {
      $(".Password").addClass("d-none");
    } else {
      $(".Password").removeClass("d-none");
      e.preventDefault();
    }

  })});