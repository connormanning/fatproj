import fatproj from '.'

test('codes', () => {
  expect(fatproj.defs('EPSG:4326')).toBeDefined()
  expect(fatproj.defs('EPSG:3857')).toBeDefined()
  expect(fatproj.defs('EPSG:26918')).toBeDefined()
  expect(fatproj.defs('EPSG:28992')).toBeDefined()
  expect(fatproj.defs('EPSG:28355')).toBeDefined()
  expect(fatproj.defs('asdf')).toBeUndefined()
})
