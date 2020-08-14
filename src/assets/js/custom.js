new WOW().init();

//Input-Link

$(function() {
  $("#upload_link").on("click", function(e) {
    e.preventDefault();
    $("#upload:hidden").trigger("click");
  });
});

//Datepicker

$(function() {
  $(".datepicker").datepicker({
    changeMonth: true,
    changeYear: true
  });
});
