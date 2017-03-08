
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
      $('.chatspace__right__bottom__message').append(html);
      $('#new_form')[0].reset();
    })
    .fail(function() {
      alert('error');
    });
    return false;
  });
});
