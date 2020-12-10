const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
const { connect } = mongoose;

module.exports = {
  connect,
};
