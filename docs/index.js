$(document).ready(function() {
  console.log('Document Ready');

  $('.notification').hide()

  $('#btn').click(() => {
    $('#left').slideToggle(250)

    setTimeout(function () {
      $('#author').slideToggle(250)
    }, 250);

    setTimeout(function () {
      $('#right').slideToggle(250)
    }, 500);
  })



});
