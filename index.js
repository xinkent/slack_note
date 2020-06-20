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

// app.put("/notes/:id", (req, res) => { // 1. データ(course)を探す let course = notes.find(e => e.id === parseInt(req.params.id)) if(!course){ res.send("該当idのコースが見つかりませんでした") } // 2. バリデーション let {error} = validate(req.body); if (error){ res.send(result.error.details[0].message); } // 3. データを編集し、結果を返す notes.forEach(e => { if (e.id === parseInt(req.params.id)) e.name = req.body.name; }); res.send(notes); }); app.get("/notes/:id", (req,res) =>{ let course = notes.find(e => e.id === parseInt(req.params.id))
//     if(!course){
//         res.send("該当idのコースが見つかりませんでした")
//     }
//     res.send(course);
// });
// 
// app.get("/posts/:year/:month", (req, res) => {
//     res.send(req.query);
// });
// 
// app.listen(port, () =>{
//     console.log(`ポート番号${port}で立ち上がりました。`)
// });
// 
// function validate(course){
//     const schema = {
//         name: Joi.string().min(3).required()
//     };
//     return Joi.validate(course, schema);
// }
