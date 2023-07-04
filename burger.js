$(document).ready(function () {
  $("#burger").click(function (event) {
    $(".slider").addClass("activ");
  });
  $(".closeSlider").click(function () {
    $(".slider").removeClass("activ");
  });
});
