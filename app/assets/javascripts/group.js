$(function() {
  preWord = 0;
  function buildHTML(users) {
    var list = $("#list");

    $.each(users, function(i, user) {
      var chat_group_user__btn = $('<button type="button" class="chat-group-user__btn">').append('<span class="chat-group-user__btn--add">追加');
      var id = user.id;
      var user_id = $('<input type="hidden" value='+ id +' class="user_id">')
      // $('.user_id').val(user.id);
      var item = $('<li class="list">').append(user.name).append(chat_group_user__btn).append(user_id);
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
      user_ids = [];
      // var tmp = memberlist.find('.list input').attr('value');
      var tmp = memberlist.find('.list');
      $.each(tmp, function(i, el) {
        user_ids.push(($(el).find('input').attr('value')));
        // var x =el.getElementsByTagName('input');
        // console.log(x.attr('value'));
      })
      // $.each(tmp,function(i,el){
      //   var x = el.find('.user_id');
      //   console.log(x);
      // });
      var currentid = $('.currentid')
      $.each(currentid, function(i, id) {
        user_ids.push(id.getAttribute('value'));
      })
      // console.log(currentid);
      console.log(user_ids);
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
    }
  });

  $('#new_message').on('click', function(e) {
    e.preventDefault();
    var name = $('#group_name').val();
    var user_id = user_ids;
    $.ajax({
      type: 'POST',
      url: '/groups',
      data: {
        group: {
          name: name,
          user_ids: user_id
        }
      },
      dataType: 'json'
    })
    .done(function(data) {
      console.log(data);
    })
    .fail(function() {
      alert('error');
    });
    return false;
  });

});
