import 'babel-polyfill'
import tapBrowserColor from 'tap-browser-color'
tapBrowserColor()

const run = async function() {
  return await import('./test')
}

run()

if (module.hot) {
  module.hot.accept(function() {
    window.location.reload()
  })
}
