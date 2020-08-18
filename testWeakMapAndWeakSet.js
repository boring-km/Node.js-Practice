// Node.js 디자인 패턴
// 1.2.6 WeakMap 및 WeakSet Collection

var testWeakMap = function() {
  let obj = {};
  const map = new WeakMap();
  map.set(obj, {key: "testValue"});
  console.log(map.get(obj));
  obj = undefined;
  console.log(map.get(obj));
}

var testWeakSet = function() {
  let obj1 = {key: "val1"};
  let obj2 = {key: "val2"};
  const set = new WeakSet([obj1, obj2]);
  console.log(set.has(obj1));
  obj1 = undefined;
  console.log(set.has(obj1));
}

testWeakMap();
testWeakSet();
