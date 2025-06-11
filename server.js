const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const IMAGES_DIR = path.join(__dirname, 'images', 'funny');

app.use('/images', express.static(IMAGES_DIR));
app.use(express.static(__dirname)); // to serve index.html

// API to list image files
app.get('/api/images', (req, res) => {
  fs.readdir(IMAGES_DIR, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to scan images folder' });
    }
    const imageFiles = files.filter(file =>
      ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(path.extname(file).toLowerCase())
    );
    res.json(imageFiles);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
