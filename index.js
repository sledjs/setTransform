'use strict';

module.exports = function setTransform($elem, attr) {
  if (!$elem) return false;

  Object.assign($elem.style, {
    transform: attr,
    webkitTransform: attr,
  });
};
