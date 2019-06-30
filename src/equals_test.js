import { test } from 'tape-modern'

import equals from './equals'

test('equals function', async t => {
  t.ok(equals(true, true))
  t.notOk(equals(true, false))

})
