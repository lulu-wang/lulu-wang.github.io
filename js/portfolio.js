var illustration = function() {
  return [{src: 'stardust.jpg', name: 'Stardust'},
          {src: 'print3.jpg', name: 'Guardian'},
          {src: 'mikasa.png', name: 'Mikasa'},
          {src: 'brs.jpg', name: 'Black Rock Shooter'},
          {src: 'sky.jpg', name: 'Wings'},
          {src: 'azure.jpg', name: 'Azure World'},
          {src: 'reflection.jpg', name: 'Reflection'},
          {src: 'mayu.png', name: 'Afternoon Glow'},
          {src: 'pinterest3.png', name: 'Pinterest Portrait'},
          {src: 'dazed.png', name: 'Dazed Freedom'},
          {src: 'mirai.jpg', name: 'Mirai Kuriyama'},
          {src: 'rakkun.jpg', name: 'Rakkun'},
          {src: '14.jpg', name: 'Tracer'},
          {src: 'dvapost2.jpg', name: 'D.VA'},
          {src: 'ahri.jpg', name: 'Ahri'},
          {src: 'zerotwo.jpg', name: 'Zero Two'},
          {src: 'rem.jpg', name: 'Rem'},
          {src: 'singularity.jpg', name: 'Singularity'},
          {src: 'undertale.jpg', name: 'Duality'},
          {src: 'luxmini.jpg', name: 'Star Guardian Lux'},
          {src: 'lulumini.jpg', name: 'Star Guardian Lulu'},
          {src: 'bottle.jpg', name: 'Bottle Miku'},
          {src: 'fashion1.jpg', name: 'Design 1'},
          {src: 'fashion2.jpg', name: 'Design 2'},
          {src: 'fashion3.jpg', name: 'Design 3'},
          {src: 'demon.jpg', name: 'King'},
          {src: 'friskwip.jpg', name: 'Frisk'},
          {src: '1.jpg', name: '1'},
          {src: '2.jpg', name: '2'},
          {src: '3.jpg', name: '3'},
          {src: '6.jpg', name: '4'},
          {src: '5.jpg', name: '5'},
          {src: '4.jpg', name: '6'},
          {src: 'ori.jpg', name: 'Orianna Sketch'},
          {src: 'receptacle.jpg', name: 'Receptacle'},
          {src: 'shiro.jpg', name: 'Shiro'}
          ].map(function(i) {
            return $('<div>').addClass('grid-item')
              .append($('<img>')
                .attr('src', '../images/portfolio/illustration/' + i.src))
              .append($('<div>')
                .addClass('item-cover')
                .html('<span class="align-middle">'+ i.name +'</span>')
                .data('src', '../images/portfolio/illustration/' + i.src))
          });
};


var uiux = function() {
  return [{src: 'swifte.png', name: 'Swifte Redesign'},
          {src: 'mybeeble.png', name: 'MyBeeble Redesign'},
          {src: 'hab.png', name: 'Hackers@Berkeley Website Design'},
          {src: 'hikinect.png', name: 'Hikinect'}].map(function(i) {
            return $('<div>').addClass('grid-item')
              .append($('<img>')
                .attr('src', '../images/portfolio/uiux/' + i.src))
              .append($('<div>')
                .addClass('item-cover')
                .html('<span class="align-middle">'+ i.name +'</span>')
                .data('src', '../images/portfolio/uiux/' + i.src))
          });
};

var graphicdesign = function() {
  return [{src: 'faisier.png', name: 'Fraisier'},
          {src: 'isometric2.png', name: 'Isometric Design'},
          {src: 'latte1.png', name: 'I love you a latte'},
          {src: 'latte2.png', name: 'I love you a latte'},
          {src: 'isometric.png', name: 'Isometric Design'},
          {src: '2017bblogo.png', name: 'Berkeley Builds Logo'},
          {src: 'bl+stuff.png', name: 'Berkeley Legends'},
          {src: 'opmedsk1.png', name: 'Operation Med School'},
          {src: 'opmedsk2.png', name: 'Operation Med School'},
          {src: 'opmedsk3.png', name: 'Operation Med School'},
          {src: 'wallflower.jpg', name: 'Wallflower'},
          {src: 'workshop+1-3.png', name: 'Workshops'}].map(function(i) {
           return $('<div>').addClass('grid-item')
             .append($('<img>')
               .attr('src', '../images/portfolio/graphicdesign/' + i.src))
             .append($('<div>')
              .addClass('item-cover')
              .html('<span class="align-middle">' + i.name + '</span>')
              .data('src', '../images/portfolio/graphicdesign/' + i.src))
          });
};

var codingprojects = function() {
  return [{src: 'Starlight61A.png', name: 'Starlight'},
          {src: 'crypto.png', name: 'CryptoConverter'},
          {src: 'toronto.png', name: 'Toronto Culture Map'},
          {src: 'lookfwd.png', name: 'Grouping App'}].map(function(i) {
           return $('<div>').addClass('grid-item')
             .append($('<img>')
               .attr('src', '../images/portfolio/codingprojects/' + i.src))
             .append($('<div>')
              .addClass('item-cover')
              .html('<span class="align-middle">'  + i.name + '</span>')
              .data('src', '../images/portfolio/codingprojects/' + i.src))
          });
};

function initGrid() {
  return $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
    transitionDuration: 400,
    stagger: 50
  });
}

function getFuncToInit() {
  var grid = $('.grid');
  if (grid.attr("id") == "illustration") {
    return illustration();
  } if (grid.attr("id") == "uiux") {
    return [];
  } if (grid.attr("id") == "coding") {
    return [];
  } if (grid.attr("id") == "graphicdesign") {
    return graphicdesign();
  }
}

var sizer = $('<div>').addClass('grid-sizer');

$(document).ready(function() {

  // init Masonry
  // var grid = initGrid();
  // var current = illustration();

  var grid = $('.grid');
  grid.imagesLoaded().progress( function() {
    grid = initGrid();
  });

  var current = getFuncToInit();
  updateGrid(current);

  function updateGrid(stuff) {
    console.log(current);
    current.forEach(function(e) {
      grid.masonry('remove', e);
    });
    stuff.forEach(function(e) {
      grid.append(e).masonry('appended', e);
    });
    current = stuff;
    grid.masonry();
  }

  function itemCoverHandlers() {
      $('.item-cover').click(function(e) {
      $('body').addClass('no-overflow');
      $('.slide').toggle();
      $('.slide img').attr('src', $(this).data('src'));
    });
  }

  // Set up click handlers
  itemCoverHandlers();

  $('.btn-hamburger').click(function(e) {
    $(e.target).toggleClass('change');
  });

  $('#illustration').click(function(e) {
    console.log("clicked on illustration");
    updateGrid(illustration());
    console.log("updated");
    itemCoverHandlers();
  });

  $('#uiux').click(function(e) {
    console.log("clicked on uiux");
    updateGrid(uiux());
    console.log("updated");
    itemCoverHandlers();
  });

  $('#codingprojects').click(function(e) {
    console.log("clicked on coding");
    updateGrid(codingprojects());
    console.log("updated");
    itemCoverHandlers();
  });

  $('#graphicdesign').click(function(e) {
    console.log("clicked on graphicdesign");
    updateGrid(graphicdesign());
    console.log("updated");
    itemCoverHandlers();
  });

  $('.slide').click(function(e) {
    $('.slide').toggle();
    $('body').removeClass('no-overflow');
    $('.slide').removeClass('zoomed');
    $('.slide img').removeClass('zoomed');
  });

  $('.slide img').click(function(e) {
    $('.slide').toggleClass('zoomed');
    $('.slide img').toggleClass('zoomed');
    e.stopPropagation();
  });

  // // layout Masonry after each image loads
  grid.imagesLoaded().progress( function() {
    grid.masonry();
  });
});
