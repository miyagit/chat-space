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

function buildHTML(message) {
  if(message["image"] !== null) {
    var image = `<p class="chatspace__right__bottom__message__body">
                    <img src=${message.image} alt=${message.image} width="330" height="330">
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
                  </p>` + image;
  return basehtml;
}
