var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "xavier",
  password: "hax",
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
