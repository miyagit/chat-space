$(function() {
  function buildHTML(message) {
    var html = `<span class="chatspace__right__bottom__message__username">
                  ${message.name}
                </span>
                <span class="chatspace__right__bottom__message__date">
                  ${message.time}
                </span>
                <p class="chatspace__right__bottom__message__body">
                  ${message.body}
                </p>`;
    return html;
  }

  $('.new_message').on('submit', function(e) {
    e.preventDefault();
    var new_message = $('#message_body').val();
    console.log(new_message);
    $.ajax({
      type: 'POST',
      url: './messages',
      data: {
        message: {
          body: new_message
        }
      },
      dataType: 'json'
    })
    .done(function(data) {
      console.log(data);
      var html = buildHTML(data);
      console.log(html);
      $('.chatspace__right__bottom__message').append(html);
    })
    .fail(function() {
      alert('error');
    });
  });
});
