import { h } from 'snabbdom/h'

const isValidString = (param) =>
  typeof param === 'string' && param.length > 0


const isSelector = (param) =>
  isValidString(param) && (param[0] === '.' || param[0] === '#')


const createTag = (tagName) => (selector, b, c) => {
  if (isSelector(selector)) {
    if (typeof b !== 'undefined' && typeof c !== 'undefined') {
      return h(tagName + selector, b, c)
    } else if (typeof b !== 'undefined') {
      return h(tagName + selector, b)
    } else {
      return h(tagName + selector, {})
    }
  } else if (!!b) {
    return h(tagName, selector, b)
  } else if (!!selector) {
    return h(tagName, selector)
  } else {
    return h(tagName, {})
  }
}

const SVG_TAG_NAMES = [
  'a', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
  'animateMotion', 'animateTransform', 'circle', 'clipPath', 'colorProfile',
  'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix',
  'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting',
  'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB',
  'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode',
  'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting',
  'feSpotlight', 'feTile', 'feTurbulence', 'filter', 'font', 'fontFace',
  'fontFaceFormat', 'fontFaceName', 'fontFaceSrc', 'fontFaceUri',
  'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line',
  'linearGradient', 'marker', 'mask', 'metadata', 'missingGlyph', 'mpath',
  'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'script',
  'set', 'stop', 'style', 'switch', 'symbol', 'text', 'textPath', 'title',
  'tref', 'tspan', 'use', 'view', 'vkern',
]

const svg = createTag('svg')

SVG_TAG_NAMES.forEach(tag => { svg[tag] = createTag(tag) })

const TAG_NAMES = [
  'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base',
  'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption',
  'cite', 'code', 'col', 'colgroup', 'dd', 'del', 'dfn', 'dir', 'div', 'dl',
  'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form',
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html',
  'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend',
  'li', 'link', 'main', 'map', 'mark', 'menu', 'meta', 'nav', 'noscript',
  'object', 'ol', 'optgroup', 'option', 'p', 'param', 'pre', 'progress', 'q',
  'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small',
  'source', 'span', 'strong', 'style', 'sub', 'sup', 'table', 'tbody', 'td',
  'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'u', 'ul', 'video',
]

const exported = { SVG_TAG_NAMES, TAG_NAMES, svg, isSelector, createTag }

TAG_NAMES.forEach(n => { exported[n] = createTag(n) })

export default exported
