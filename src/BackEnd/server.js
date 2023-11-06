/** NOTE TO SELF - SERVER HAS TO BE RESET EVERY TIME A CHANGE IS MADE - CTRL-C AND RE-TYPE 
 * node server.js in Integrated Terminal */

const express = require('express')
const app = express()
const port = 4000 /** Changed port to 4000 */
const cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/name', (req, res) => {
console.log("post method");
console.log(req.body.firstname);
res.send('Hello ' + req.body.firstname + " " + req.body.lastname);
})

/** Server listening for Posts */
app.post('/api/book', (req,res)=>{
    console.log(req.body);
    res.send('Book Created')
})

/**--- Server is listening at Port 4000 ---*/
app.get('/', (req, res) => {
  res.send('Hello World!') /** Returns Hello World */
})

app.get('/api/books', (req, res)=>{

const data = [
    {
    "title": "Learn Git in a Month of Lunches",
    "isbn": "1617292419",
    "pageCount": 0,
    "thumbnailUrl":
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
    "status": "MEAP",
    "authors": ["Rick Umali"],
    "categories": []
    },

    {
    "title": "MongoDB in Action, Second Edition",
    "isbn": "1617291609",
    "pageCount": 0,
    "thumbnailUrl":
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg","status": "MEAP",
    "authors": [
    "Kyle Banker",
    "Peter Bakkum",
    "Tim Hawkins",
    "Shaun Verch",
    "Douglas Garrett"
    ],
    "categories": []
    },

    {
    "title": "Getting MEAN with Mongo, Express, Angular, and Node",
    "isbn": "1617292036",
    "pageCount": 0,
    "thumbnailUrl":
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg","status": "MEAP",
    "authors": ["Simon Holmes"],
    "categories": []
    }
];
    

/** Adds content to JSON (data above) */
res.json({
    myBooks:data,
    "MyMessage":"Hello Data"
})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})