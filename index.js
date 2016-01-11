'use strict';

module.exports = function setTransform($elem, attr) {
  $elem.transform = attr;
  $elem.webkitTransform = attr;
};
