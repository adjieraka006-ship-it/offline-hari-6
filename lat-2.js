const user = {
  name: 'Budi',
  sayHi: function() {
    console.log(`Halo, nama saya ${this.name}`); // 'this' masih merujuk ke 'user'

    setTimeout(function(){
      // Arrow function 'mewarisi' this dari lingkup luarnya (yaitu fungsi sayHi)
      // Jadi, 'this' di sini tetap merujuk ke 'user'
      console.log(`Setelah 1 detik, nama saya ${this.name}`); 
    }, 1000);
  }
};

user.sayHi();
