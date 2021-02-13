var modal = document.getElementById("modal");
var hargaSaham = document.getElementById("hargaSaham");
var biaya = document.getElementById("biaya");
var pajak = document.getElementById("pajak");
var totalBiaya = document.getElementById("totalBiaya");
var fee = 0;

if (rowModal) {
  if (window.getComputedStyle(rowModal).display === "none") {
    jual();
  } else {
    beli();
  }
}

function calculate() {
  if (hargaSaham.value > 0) {
    if (fee == 0.0019) {
      jumlahLot.value = Math.floor(
        (modal.value - modal.value * fee) / hargaSaham.value / 100
      );
      biaya.value = jumlahLot.value * hargaSaham.value * 100;
      pajak.value = biaya.value * fee;
      totalBiaya.value =
        parseFloat(biaya.value, 10) + parseFloat(pajak.value, 10);
    } else {
      biaya.value = jumlahLot.value * hargaSaham.value * 100;
      pajak.value = biaya.value * fee;
      totalBiaya.value =
        parseFloat(biaya.value, 10) - parseFloat(pajak.value, 10);
    }
  }
}

function beli() {
  fee = 0.0019;

  $("#totalLabel").html("Total biaya");
  $("#jumlahLot").attr("readonly", "");
  $("#rowBiaya").show();
  $("#rowModal").show();
  $("#lotLabel").html("Jumlah lot bisa dibeli");
  $("#labelKalkulator").html("Beli Saham");

  calculate();
}

function jual() {
  fee = 0.0029;

  $("#totalLabel").html("Total penjualan");
  $("#jumlahLot").removeAttr("readonly");
  $("#rowBiaya").hide();
  $("#rowModal").hide();
  $("#lotLabel").html("Masukan jumlah lot");
  $("#labelKalkulator").html("Jual Saham");

  calculate();
}
