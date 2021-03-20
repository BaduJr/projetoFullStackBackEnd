const customExpress = require('./config/customExpress');
const connection = require('./infrastructure/connection');

connection.connect((error) => {
    if(error){
        console.log(error);
    }
    else
    {
        console.log('Conectado com sucesso');
        
        const app = customExpress();
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    }
});