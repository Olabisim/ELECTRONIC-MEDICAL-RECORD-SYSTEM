const express = require('express');
const app = express();
const port = 7000;

app.get("/", (req, res) => {
        res.send("this is the home page");
})

app.listen(port, () => {
        console.log("server is listening on port 7000");
})
