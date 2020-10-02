// you may execute this test via "ts-node"

import * as assert from "assert";
import {fibonacci} from "./fibonacci_recursive";

assert.strictEqual(fibonacci(-5), 0, "0 for negative numbers");
assert.strictEqual(fibonacci(0), 0, "fib(0) = 0");
assert.strictEqual(fibonacci(1), 1, "fib(1) = 1");
assert.strictEqual(fibonacci(2), 1, "fib(2) = 1");
assert.strictEqual(fibonacci(3), 2, "fib(3) = 2");
assert.strictEqual(fibonacci(10), 55, "fib(10) = 55");
assert.strictEqual(fibonacci(40), 102334155, "fib(40) = 102334155");

console.log("All tests passed");
