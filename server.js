//Imports
var express = require('express');
var app = express();

var upload = require('express-fileupload')
app.use(upload())

//Start server
const PORT = 1000;
var server = app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html")
})

app.post("/", (req, res) => {
  if (req.files) {
    var file = req.files.filename,
        filename = req.files.filename.name;
    file.mv("./upload/"+filename, (err) => {
      if (err){
        res.send(err)
      }
    else {
      res.sendFile(__dirname + "/html/index.html")
      console.log("uploaded file")
    }
  })
  }
})
