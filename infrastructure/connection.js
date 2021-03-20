const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'awsinstance.cclnfyrxuqcb.us-east-2.rds.amazonaws.com',
    port: 3306,
    user: 'root',
    password: 'rootpassword',
    database: 'challengeFullStack'
});

module.exports = conexao;