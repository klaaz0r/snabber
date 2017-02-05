# ⚓ snabbdom helpers

it's a basic module that wraps the snabbdom tags, it's based on the [cycle.js](https://cycle.js.org/) DOM hyperscript helpers, the reason I made this little module is a server side project and the snabbdom-helpers module (currently) doesn't seem to work correctly with the snabbdom-to-html module

instead of

```javascript
h('div', { style: { color: 'red' } }, 'The quick brown fox jumps')
```
you can do this
```javascript
div({ style: { color: 'red' } }, 'The quick brown fox jumps')
```

## installation
```
npm install snabber
```

ussage

``` javascript
import { div } from 'snabber'
import toHTML from 'snabbdom-to-html'

const node = div('.box', 'Hello world!')
toHTML(node)  // ->  <div class="box">Hello world!</div>
```
