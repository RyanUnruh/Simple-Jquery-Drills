$(document).ready(function () {

  // Button
  let btnSubmit = $("#btnSubmit")

  // Append li to ul

  $('body').append("<ul id='ul-id'></ul>");
  btnSubmit.click((e) => {
    e.preventDefault();

    let element = $('<li class="li"></li>')
    $('#ul-id').append(element.text($('#form-info').val()))

    // Change BG color of list item
    element.click(function () {
      element.css({
        "background-color": getRandomColor(),
        "border-radius": "5px",
        "width": "10%"
      })
    });
// sdfgjkajk
    element.dblclick(function () {
      element.remove();
    });


    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }



    function setRandomColor() {
      $("#colorpad").css("background-color", getRandomColor());
    }

  });

  // Disable
  $('#form-info').keyup(function () {
    if ($(this).val() === '') {
      btnSubmit.attr('disabled', true);
    } else {
      btnSubmit.attr('disabled', false);
    }
  });

});




