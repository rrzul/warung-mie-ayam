const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static('assets'));

// Route utama
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});

