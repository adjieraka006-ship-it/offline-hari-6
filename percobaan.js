
const prompt = require("prompt-sync")();


const jalankanKalkulator = () => {
  console.log("   Kalkulator Sederhana JS   ");

  // 1. Meminta input dari pengguna
  const angka1 = parseFloat(prompt("Masukkan angka pertama: "));
  const operator = prompt("Pilih operator (+, -, *, /): ");
  const angka2 = parseFloat(prompt("Masukkan angka kedua: "));
}

  // Variabel untuk menyimpan hasil perhitungan
  let hasil;

  switch (operator) {
    case "+":
      hasil = angka1 + angka2;
      break;
    case "-":
      hasil = angka1 - angka2;
      break;
    case "*":
      hasil = angka1 * angka2;
      break;
    case "/":
     


  
  console.log(`✅ Hasil dari ${angka1} ${operator} ${angka2} adalah: ${hasil}`);

};

// --- Menjalankan program ---
jalankanKalkulator();

