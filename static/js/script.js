var modal = document.getElementById("modal");
var hargaSaham = document.getElementById("hargaSaham");
var jumlahLot = document.getElementById("jumlahLot");
var biaya = document.getElementById("biaya");
var pajak = document.getElementById("pajak");
var totalBiaya = document.getElementById("totalBiaya");
var totalLabel = document.getElementById("totalLabel");
var lotLabel = document.getElementById("lotLabel");
var rowBiaya = document.getElementById("rowBiaya");
var rowModal = document.getElementById("rowModal");
var labelKalkulator = document.getElementById("labelKalkulator");
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
  totalLabel.innerHTML = "Total biaya";
  jumlahLot.setAttribute("readonly", "true");
  rowBiaya.style.display = "contents";
  rowModal.style.display = "contents";
  lotLabel.innerHTML = "Jumlah lot bisa dibeli";
  labelKalkulator.innerHTML = "Beli Saham";

  calculate();
}

function jual() {
  fee = 0.0029;
  totalLabel.innerHTML = "Total penjualan";
  jumlahLot.removeAttribute("readonly");
  rowBiaya.style.display = "none";
  rowModal.style.display = "none";
  lotLabel.innerHTML = "Masukan jumlah lot";
  labelKalkulator.innerHTML = "Jual Saham";

  calculate();
}
