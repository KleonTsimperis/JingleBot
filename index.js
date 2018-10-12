const express           = require('express');
const app               = express();
const bodyParser        = require('body-parser');
const appointmentsRoute = require('./routes/appointments');
const mongoose          = require('mongoose');
const path              = require('path');
const PORT              = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect("mongodb://kleo:Kerguelen129@ds123753.mlab.com:23753/notable", { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Established connection');
});

app.use('/appointment',appointmentsRoute);

app.use((req,res,next) => {
  res.status(404).send('We think you are lost');
})

app.use((err,req,res,next) => {
  res.sendFile(path.join(__dirname, './public/500.html'));
});

app.listen(PORT, ()=> console.info(`listening at ${PORT}`));
