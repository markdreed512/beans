const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',
    password: 'root',
    database: 'beans_rice_db'

})

connection.connect(err => {
    if (err) {
        throw err
    }
    console.log("connected to mysql as id " + connection.threadId + "\n");
})
module.exports = {
    // getAllFoods: function(callback){
    //     connection.query('SELECT * FROM foods', (err, results) =>{
    //         console.log("query result: ", results)
    //         return callback(results)
    //     });
    // },
//refactored with promise:
    getAllFoods: (callback) => {
        return new Promise((resolve, reject)=>{
            connection.query('SELECT * FROM foods', (err,results) =>{
                if (err) {
                    reject("error")
                }else{
                    resolve(results)
                }
            })
        })
    }
}
