const express = require('express');
const app = express();
const port = 3000;

// Define a simple GET route
app.get('/', (req, res) => {
  res.send({message:'Hello, World!'});
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});