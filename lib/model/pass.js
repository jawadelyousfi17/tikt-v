const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const keySchema = new Schema({
  key: {
    type: String,
    default : 'jawad.18'
  },
});


module.exports = mongoose.models.Key || mongoose.model('Key', keySchema);
