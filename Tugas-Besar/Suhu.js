function konversi() {
            // 1. Mengambil elemen & nilainya dari HTML
            const inputSuhu = parseFloat(document.getElementById('inputSuhu').value);
            const dariSatuan = document.getElementById('dariSatuan').value;
            const keSatuan = document.getElementById('keSatuan').value;
            const hasilDiv = document.getElementById('hasil');

            // Validasi jika input kosong
            if (isNaN(inputSuhu)) {
                hasilDiv.textContent = "Masukkan angka yang valid!";
                hasilDiv.style.color = "red";
                return;
            }
            
            hasilDiv.style.color = "#007bff"; // Kembalikan warna jika sukses

            // Jika satuan sama, tidak perlu konversi
            if (dariSatuan === keSatuan) {
                hasilDiv.textContent = `${inputSuhu.toFixed(2)} °${keSatuan.charAt(0).toUpperCase()}`;
                return;
            }

            // 2. Konversi semua input ke basis Celsius terlebih dahulu
            let suhuCelsius;
            switch (dariSatuan) {
                case 'celsius':
                    suhuCelsius = inputSuhu;
                    break;
                case 'fahrenheit':
                    suhuCelsius = (inputSuhu - 32) * 5 / 9;
                    break;
                case 'kelvin':
                    suhuCelsius = inputSuhu - 273.15;
                    break;
                case 'reamur':
                    suhuCelsius = inputSuhu * 5 / 4;
                    break;
            }

            // 3. Konversi dari Celsius ke satuan target
            let hasilAkhir;
            switch (keSatuan) {
                case 'celsius':
                    hasilAkhir = suhuCelsius;
                    break;
                case 'fahrenheit':
                    hasilAkhir = (suhuCelsius * 9 / 5) + 32;
                    break;
                case 'kelvin':
                    hasilAkhir = suhuCelsius + 273.15;
                    break;
                case 'reamur':
                    hasilAkhir = suhuCelsius * 4 / 5;
                    break;
            }

            // 4. Tampilkan hasil
            // toFixed(2) untuk membulatkan menjadi 2 angka di belakang koma
            hasilDiv.textContent = `${hasilAkhir.toFixed(2)}`;
        }