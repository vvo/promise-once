var test = require('tape');
var promiseOnce = require('./');

test('simple', function(t) {
  t.plan(1);
  var i = 0;
  var incrementOnce = promiseOnce(increment);

  incrementOnce()
    .then(incrementOnce)
    .then(incrementOnce)
    .then(incrementOnce)
    .then(function end(i) {
      t.equal(i, 1);
    });

  function increment(resolve/*, reject*/) {
    i++;
    process.nextTick(function() {
      resolve(i);
    });
  }
});
