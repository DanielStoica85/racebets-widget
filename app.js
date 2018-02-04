const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.use('/api/next_race', racesRoutes);

app.listen(port, () => {
    console.log('App started on port ' + port);
});