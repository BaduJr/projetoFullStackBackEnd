const deviceModel = require('../models/device');

module.exports = app => {
  app.get('/listDevice', (requ, res) => {
    deviceModel.listAll(res);
  });

  app.post('/addDevice', (req, res) => {
    const device = req.body;
    deviceModel.save(device, res);
  });

  app.delete('/deleteDevice/:id', (req, res) => {
    const params = req.params;
    deviceModel.delete(params, res);
  });
}