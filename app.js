const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

const racesRoutes = require('./routes/races');

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.use('/api/next_races', racesRoutes);

app.listen(port, () => {
    console.log('App started on port ' + port);
});