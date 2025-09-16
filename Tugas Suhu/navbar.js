// --- KODE UNTUK MEMBUAT NAVBAR ---
function createNavbar() {
    // Data untuk link navigasi
    const navItems = [
        { text: 'Home', href: '#' },
        { text: 'About', href: '#' },
        { text: 'Service', href: '#' },
        { text: 'Contact', href: '#' }
    ];

    // 1. Pilih kontainer di HTML
    const navbarContainer = document.getElementById('navbar-container');

    // 2. Buat elemen-elemen navbar
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const ul = document.createElement('ul');

    // 3. Loop untuk membuat setiap item menu (li dan a)
    navItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.text;
        a.href = item.href;
        li.appendChild(a);
        ul.appendChild(li);
    });

    // 4. Gabungkan elemen dan sisipkan ke dalam kontainer
    nav.appendChild(ul);
    navbarContainer.appendChild(nav);
}

// Menjalankan fungsi createNavbar saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', createNavbar);
