const mongoose = require('mongoose');


exports.connectToMongoDb = () => {
  const connection = mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('error', (err) => {
    console.log('Error in connection Mongo', err);
  });
  return connection;
};

