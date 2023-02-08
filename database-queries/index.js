var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "storeAdmin",
  password: "test",
});

exports.select = function() {
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // let myquery =
    //   "INSERT INTO store.reptiles(name,regularPrice,price,age,description,genre) VALUES('piton bobola','6000','4500','Cria','esta bn','H')";
    //
    // con.query(myquery, (err, res) => {
    //   if (err) throw err;
    //   console.log(res);
    // });

    con.query("SELECT * FROM store.reptiles", (err, res) => {
      if (err) throw err;
      console.log("este es el resultado epico");
      console.log(res);
      console.log(typeof res);

      console.log("este es el numero 3", res[2].id);
    });
  });
};
