import assert from "assert";

const a = [1];
const b = [2];
assert.equal(a, b);
assert.notDeepEqual(a, b);

assert(1 === 0);
