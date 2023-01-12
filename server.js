
const express = require("express")
const app = express();
app.use(express.static("/home/xavier/BOOSTRAP-Reptile_Instinct/public"))

app.get("/",(req,res)=>{
	console.log("llego el wey")
	res.sendFile(__dirname+"/index.html")	
})

app.listen(3000, (e)=>{
	console.log(e)
})
