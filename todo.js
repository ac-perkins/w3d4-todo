(function() {

$("form").on("submit", function ( event ) {
  var newTodo = $(".new-todo").val();
  console.log($(".new-todo").val());
  event.preventDefault();

  // var newListItem = $('<li>')
  //   .append( $('<article>') ).append( $('<button>').attr({ class: 'check' })).after( $('<p>').text(newTodo) );

  var newArticle = $('<article>')
    .append( $('<button>').attr({ class: 'check' }))
    .append( $('<p>').text(newTodo) )
    .append( $('<input>').attr({ type: 'text', class: 'edit-todo', value: newTodo }))
    .append( $('<button>').attr({ class: 'delete' }).text('X'));

  var newListItem = $('<li>')
    .append(newArticle);

$(".items")
  .append(newListItem);
});


})();



// var newItem = $('<li>')
//     .append( $('<a>').attr({ href: newLinkData.link, class: 'design-name' }).text(newLinkData.linkText) )
//     .append(' by ' + newLinkData.author);
