const mongoose = require('mongoose');
const xyz = 'admin';
const zyx = 'admin';

mongoose.connect(`mongodb+srv://${xyz}:${zyx}@birdimain-mom5v.mongodb.net/birdi?retryWrites=true&w=majority`, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.Promise = global.Promise;

module.exports = mongoose;