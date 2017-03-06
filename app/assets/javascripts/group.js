$(function() {
  preWord = 0;
  function buildHTML(users) {
    console.log(users);
    var list = $("#list");

    $.each(users, function(i, user) {
      var chat_group_user__btn = $('<button type="button" class="chat-group-user__btn">').append('<span class="chat-group-user__btn--add">').append("追加");
      var item = $('<li class="list">').append(user.name).append(chat_group_user__btn);
      list.append(item);
    });
    $('.added-btn').on('click', function() {
      var listing = $(this).parent();
      var memberlist = $("#memberlist");
      memberlist.append(listing);
    })
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
