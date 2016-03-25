(function() {

var itemsLeft = 0;

$("form").on("submit", function ( event ) {
  var newTodo = $(".new-todo").val();
  console.log($(".new-todo").val());
  event.preventDefault();
  itemsLeft++;
  console.log(itemsLeft);
  $('.incomplete-items').text(itemsLeft);

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

// Toggles completed class on selected article
$( "ul" ).on( "click", ".check", function() {
  $(this).closest('article').toggleClass("completed");
  if ($(this).closest( "article" ).hasClass( "completed" )) {
    itemsLeft--;
    $('.incomplete-items').text(itemsLeft);
  } else {
    itemsLeft++;
    $('.incomplete-items').text(itemsLeft);
  }

  // $(this).toggleClass("completed");
});

// Allows for editing input
$( "ul" ).on( "click", "p", function() {
  $(this).closest('li').addClass("editing");
  // console.log(42);

  // $(".edit-todo").on("submit", function ( event ) {
  //   newTodo = $(".new-todo").val();
  //   console.log(42);
  //   console.log($(".new-todo").val());
  //   event.preventDefault();
  //   });
});

// Removes selected ToDO/li when X is clicked
$( "ul" ).on( "click", ".delete", function() {
  $(this).closest('li').remove();
  // $('article').remove();
  console.log(42);
  itemsLeft--;
  $('.incomplete-items').text(itemsLeft);
});

// Shows ALL items when clicked
$(".show-all").on( "click", function() {
  $( "article" ).closest('li')
    .css( "display", "inherit" );
  console.log( $( this ).text() );
  console.log(42);
});

// Shows ONLY completed items when clicked
$(".show-completed").on( "click", function() {
  $( "article" ).not( ".completed" ).closest('li')
    .css( "display", "none" );
  // $('article').remove();
  console.log( $( this ).text() );
  console.log(42);
});

// Removes all completed items when Clear completed is clicked
$(".clear").on( "click", function() {
  $('.completed').closest('li').remove();
  // $('article').remove();
  console.log( $( this ).text() );
  console.log(42);
});


})();



// var newItem = $('<li>')
//     .append( $('<a>').attr({ href: newLinkData.link, class: 'design-name' }).text(newLinkData.linkText) )
//     .append(' by ' + newLinkData.author);
