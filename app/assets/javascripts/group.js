$(function() {
  preWord = 0;
  function buildHTML(users) {
    var list = $("#list");

    $.each(users, function(i, user) {
      var chat_group_user__btn = $('<button type="button" class="chat-group-user__btn">').append('<span class="chat-group-user__btn--add">追加');
      var item = $('<li class="list">').append(user.name).append(chat_group_user__btn);
      list.append(item);
    });

    $('.chat-group-user__btn').on('click', function() {
      var listing = $(this).parent();
      var btn = listing.find('.chat-group-user__btn--add')
      btn.text('削除');
      btn.removeClass('chat-group-user__btn--add');
      btn.addClass('chat-group-user__btn--remove');
      var memberlist = $("#memberlist");
      memberlist.append(listing);
      $('.chat-group-user__btn--remove').on('click', function() {
        var removelist = $(this).parents(".list");
        removelist.remove();
      });
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
      })
      .fail(function() {
        alert('error');
      });
      return false;
    }
  });
});
