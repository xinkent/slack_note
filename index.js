const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const Joi = require("joi");

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const notes = [];


app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/notes", (req, res) =>{
    res.send(notes);
})

app.post("/notes", (req, res) => {
    console.log(req)
    console.log(req.query)
    let course = {
        id: notes.length + 1,
        name: req.body.text
    };
    notes.push(course);
    res.send(notes);
});

app.listen(port, () =>{
    console.log(`ポート番号${port}で立ち上がりました。`)
});
