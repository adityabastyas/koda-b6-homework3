const students = [
  "Mikael",
  "aDiT",
  "BasTyAS",
  "muLya",
  "sAkuRA",
  "Sarah",
  "Mikaya",
  "Budi",
  "Mamika",
];

const chars = {
  A: "a",
  B: "b",
  C: "c",
  D: "d",
  E: "e",
  F: "f",
  G: "g",
  H: "h",
  I: "i",
  J: "j",
  K: "k",
  L: "l",
  M: "m",
  N: "n",
  O: "o",
  P: "p",
  Q: "q",
  R: "r",
  S: "s",
  T: "t",
  U: "u",
  V: "v",
  W: "w",
  X: "x",
  Y: "y",
  Z: "z",
};

const ubahHurufKeKecil = (huruf) => {
  if (chars[huruf]) {
    return chars[huruf];
  } else {
    return huruf;
  }
};

const ubahSemuaHuruf = (kata) => {
  let kataBaru = "";

  for (let i = 0; i < kata.length; i++) {
    const hurufKecil = ubahHurufKeKecil(kata[i]);
    kataBaru = kataBaru + hurufKecil;
  }

  return kataBaru;
};

const apakahCocok = (namaSiswa, kataYangDicari) => {
  const namaKecil = ubahSemuaHuruf(namaSiswa);
  const cariKecil = ubahSemuaHuruf(kataYangDicari);

  for (let posisi = 0; posisi < namaKecil.length; posisi++) {
    let cocok = true;

    for (let j = 0; j < cariKecil.length; j++) {
      if (namaKecil[posisi + j] !== cariKecil[j]) {
        cocok = false;
      }
    }
    if (cocok) {
      return true;
    }
  }

  return false;
};

const countResults = (hasil) => {
  console.log(`Ditemukan ${hasil.length} hasil pencarian`);
};

const searchStudent = (yangDicari, fungsiCallback) => {
  let hasilCari = [];

  for (let i = 0; i < students.length; i++) {
    const nama = students[i];

    if (apakahCocok(nama, yangDicari)) {
      hasilCari = [...hasilCari, nama];
    }
  }

  console.log(hasilCari);

  fungsiCallback(hasilCari);

  return hasilCari;
};

searchStudent("mika", countResults);
