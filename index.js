const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Upload the file to uploads directory (if directory does not exist, it creates one first) and send the file name, type, and size to client
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send('No file uploaded');
  }
  const fileInfo = {
    name: file.originalname,
    type: file.mimetype,
    size: file.size
  }
  res.json(fileInfo)
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
