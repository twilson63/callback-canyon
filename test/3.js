import test from 'tape'

export default subtract => {
  test('subtract function', t => {
    t.equals(subtract(2, 1), 1)
    t.equals(subtract(500, 100), 400)

    t.end()
  })
}
