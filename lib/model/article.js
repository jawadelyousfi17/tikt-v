const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  slug : {
    type : String ,
    unique : true 
  } ,
  description : {
    type :String ,
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  tags: [{
    type: String,
    lowercase: true,  // Normalize to lowercase for easier searching
    trim: true
  }],
  publishedAt: {
    type: Date,
    default: Date.now
  },
  lastModifiedAt: {
    type: Date,
    default: Date.now
  },
  isPublished: {
    type: Boolean,
    default: false
  },
});

// Pre-save hook to update lastModifiedAt
articleSchema.pre('save', function(next) {
  this.lastModifiedAt = Date.now();
  next();
});

module.exports = mongoose.models.Article || mongoose.model('Article', articleSchema);
