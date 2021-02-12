$(".button").click(function () {
  var buttonId = $(this).attr("id");
  var buttonKey = $(this).attr("key");
  $("#modal-container").removeAttr("class").addClass(buttonId);
  $("body").addClass("modal-active");

  $(".stock-code").html(list_saham[buttonKey].code);
  $(".stock-prev-close").html(list_saham[buttonKey].previous_close);
  $(".stock-open").html(list_saham[buttonKey].open_price);
  $(".stock-high").html(list_saham[buttonKey].high);
  $(".stock-low").html(list_saham[buttonKey].low);
  $(".stock-close").html(list_saham[buttonKey].close);
  $(".stock-change").html(list_saham[buttonKey].change);
  $(".stock-volume").html(list_saham[buttonKey].volume);
});

$("#modal-container").click(function () {
  $(this).addClass("out");
  $("body").removeClass("modal-active");
});
