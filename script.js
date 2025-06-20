const formDaftar = document.getElementById("formDaftar");
const nomorAnggota = document.getElementById("nomorAnggota");

formDaftar.addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;
  const nohp = document.getElementById("nohp").value;

  const timestamp = Date.now();
  const kodeUnik = nama.substring(0, 3).toUpperCase();
  const nomor = `BM-${kodeUnik}-${timestamp.toString().slice(-4)}`;

  nomorAnggota.innerText = `Pendaftaran berhasil! Nomor Anggota Anda: ${nomor}`;
  formDaftar.reset();
});

const formSetoran = document.getElementById("formSetoran");
formSetoran.addEventListener("submit", function (e) {
  e.preventDefault();
  const anggotaId = document.getElementById("anggotaId").value;
  const jenis = document.getElementById("jenisSetoran").value;
  const jumlah = document.getElementById("jumlah").value;

  alert(`Setoran ${jenis} sebesar Rp${jumlah} untuk anggota ${anggotaId} berhasil disimpan.`);
  formSetoran.reset();
});

const formPinjam = document.getElementById("formPinjam");
formPinjam.addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document.getElementById("idPinjam").value;
  const jenis = document.getElementById("jenisPinjam").value;
  const jumlah = document.getElementById("jumlahPinjam").value;

  alert(`${jenis} sebesar Rp${jumlah} untuk ${id} telah dicatat.`);
  formPinjam.reset();
});
