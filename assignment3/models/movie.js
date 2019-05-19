const mongoose = require('mongoose');

// remote db connection settings. For security, connectionString should be in a separate file not committed to git
const connectionString = "mongodb+srv://dbuser:6031333@cluster0-twknw.mongodb.net/test?retryWrites=true";

mongoose.connect(connectionString, { dbName: '230project', useNewUrlParser: true }); 

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

const mySchema = mongoose.Schema({
 title: { type: String, required: true },
 releasedate: Date,
 IMDBRating: Number
}); 

module.exports = mongoose.model('Movie', mySchema);