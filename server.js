//jshint esversion:6
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const ejs = require("ejs");
const mariadb = require("mariadb");

app.set("view engine", "ejs");
app.use(express.static("/home/xavier/reptile/"));

const pool = mariadb.createPool({
  host: "localhost",
  user: "storeAdmin",
  password: "test",
  connectionLimit: 5,
  database: "store",
  connectTimeout: 300,
});

async function asyncFunction() {
  console.log("iniciando jejej");
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM reptiles");
    console.log(rows); //[ {val: 1}, meta: ... ]
    console.log("ESTO FUE TODO DE LOS REPTILES AMIGOS"); //[ {val: 1}, meta: ... ]
    const res = await conn.query(
      "INSERT INTO store.reptiles(name,regularPrice,price,age,description,genre) VALUES('asdf','asdf,'asdf','adsf',asdf','sdfa')"
    );
    console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  } catch (err) {
    throw err;
  } finally {
    if (conn) return conn.end();
  }
}
asyncFunction();
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
