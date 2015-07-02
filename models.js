var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blogdb");

var CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ''
  }
})

var BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    default:""
  },
  body: {
    type: String,
    default: ""
  },
  author: {
    type: String,
    default: ""
  },
  comments: []
});

var Blog = mongoose.model("Blog", BlogSchema);
var Comment = mongoose.model("Comment", CommentSchema);
module.exports.Blog = Blog;
module.exports.Comment = Comment;




