import { h1, div, span, a } from './index'
import toHTML from 'snabbdom-to-html'
import { expect } from 'chai'

describe('test snabbdom helpers', function() {
  describe('all', function() {
    it('should parse singel item', function() {
      const node = h1('.header', { style: { background: 'red' } }, 'hello world')
      const html = `<h1 class="header" style="background: red">hello world</h1>`
      expect(toHTML(node)).to.equal(html)
    })
    it('should parse nested items', function() {
      const node = div('#container.two.classes', { style: { background: 'red' } }, [
        span('.box', { style: { fontWeight: 'bold' } }, 'This is bold'),
        a('I\'ll take you places!')
      ])
      const html = `<div id="container" class="two classes" style="background: red"><span class="box" style="font-weight: bold">This is bold</span><a>I'll take you places!</a></div>`
      expect(toHTML(node)).to.equal(html)
    })
  })
})
