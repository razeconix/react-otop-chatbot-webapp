const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();



//Connect Database mongoDB
const config = require('./config/keys');
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, { useNewUrlParser: true });


app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

//Export Product to Heroku setup
if (process.env.NODE_ENV === 'production') {
    // js and css files
    app.use(express.static('client/build'));

    // index.html for all page routes
    const path = require('path');
    
    app.get('/', (req, res) => {
        res.sendFile(
          path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.use(bodyParser.json());
require('./routes/dialogFlowRoutes')(app);
require('./routes/fulfillmentRoutes')(app);

var Users = require('./routes/Users')
app.use('/users', Users)

var Products = require('./routes/Products')
app.use('/products', Products)





const PORT = process.env.PORT || 5000;
app.listen(PORT);




