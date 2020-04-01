const router = require('express').Router();

const db = require('../models');
const auth = require('../utils/auth');

router.get('/me', auth.required, (req, res) => {
  res.send({ user: req.auth.user.id });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await db.User.findOne({ where: { email: email } });

  if (!user) res.status(400).json({ message: 'User not found' });

  if (!user.isPasswordCorrect(password))
    res.status(400).json({ message: 'Incorrect password' });

  res.json({ token: user.generateToken() });
});

module.exports = router;
