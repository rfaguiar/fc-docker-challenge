const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
const table = 'create table if not exists people(id int not null auto_increment, name varchar(255), primary key(id))'
connection.query(table)

const sql = `INSERT INTO people(name) values('Rogerio Aguiar')`
connection.query(sql)
connection.end()

app.get('/', (req,res) => {
    const connection = mysql.createConnection(config)
    connection.query('SELECT name FROM people', (error, results) => res.send(print(results)))
    connection.end()
    
})

const print = results => {    
    return `<h1>Full Cycle Rocks!</h1>
            <ul>
                ${results.map(e => `<li>${e.name}</li>`)}
            </ul>`
}

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
