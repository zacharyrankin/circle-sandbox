const test = require("tape");

test("gotta test something", function (t) {
  t.plan(1);
  t.equal(typeof Date.now, "function");
});

test("testing something else", function (t) {
  t.plan(1);
  t.equal(typeof "hello", "string");
});
