var config = module.exports = {};

config.env = 'development';
config.hostname = 'dev.example.com';
config.port = 4000;
//mongo database
config.mongo = {};
config.mongo.uri = process.env.MONGO_URI || 'mongodb://localhost/FertilizerDB';
config.mongo.db = 'example_dev';