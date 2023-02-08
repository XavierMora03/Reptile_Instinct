//jshint esversion:6
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static("/home/xavier/reptile/"));

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "storeAdmin",
  password: "test",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let myquery =
    "INSERT INTO store.reptiles(name,regularPrice,price,age,description,genre) VALUES('piton bobola', '6000', '4500', 'Cria', 'esta bn', 'H')";
  con.query(myquery, (err, res) => {
    if (err) throw err;
    console.log(res);
  });

  con.query("SELECT * FROM store.reptiles", (err, res) => {
    if (err) throw err;
    console.log("este es el resultado epico");
    console.log(res);
    console.log(typeof res);

    console.log("este es el numero 3", res[2].id);
  });
});

app.get("/", (req, res) => {
  console.log("ahuveo jajajaj");
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname);
});

app.get("/shop", (req, res) => {
  getProduct(
    "vivora",
    "./images/1.jpg",
    "$60",
    "$30",
    "sale",
    "venggan perrros hoijos de su puta madre"
  ).then((producto) => {
    ejs
      .renderFile(__dirname + "/templates/shop_template.ejs", {
        _products: producto,
      })
      .then((finalstr) => {
        res.send(finalstr);
      });
  });
});

app.listen(3000, (e) => {
  console.log("Lisenting on port 3000", e);
});

function getProduct(
  mname,
  path,
  price,
  regularPrice = null,
  badge = null,
  icons = null
) {
  console.log(__dirname);
  var rendered = ejs.renderFile(__dirname + "/templates/objects/item.ejs", {
    _name: mname,
    _imagePath: path,
    _price: price,
    _regularPrice: regularPrice,
    _badge: badge,
    _icons: icons,
  });
  console.log(rendered);
  return rendered;
}
