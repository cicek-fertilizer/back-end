const config = require('./config');

const express = require('express'),
    app = express(),
    port = config.port;//process.env.PORT || 4000,
    mongoose = require('mongoose'),
    models = require('./api/model/models'),
    bodyParser = require('body-parser');

app.listen(port);

mongoose.connect(config.mongo.uri, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./api/route/routes'); //importing route
routes(app); //register the route

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', routes);

console.log('Fertilizer server started at the port: ' + port);

