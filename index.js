const students = ["Mikael", "Sarah", "Mikaya", "Budi", "Mamika"];

const ubahHurufKeKecil = (huruf) => {
  const kodeHuruf = huruf.charCodeAt(0);

  const hasilHuruf =
    kodeHuruf >= 65 && kodeHuruf <= 90
      ? String.fromCharCode(kodeHuruf + 32)
      : huruf;

  return hasilHuruf;
};

const ubahSemuaHuruf = (kata) => {
  let kataBaru = "";

  for (let i = 0; i < kata.length; i++) {
    const hurufKecil = ubahHurufKeKecil(kata[i]);
    kataBaru = kataBaru + hurufKecil;
  }

  return kataBaru;
};

const apakahCocok = (satu,dua) {

}

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
