const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
require('./routes/dialogFlowRoutes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT);




