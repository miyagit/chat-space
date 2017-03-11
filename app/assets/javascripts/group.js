$(document).on('turbolinks:load', function() {
  $('#chatments').on('keyup', function() {
    ajaxsearch();
  });

  $('.chat-group-form__field--right').on('click','.chat-group-user__add', function() {
    var user = $(this).parent();
    var user_id = user.data('id');
    var user_name = user.data('name');
    addition(user, user_id, user_name);
  });

  $('.chat-group-form__field--right').on('click','.chat-group-user__remove', function() {
    var user = $(this).parent();
    removement(user);
  });
});


function buildHTML(user) {
  var html = `<li class="addinglist" data-id="${ user.id }" data-name="${ user.name }">${ user.name }<button
              type="button" class="chat-group-user__add">追加</button></li>`;
  return html;
}

function BuildUserList(user_id, user_name) {
  var html = `<li class="list">${ user_name }<button type="button" class="chat-group-user__remove">削除</button><input type="hidden" name='group[user_ids][]' value="${ user_id }" class="user_id"></li>`;
  return html;
}


function ajaxsearch() {
  var word = $("#chatments").val();
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
    $(".addinglist").remove();
    if (word.length !== 0) {
      $.each(data.users, function(i, user) {
        var list = buildHTML(user);
        $("#searchresult").append(list);
      });
    }
  })
  .fail(function() {
    alert('error');
  });
  return false;
}

function addition(user, user_id, user_name) {
  user.remove();
  var addhtml = BuildUserList(user_id, user_name);
  $('#memberlist').append(addhtml);
}

function removement(use) {
  use.remove();
}

