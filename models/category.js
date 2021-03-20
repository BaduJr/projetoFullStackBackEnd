const connection = require('../infrastructure/connection');

class Category{
    save(category, res){
        const sql = 'INSERT INTO tblcategory SET ?';

        connection.query(sql, category, (error, results) => {
            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(201).json(results);
            }
        });
    }

    delete(params, res){
        const sql = 'DELETE FROM tblcategory WHERE id = ?';

        connection.query(sql, params.id, (error, results) => {
            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(200).json(results);
            }
        });
    }

    listAll(res){
        const sql = 'SELECT * FROM tblcategory';

        connection.query(sql, (error, results) => {
            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(200).json(results);
            }
        });
    }
}

module.exports = new Category;