const router = require('express').Router();

const lobbiesController = require('./controllers/lobbies-controller.js');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'API is working!'
  });
});

router.route('/lobbies')
  .get(lobbiesController.get);

module.exports = router;