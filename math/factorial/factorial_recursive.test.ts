// you may execute this test via "ts-node"

import * as assert from "assert";
import {factorial} from "./factorial_recursive";

assert.strictEqual(factorial(-1), 1, "factorial for negative numbers is 1");
assert.strictEqual(factorial(0), 1, "factorial of 0 is 1");
assert.strictEqual(factorial(1), 1);
assert.strictEqual(factorial(2), 2);
assert.strictEqual(factorial(3), 6);
assert.strictEqual(factorial(13), 6227020800);

console.log("All tests passed");
