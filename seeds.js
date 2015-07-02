var REPL = require('repl');
var db = require('./models');

//Start the repl and assign a prompt;
var repl = REPL.start("Blogs >");
//Setting the context of the database to be foodsdatabase
repl.context.db = db;

//Remove all documents from the collection;
db.Blog.collection.remove();
db.Comment.collection.remove();

db.Blog.create({
  title: 'Rails for Zombies',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste omnis ipsum rerum dolor quo ea, magnam ad aperiam saepe, repudiandae voluptates, in dolores necessitatibus temporibus. Dicta temporibus a, odio aperiam voluptate assumenda nostrum quia quae aliquid dolorum rerum voluptates id repudiandae maxime numquam eveniet laudantium quasi, doloremque explicabo, dignissimos quibusdam.',
  author: 'Mathilda Thompson'
}, function(err, blog){
  db.Comment.create({
    author: 'Joe Bloggs',
    text: 'Lorem ipsum dolor sit amet.'
  }, function(err, comment){
    blog.comments.push(comment);
    blog.save();
    console.log('data seeded');
    //Take care with process.exit(), this will break the code
    // process.exit()
  })
});

db.Blog.create({
  title: 'Learning how to use Mongodb',
  body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloribus laudantium in neque quasi aut minus a fuga quae cupiditate qui quo quis quaerat non deserunt, impedit enim, ab. Itaque accusamus molestiae, illum deserunt. Repellat et, consequuntur. Illo dolorem dolores eos consectetur aliquid ducimus architecto vitae blanditiis, fugiat commodi saepe modi quae repudiandae, quidem sed quaerat. Qui ex labore modi.',
  author: 'Mathilda Thompson'
}, function(err, blog){
  db.Comment.create({
    author: 'Sam Thompson',
    text: 'Lorem ipsum dolor sit yeh man amet.'
  }, function(err, comment){
    blog.comments.push(comment);
    blog.save();
    console.log('data seeded');
    //Take care with process.exit(), this will break the code
    // process.exit()
  })
});



