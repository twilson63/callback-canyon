import tapBrowserColor from 'tap-browser-color'
import testEx1 from './test/1'
import ex1 from './1'
import testEx2 from './test/2'
import ex2 from './2'

import testEx3 from './test/3'
import ex3 from './3'

import test from 'tape'

tapBrowserColor()

testEx1(ex1)
testEx2(ex2)
testEx3(ex3)

if (module.hot) {
  module.hot.accept(function() {
    window.location.reload()
  })
}
