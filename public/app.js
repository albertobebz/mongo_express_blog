// this is called namespacing
var Blog = Blog || {};
var View = View || {};

$(document).ready(function() {
  // Looks like Rails!
  Blog.all();
  View.initialise();
});

View = {
  initialise: function() {
    $('#blog-form').on('submit', function(e) {
      e.preventDefault();
      Blog.create($(this).serialize());
    });
    // Event delegation
    $('#blog-ul').on('click', '.js-close', function(e) {
      Blog.delete($(this).data('id'));
    });
  },
  render: function(templateElement, object, parentElement) {
    var template = templateElement.html();
    Mustache.parse(template);
    var rendered = Mustache.render(template, object);
    parentElement.append(rendered);
  }
}

Blog = {
  all: function() {
    $.get('/blogs', function(response) {
      $.each(response, function(index, blog) {
        console.log(blog);
        View.render($('#blog-item-template'), blog, $('#blog-ul'));
      })
    });
  },
  create: function(blogParams) {
    console.log(blogParams);
    $.post('/blogs', blogParams)
    .done(function(response) {
      View.render($('#blog-item-template'), response, $('#blog-ul'));
    })
    .done(function() {
      $('#blog-form').trigger('reset');
    })
  },
  delete: function(blogId) {
    $.ajax({
      url: '/blogs/' + blogId,
      type: 'DELETE'
    })
    .done(function(response) {
      console.log(response);
      $('#blog-ul').empty();
      Blog.all();
    });
  }

}