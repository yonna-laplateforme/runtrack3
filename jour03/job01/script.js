$(document).ready(function () {
  $('p').hide();
  $("#btn-1").click(function () {
    $("p").show();
  });
  $("#btn-2").click(function () {
    $("p").hide();
  });
});
