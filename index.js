module.exports = promiseOnce;

function promiseOnce(fn) {
  var PromiseConstructor = promiseOnce.Promise;
  var resolved;

  return function() {
    return resolved || (resolved = new PromiseConstructor(fn));
  }
}

promiseOnce.Promise = global.Promise;
