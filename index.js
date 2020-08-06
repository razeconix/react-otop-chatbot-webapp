const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const app = express();



const config = require('./config/keys');
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, { useNewUrlParser: true });

app.use(function(req, res, next) {

  //to allow cross domain requests to send cookie information.
  res.header('Access-Control-Allow-Credentials', true);
  
  // origin can not be '*' when crendentials are enabled. so need to set it to the request origin
  res.header('Access-Control-Allow-Origin',  req.headers.origin);
  
  // list of methods that are supported by the server
  res.header('Access-Control-Allow-Methods','OPTIONS,GET,PUT,POST,DELETE');
  
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, X-XSRF-TOKEN');
  
      next();
  });

app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

if (process.env.NODE_ENV === 'production') {
    // js and css files
    app.use(express.static('client/build'));

    // index.html for all page routes
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.use(bodyParser.json());
require('./routes/dialogFlowRoutes')(app);

var Users = require('./routes/Users')
app.use('/users', Users)

var Products = require('./routes/Products')
app.use('/products', Products)



const PORT = process.env.PORT || 5000;
app.listen(PORT);




