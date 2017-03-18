$(document).on('turbolinks:load', function() {
  $('#new_form').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData ($(this).get(0));
    $.ajax({
      type: 'POST',
      url: './messages',
      data: formData,
      processData: false,
      contentType: false,
      dataType: 'json'
    })
    .done(function(data) {
      goBottom()
      $('#new_form')[0].reset();
      var html = messageBuildHTML(data);
      $('.chatspace__right__bottom__message').append(html);
    })
    .fail(function() {
      alert('error');
    });
    return false;
  });
});


$(function() {
  autoreload = function() {
    $.ajax({
      type: 'GET',
      url: './messages',
      dataType: 'json'
    })
    .done(function(data) {
      console.log('a')
      $('.chatspace__right__bottom__message').empty();
      $.each(data.messages, function(i, message) {
        var autohtml = messageBuildHTML(message);
        $('.chatspace__right__bottom__message').append(autohtml);
      });
    })
    .fail(function() {
      alert('error');
    });
    return false;
  }
  setInterval(autoreload, 7000);
});

function messageBuildHTML(message) {

  if(message.image !== null) {
    var image = `<p class="chatspace__right__bottom__message__body">
                    <img src=${message.image} alt="image" width="330" height="330">
                </p>`;
  }else {
    var image = ``;
  }
  var basehtml = `<span class="chatspace__right__bottom__message__username">
                   ${message.name}
                  </span>
                  <span class="chatspace__right__bottom__message__date">
                    ${message.time}
                  </span>
                  <p class="chatspace__right__bottom__message__body">
                    ${message.body}
                  </p>
                  ${image}`
  return basehtml;
}

function goBottom() {
   $('.chatspace__right__bottom').delay(30).animate({
     scrollTop: $('.chatspace__right__bottom')[0].scrollHeight
   }, 500);
 };
