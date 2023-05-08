//jshint esversion:6
const databaseQueries = require("./database-queries");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static("/home/xavier/reptile/"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/shop", (req, res) => {
  getProduct(
    "vivora",
    "./images/1.jpg",
    "$60",
    "$30",
    "sale",
    "text-sample"
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
