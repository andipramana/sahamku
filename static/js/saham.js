url = "get_list_saham";

modalType = ["one", "two", "six", "seven", "five"];

fetch(url)
  .then((response) => response.json())
  .then((listSaham) => {
    setListData(listSaham);

    $(".button").click(function () {
      var buttonId = $(this).attr("id");
      var buttonKey = $(this).attr("key");
      $("#modal-container").removeAttr("class").addClass(buttonId);
      $("body").addClass("modal-active");

      setModalData(listSaham[buttonKey]);
    });
  });

$("#modal-container").click(function () {
  $(this).addClass("out");
  $("body").removeClass("modal-active");
});

function setModalData(saham) {
  $(".stock-code").html(saham.code);
  $(".stock-prev-close").html(saham.previous_close);
  $(".stock-open").html(saham.open_price);
  $(".stock-high").html(saham.high);
  $(".stock-low").html(saham.low);
  $(".stock-close").html(saham.close);
  $(".stock-change").html(saham.change);
  $(".stock-volume").html(saham.volume);
}

function setListData(listSaham) {
  // prettier-ignore
  var theader =
    `<tr>
      <td colspan=4>
      <h1 style="text-align: center;">List Saham</h1>
      </td>
      </tr>
    <tr id="theader">
      <th class="row-w">Code</th>
      <th class="row-w">Last Price</th>
      <th class="row-w">Change</th>
      <th class="row-w">Volume</th>
    </tr>`;

  // prettier-ignore
  var tfooter =
    `<tr>
      <td><br /></td>
    </tr>
    <tr>
      <td><br /></td>
    </tr>
    <tr>
      <td colspan=4>
      <a href="/kalkulator" class="btn btn--stripe btn--radius">Kalkulator</a>
      </td>
    </tr>`;

  var tableData = theader;

  for (let i = 0; i < listSaham.length; i++) {
    // prettier-ignore
    tableData +=
      `<tr class="button c-pointer" id=${modalType[i]} key=${i}>
        <td class="row-w">${listSaham[i].code}</td>
        <td class="row-w right">${listSaham[i].close}</td>
        <td class="row-w right">${listSaham[i].change}</td>
        <td class="row-w right">${listSaham[i].volume}</td>
      </tr>
      `;
  }

  tableData += tfooter;

  $("#table").html(tableData);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
