$(document).ready(function() {
  $('.notification').hide()
  $('#alert, #error').css({
    transition: "transform .7s ease-in-out",
    transform: "translateX(" + 400 + "px)"
  })

  setTimeout(function () {

    $('#success').slideToggle(250)


    setTimeout(function () {
      $('#alert').show().css({
        transition: "transform .7s ease-in-out",
        transform: "translateX(" + 0 + "px)"
      })
    }, 250);

    setTimeout(function () {
      $('#error').show().css({
        transition: "transform .7s ease-in-out",
        transform: "translateX(" + 0 + "px)"
      })
    }, 500);

  }, 800);



  $('.notification').each(function (i) {

    $(this).click(() => {
      $('#error').show().css({
        transition: "transform .7s ease-in-out",
        transform: "translateX(" + 400 + "px)"
      })

      setTimeout(function () {
        $('#alert').show().css({
          transition: "transform .7s ease-in-out",
          transform: "translateX(" + 400 + "px)"
        })
      }, 250);

      setTimeout(function () {
        $('#success').slideToggle()
      }, 500);

    })
  })

});
