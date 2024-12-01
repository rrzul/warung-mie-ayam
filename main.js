// Fungsi untuk menambah produk ke keranjang belanja
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (event) => {
      // Mengambil nama produk yang diklik
      const productName = event.target.closest('.product-item').querySelector('h3').innerText;
      
      // Menampilkan pesan kepada pengguna
      alert(`${productName} berhasil ditambahkan ke keranjang!`);
      
      // Untuk demonstrasi, kita akan simulasikan penambahan ke keranjang
      // Biasanya, di aplikasi nyata ini akan melibatkan penyimpanan di session storage/local storage atau database
      addToCart(productName);
    });
  });
  
  // Fungsi untuk menambahkan item ke keranjang (simulasi)
  function addToCart(productName) {
    // Mendapatkan keranjang dari localStorage (simulasi penyimpanan)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Menambah produk ke keranjang
    cart.push(productName);
  
    // Menyimpan kembali keranjang yang sudah diperbarui
    localStorage.setItem('cart', JSON.stringify(cart));
  
    // Menampilkan jumlah produk di keranjang
    updateCartCount();
  }
  
  // Fungsi untuk memperbarui jumlah item di keranjang
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;  // Menampilkan jumlah item di keranjang
  }
  
  // Memperbarui jumlah keranjang saat halaman dimuat
  document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();  // Memperbarui jumlah keranjang
  });
  