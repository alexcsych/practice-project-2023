const { Router } = require('express');
const checkToken = require('../middlewares/checkToken');
const upload = require('../utils/fileUpload');
const basicMiddlewares = require('../middlewares/basicMiddlewares');
const validators = require('../middlewares/validators');
const userController = require('../controllers/userController');

const contestsRouter = Router();

contestsRouter.post(
  '/',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  upload.uploadContestFiles,
  basicMiddlewares.parseBody,
  validators.validateContestCreation,
  userController.payment
);

module.exports = contestsRouter;
