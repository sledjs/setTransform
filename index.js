'use strict';

module.exports = function log($elem, attr) {
  $elem.transform = attr;
  $elem.webkitTransform = attr;
};
