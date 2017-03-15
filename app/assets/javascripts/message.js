$(document).on('turbolinks:load', function() {
  $('#new_form').on('submit', function(e) {
    e.preventDefault();
    var fb = new FormData ($(this).get(0));
    $.ajax({
      type: 'POST',
      url: './messages',
      data: fb,
      processData: false,
      contentType: false,
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


// <p class="chatspace__right__bottom__message__body">
//   ${message.body}
// </p>
// <p class="chatspace__right__bottom__message__body">
//   <img src=${message.image} alt=${message.image}>
// </p>


function buildHTML(message) {
  var basehtml = `<span class="chatspace__right__bottom__message__username">
                ${message.name}
              </span>
              <span class="chatspace__right__bottom__message__date">
                ${message.time}
              </span>
              <p class="chatspace__right__bottom__message__body">
                ${message.body}
              </p>
              <p class="chatspace__right__bottom__message__body">
                <img src=${message.image} alt=${message.image}>
              </p>`;
}

// bodyは空文字で、imageはnull
