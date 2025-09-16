        const tambah = (a, b) => a + b;
        const kurang = (a, b) => a - b;
        const kali   = (a, b) => a * b;
        const bagi   = (a, b) => (b === 0 ? "Error: Tidak bisa dibagi 0" : a / b);

        // Fungsi `hitung` yang dipanggil oleh tombol di HTML
        function hitung() {
            // 1. Mengambil elemen dari HTML menggunakan DOM Selection
            const inputAngka1 = document.getElementById('angka1');
            const inputAngka2 = document.getElementById('angka2');
            const operatorSelect = document.getElementById('operator');
            const hasilDiv = document.getElementById('hasil');

            // 2. Mengambil NILAI dari elemen dan mengubahnya menjadi angka (float)
            const angka1 = parseFloat(inputAngka1.value);
            const angka2 = parseFloat(inputAngka2.value);
            const operator = operatorSelect.value;

          
            // 3. Menghitung hasil (logika switch tetap sama)
            let hasil;
            switch (operator) {
              case "+": hasil = tambah(angka1, angka2); break;
              case "-": hasil = kurang(angka1, angka2); break;
              case "*": hasil = kali(angka1, angka2); break;
              case "/": hasil = bagi(angka1, angka2); break;
              default : hasil = "Operator tidak valid!";
            }

            // 4. Menampilkan hasil ke dalam div#hasil di halaman web
            hasilDiv.style.color = "#289aa7ff"; 
            hasilDiv.textContent = `Hasil: ${hasil}`;
        }