const prompt = require("prompt-sync")();

const luasLingkaran = function(jariJari) {return Math.PI * Math.pow(jariJari, 2);
};

let jariJariInput = parseFloat(prompt("masukan panjang jari-jari lingkaran:"));
const hasilLuas = luasLingkaran(jariJariInput);

console.log(`Luas lingkaran dengan jari-jari ${jariJariInput} adalah: ${hasilLuas}`);