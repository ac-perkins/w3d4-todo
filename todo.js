(function() {

  var itemList = [];
  var itemsLeft = 0;

  $('form').on('submit', function ( event ) {
    var newTodo = $('.new-todo').val();
    itemList.push( {todo: newTodo, timeStamp: Date.now()} );
    console.log(itemList);
    event.preventDefault();
    $('.new-todo').val('');
    itemsLeft++;
    $('.incomplete-items').text(itemsLeft);

    var newArticle = $('<article>')
      .append( $('<button>').attr({ class: 'check'}))
      .append( $('<p>').text(newTodo) )
      .append( $('<input>').attr({ type: 'text', class: 'edit-todo', value: newTodo }))
      .append( $('<button>').attr({ class:'delete'}).text('X'));

    var newListItem = $('<li>')
      .css( 'background-color', '#fff' )
      .append(newArticle);

    $('.items')
      .sortable()               // Allows for click and drag sorting of the <li>s
      .append(newListItem);

    var todos = $('.items').html();
    localStorage.setItem('todos', todos);
    var incItems = itemsLeft;
    localStorage.setItem('incItems', itemsLeft);
  });

  if(localStorage.getItem('todos')) {
$('.items').html(localStorage.getItem('todos'));
}
if(localStorage.getItem('incItems')) {
$('.incomplete-items').html(localStorage.getItem('incItems'));
itemsLeft = (localStorage.getItem('incItems'));
}

  // Toggles completed class on selected article
  $( 'ul' ).on( 'click', '.check', function(event) {
    $(this).closest('article').toggleClass('completed');
    if ($(this).closest('article').hasClass('completed')) {
      itemsLeft--;
      $('.incomplete-items').text(itemsLeft);
    } else {
      itemsLeft++;
      $('.incomplete-items').text(itemsLeft);
    }
    var todos = $('.items').html();
    localStorage.setItem('todos', todos);
    var incItems = itemsLeft;
    localStorage.setItem('incItems', itemsLeft);
  });

  // Allows for editing current list items
  $( 'ul' ).on( 'click', 'p', function(event) {
    $(this).closest('article').addClass('editing');
    $( ".edit-todo" ).focus();

    $('.edit-todo').keydown( function (event) {    // Put EVENT IN THESE FUNCTIONS
      if (event.keyCode === 13) {
        var editTodo = $(this).closest('article').find('.edit-todo').val();
        $(this).closest('article').find('p').text(editTodo);
        $(this).closest('article').removeClass('editing');
        event.preventDefault();
        var todos = $('.items').html();
        localStorage.setItem('todos', todos);
      }
      });
  });

  // Removes selected ToDO/li when X is clicked
  $( 'ul' ).on( 'click', '.delete', function(event) {
    $(this).closest('li').remove();

    if (!$(this).closest('article').hasClass('completed')) {
      itemsLeft--;
      $('.incomplete-items').text(itemsLeft);
    }
    var incItems = itemsLeft;
    localStorage.setItem('incItems', itemsLeft);

    // itemsLeft--;
    $('.incomplete-items').text(itemsLeft);

    var todos = $('.items').html();
    localStorage.setItem('todos', todos);
    // itemList.forEach(function removeItem(time, i) {     // THIS NEEDS TO WORK!
    //   if (itemList[i].timeStamp ===)
    //     itemList.split(i);
    //   console.log(itemList);
    // });
  });

  // Shows ALL items when clicked
  $('.show-all').on( 'click', function(event) {
    $( 'article' ).closest('li').css( 'display', 'block' );
    $('.show-all').addClass('active');
    $('.show-active').removeClass('active');
    $('.show-completed').removeClass('active');
  });

  // Shows ACTIVE items when clicked
  $('.show-active').on( 'click', function(event) {
    $( '.completed' ).closest('li').css( 'display', 'none' );
    $( 'article' ).not( '.completed' ).closest('li').css( 'display', 'block' );
    $('.show-active').addClass('active');
    $('.show-all').removeClass('active');
    $('.show-completed').removeClass('active');
  });

  // Shows COMPLETED items when clicked
  $('.show-completed').on( 'click', function(event) {
    $( 'article' ).not( '.completed' ).closest('li').css( 'display', 'none' );
    $( '.completed' ).closest('li').css( 'display', 'block' );
    $('.show-completed').addClass('active');
    $('.show-all').removeClass('active');
    $('.show-active').removeClass('active');
  });

  // Removes all completed items when 'Clear completed' is clicked
  $('.clear').on( 'click', function(event) {
    $('.completed').closest('li').remove();
    $( 'article' ).not( '.completed' ).closest('li').css( 'display', 'block' );
    var todos = $('.items').html();
    localStorage.setItem('todos', todos);
    var incItems = itemsLeft;
    localStorage.setItem('incItems', itemsLeft);
    // window.localStorage.clear();
    // location.reload();
  });

})();
