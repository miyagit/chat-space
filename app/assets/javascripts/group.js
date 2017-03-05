$(function() {
  preWord = 0;
  function buildHTML(users) {
    console.log(users);
    var list = $("#list");

    $.each(users, function(i, user) {
      var item = $('<li class="list">').append(user.name);
      list.append(item);
    });
    preWord = $("#chatments").val();
  };

  $('#chatments').on('keyup', function(e) {
    var word = $("#chatments").val();
    $(".list").remove();
    if (word != preWord && word.length !== 0) {
      $.ajax({
        type: 'GET',
        url: '/users/search',
        data: {
          user: {
            search: word
          }
        },
        dataType: 'json'
      })
      .done(function(data) {
        var users = data.users;
        user = buildHTML(users)
        // $('.chatspace__right__bottom__message').append(html);
        // $('#new_form')[0].reset() ;
      })
      .fail(function() {
        alert('error');
      });
      return false;
    }
  });
});
