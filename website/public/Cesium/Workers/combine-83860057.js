define(['exports', './when-4bbc8319'], function (e, n) {
  'use strict'
  e.combine = function e(r, t, o) {
    o = n.defaultValue(o, !1)
    var f,
      i,
      a,
      c = {},
      p = n.defined(r),
      s = n.defined(t)
    if (p)
      for (f in r)
        r.hasOwnProperty(f) &&
          ((i = r[f]),
          s && o && 'object' == typeof i && t.hasOwnProperty(f) ? ((a = t[f]), (c[f] = 'object' == typeof a ? e(i, a, o) : i)) : (c[f] = i))
    if (s) for (f in t) t.hasOwnProperty(f) && !c.hasOwnProperty(f) && ((a = t[f]), (c[f] = a))
    return c
  }
})
