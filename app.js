$(document).ready(function () {





  $('body').append("<div id='div-id'></div>");
  


  let btnSubmit = $("#btnSubmit")

  btnSubmit.click((e) => {
   e.preventDefault();
   $('#div-id').append($("<h1></h1>").text($('#form-info').val()));
  });


  $('#form-info').keyup(function () {
    if ($(this).val() === '') {
      btnSubmit.attr('disabled', true);
    } else {
      btnSubmit.attr('disabled', false);
    }
  });
  // e.preventDefault();
  // $('#div-id').append($('<h1></h1>').text($('#first').val()));
});




