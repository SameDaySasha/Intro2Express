let express = require("express")
let app = express()


let port = 5001;
app.listen(port, ()=> console.log(`It looks like server is listening on port: ${port}`) )


app.get("/status", (req, res) => {
    res.send("The server is alive!")
})