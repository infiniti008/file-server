const express = require('express');
const config = require("./config.json");
const cors = require('cors');

const listOfFiles = {};
const app = express();

app.use(cors());
app.listen(3001);

for (const p in config) {
    listOfFiles[p] = 'http://localhost:3001/file?name=' + p;
}

console.log(`
Server startted.
HOST: http://localhost:3001
List of Files:
`);
console.table(listOfFiles);

app.get("/file", (req, res) => {
    var path = config[req.query.name];
    if (path) {
        res.sendFile(config[req.query.name]);
    } else {
        res.send("OK");
    }
});