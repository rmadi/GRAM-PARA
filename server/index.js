const express = require('express');
const app = express();
const port = 5555;


app.use(express.json());
app.use(express.static(__dirname + '/../client/dist/gram-para'));



app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
