var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var pug = require("pug");
var _ = require("lodash");

app.set('view engine', 'pug');
app.use("/assets", express.static('assets'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  var result = pug.compileFile("html/index.pug")({
    title: "Chat"
  });

  res.set({
    'Content-Type': 'text/html'
  }).send(result);
});

app.post("/send-message", function(req, res) {
  if (req.body && req.body.message) {
    console.log(req.body.message);
  } else {
    res.status(500).json({
      "success": false,
      "message": "Mesaj alınamadı"
    });
  }
});

app.listen(3000);

console.log("Uygulama 3000 üzerinde çalışmaya başladı...");



