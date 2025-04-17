/* eslint-disable */
hexo.extend.tag.register(
  'gallery',
  function (args) {

    if (args.length == 0)
      return '';

    // we have only one file, do not create a gallery, just show it
    if (args.length == 1) {
      if (args[0].indexOf('.mp4') > -1) {
        return '<video controls>' +
               '  <source src="' + '/' + this.path + args[0] + '" type="video/mp4">' +
               '</video>'

      } else {
        return '<img src="' + '/' + this.path + args[0] + '">';
      }
    }

    // multiple files
    let res = '<div class="post-gallery">' + 
              '  <div class="slider-wrap">' + 
              '    <ul class="slider">';
    for (let arg of args) {
      res +=  '      <li>' + 
              '        <div>';

      if (arg.indexOf('.mp4') > -1) {
        res += '<video controls>' +
               '  <source src="' + '/' + this.path + arg + '" type="video/mp4">' +
               '</video>'

      } else {
        res += '<img src="' + '/' + this.path + arg + '">';
      }

      res +=  '        </div>' + 
              '      </li>';
    }

    res +=    '    </ul>' +
              '    <!--controls-->' +
              '    <div class="btns next"><i class="fa fa-arrow-right"></i></div>' +
              '    <div class="btns previous"><i class="fa fa-arrow-left"></i></div>' +
              '    <div class="counter"></div>' +
              '    <div class="pagination-wrap">' +
              '      <ul>' +
              '      </ul>' +
              '    </div>' +
              '    <!--controls-->' +
              '  </div>' +
              '</div>';

    return res;
  },
  { ends: false, async: false },
);
