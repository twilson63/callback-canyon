import test from 'tape'

import equals from '../src/equals'

test('equals function', async t => {
  t.ok(equals(true, true))
  t.notOk(equals(true, false))

  t.end()
})
