
const express = require('express');
const cors = require('cors');
const mysql = require('mysql')
const app = express();
// import db from './model/model'
const db = require('./model/model')
// const connection = mysql.createConnection({
//     host: 'localhost', 
//     user: 'root',
//     password: 'root',
//     database: 'beans_rice_db'

// })

// connection.connect(err => {
//     if (err) {
//         throw err
//     }
//     console.log("connected to mysql as id " + connection.threadId + "\n");
// })

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello from Beans and Rice!!!!")
})
//in MVC, this should be a method e.g."getAllFoods()" that is imported from the Model
//The model should never talk directly to the view
app.get('/foods', (req, res) => {
    db.getAllFoods().then((results)=>{
        res.json(results)
    })
})
app.post('/foods', (req,res) => {
    console.log("post request...... ", res.body.data)
    res.json(res.body)
    // db.postFoodItem().then((results)=>{
    //     console.log("result of Post food item: ",results)
    // })
})
app.listen(4000, () => {
    console.log("Beans and Rice listening on port 4000!!")
})
