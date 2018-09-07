$(document).ready(function() {
  for (var i = 0; i < 20; i++) {
    console.log(i);
    var result = 240 + i;
    $('.displayPhotos')
      .append($('<div>', {
        class: 'poloroid'})
        .append($('<div>', {
          class: 'image'})
          .css('background-image', 'url(https://loremflickr.com/320/' + result + ')'))
        .append($('<span>', {
          class: 'count'})
          .text(Math.floor(Math.random() * Math.floor(6)) + " favs")))
  }
});
