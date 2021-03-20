const connection = require('../infrastructure/connection');

class Device{
    save(device, res){
        const sql = 'INSERT INTO tbldevice SET ?';

        connection.query(sql, device, (error, results) => {
            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(201).json(results);
            }
        });
    }

    delete(params, res){
        const sql = 'DELETE FROM tbldevice WHERE id = ?';

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
        const sql = 'SELECT d.id, d.color, d.partNumber, c.name category'+
                    '  FROM tbldevice d' +
                    ' INNER JOIN tblcategory c ON c.id = d.idCategory;';

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

module.exports = new Device;