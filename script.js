// Menambahkan interaksi untuk konfirmasi pemesanan tiket
document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk refresh halaman
    document.getElementById("confirmation").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("confirmation").classList.add("hidden");
    }, 3000); // Sembunyikan konfirmasi setelah 3 detik
});
