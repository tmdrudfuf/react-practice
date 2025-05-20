const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

// 전체 허용
app.use(cors());

app.get('/sound/:name', (req, res) => {
  const { name } = req.params;
  if (name === 'dog')      return res.json({ sound: 'woof' });
  else if (name === 'cat') return res.json({ sound: 'meow' });
  else if (name === 'bird')return res.json({ sound: 'tweet' });
  res.status(404).json({ error: 'Unknown animal' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
