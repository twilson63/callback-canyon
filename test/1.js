import test from 'tape'

export default equals => {
  test('equals function', t => {
    t.ok(equals(true, true))
    t.notOk(equals(true, false))

    t.end()
  })
}
