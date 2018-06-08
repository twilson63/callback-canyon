import test from 'tape'

export default add => {
  test('add function', t => {
    t.equals(add(1, 1), 2)
    t.equals(add(500, 100), 600)

    t.end()
  })
}
