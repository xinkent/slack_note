const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const Joi = require("joi");

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id:3, name: "course3"}
];


app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/courses", (req, res) =>{
    res.send(courses);
})

app.post("/courses", (req, res) => {
    let {error} = validate(req.body);
    if (error){
        res.send(result.error.details[0].message);
    }
    let course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
});

app.put("/courses/:id", (req, res) => {
    // 1. データ(course)を探す
    let course = courses.find(e => e.id === parseInt(req.params.id))
    if(!course){
        res.send("該当idのコースが見つかりませんでした")
    }
    // 2. バリデーション
    let {error} = validate(req.body);
    if (error){
        res.send(result.error.details[0].message);
    }
    // 3. データを編集し、結果を返す
    courses.forEach(e => {
        if (e.id === parseInt(req.params.id))
            e.name = req.body.name;
    });
    res.send(courses);
});

app.get("/courses/:id", (req,res) =>{
    let course = courses.find(e => e.id === parseInt(req.params.id))
    if(!course){
        res.send("該当idのコースが見つかりませんでした")
    }
    res.send(course);
});

app.get("/posts/:year/:month", (req, res) => {
    res.send(req.query);
});

app.listen(port, () =>{
    console.log(`ポート番号${port}で立ち上がりました。`)
});

function validate(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}