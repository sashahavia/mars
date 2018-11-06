const router = require('express').Router();
const axios = require('axios');
module.exports = router;

// GET /api/nodes/

router.get('/', async (req, res, next) => {
  try {
    const { data } = await axios.get(
      'https://headlight-tournament-5.herokuapp.com/bots'
    );
    res.json(data);
  } catch (err) {
    next(err);
  }
});
