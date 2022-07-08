const express = require("express");
const app = express();

app.get("/", (req,res)=> {
    res.send("hello world!")
    console.log(req.headers)
})

app.listen(3333, () => {
    console.log("app listening on http://localhost:3333")
})