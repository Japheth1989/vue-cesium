define([
  './Matrix2-9aa31791',
  './when-4bbc8319',
  './EllipseOutlineGeometry-247f65c5',
  './RuntimeError-346a3079',
  './ComponentDatatype-93750d1a',
  './WebGLConstants-1c8239cc',
  './GeometryOffsetAttribute-1772960d',
  './Transforms-d13cc04e',
  './combine-83860057',
  './EllipseGeometryLibrary-962723df',
  './GeometryAttribute-43536dc0',
  './GeometryAttributes-7827a6c2',
  './IndexDatatype-b7d979a6'
], function (e, t, r, i, n, o, c, l, a, s, d, u, m) {
  'use strict'
  return function (i, n) {
    return (
      t.defined(n) && (i = r.EllipseOutlineGeometry.unpack(i, n)),
      (i._center = e.Cartesian3.clone(i._center)),
      (i._ellipsoid = e.Ellipsoid.clone(i._ellipsoid)),
      r.EllipseOutlineGeometry.createGeometry(i)
    )
  }
})
