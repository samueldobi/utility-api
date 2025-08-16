const Router = require('express');
const mailController = require('../controllers/mailController');

const mailRouter = Router();
mailRouter.post('/sendmail', mailController.recieve_email);
module.exports = mailRouter;