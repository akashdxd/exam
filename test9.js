const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const secretKey = 'your-secret-key'; 
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
})
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route!' });
});

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (token == null) return res.status(401).json({ message: 'Authentication failed' });
  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = user;
    next();
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
