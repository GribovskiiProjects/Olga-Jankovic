function createVideoIframe(videoId) {
  return "<iframe " +
      "id=\"video-frame\"" +
      "width=\"100%\" " +
      "height=\"500em\" " +
      "src=\"https://www.youtube.com/embed/" + videoId + "?autoplay=1&autohide=1\" " +
      "frameborder=\"0\" " +
      "allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" " +
      "allowfullscreen></iframe>"
}

$(document).ready(function() {
  $('[target=gallery-modal]').on('click', function() {
    $('#gallery-modal').modal('show')
    
    var id = $(this).attr('gallery-id') * 1
    if (typeof id !== 'undefined') {
      $('#gallery-carousel').carousel(id)
    }
  });

  $('a.unhover-link').on('click', function(e) {
    e.preventDefault()
    var unhoverId = $(this).attr('unhover-id')
    $(this).hide()
    $(unhoverId).show()
  })

  $('.tabs').tabs()
});
