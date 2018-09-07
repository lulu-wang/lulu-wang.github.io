$(document).ready(function() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
    var result = 240 + i;
    $('.displayPhotos').append($('<div>', {
      class: 'poloroid',
    }).append($('<div>', {
      class: 'image'
    }).css('background-image', 'url(https://loremflickr.com/320/' + result + ')')));
  }
});
