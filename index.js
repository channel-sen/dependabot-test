// Dependabot test project
// This project intentionally uses outdated dependencies to test Dependabot

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Dependabot test project', status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
