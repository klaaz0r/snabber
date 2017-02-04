'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _snabbdomH = require('snabbdom/h');

var _ramda = require('ramda');

function isValidString(param) {
  return typeof param === 'string' && param.length > 0;
}

function isSelector(param) {
  return isValidString(param) && (param[0] === '.' || param[0] === '#');
}

function createTag(tagName) {
  return function helper(selector, b, c) {
    if (isSelector(selector)) {
      if (typeof b !== 'undefined' && typeof c !== 'undefined') {
        return (0, _snabbdomH.h)(tagName + selector, b, c);
      } else if (typeof b !== 'undefined') {
        return (0, _snabbdomH.h)(tagName + selector, b);
      } else {
        return (0, _snabbdomH.h)(tagName + selector, {});
      }
    } else if (!!b) {
      return (0, _snabbdomH.h)(tagName, selector, b);
    } else if (!!selector) {
      return (0, _snabbdomH.h)(tagName, selector);
    } else {
      return (0, _snabbdomH.h)(tagName, {});
    }
  };
}

var TAG_NAMES = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'dd', 'del', 'dfn', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'p', 'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'u', 'ul', 'video'];

var exported = { TAG_NAMES: TAG_NAMES, createTag: createTag };

TAG_NAMES.forEach(function (n) {
  exported[n] = createTag(n);
});

exports['default'] = exported;
module.exports = exports['default'];
