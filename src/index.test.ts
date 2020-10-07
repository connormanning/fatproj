import fatproj4 from '.'

test('codes', () => {
  expect(fatproj4.defs('EPSG:4326')).toBeDefined()
  expect(fatproj4.defs('EPSG:3857')).toBeDefined()
  expect(fatproj4.defs('EPSG:26918')).toBeDefined()
  expect(fatproj4.defs('EPSG:28992')).toBeDefined()
  expect(fatproj4.defs('EPSG:28355')).toBeDefined()
})
