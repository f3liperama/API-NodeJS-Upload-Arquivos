const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/upload', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;