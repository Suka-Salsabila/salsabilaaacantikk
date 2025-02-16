// Ambil elemen tombol dan teks
const loveButton = document.querySelector('.love-button');
const greeting = document.querySelector('.greeting');

// Tambahkan event listener ke tombol
loveButton.addEventListener('click', () => {
    // Sembunyikan tombol
    loveButton.style.display = 'none';

    // Tampilkan teks
    greeting.classList.add('show');

    // Fungsi untuk membuat balon
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`; // Warna acak
        balloon.style.animationDuration = `${Math.random() * 4 + 3}s`;
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(balloon);

        // Hapus balon setelah animasi selesai
        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }

    // Buat balon setiap 500ms
    setInterval(createBalloon, 500);
});