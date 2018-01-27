const counter = require("../reducers/test-reducer.js")
test("adds 1 when we click the +1 button",
    () => { expect(counter(1, { type: "INCREMENT" })).toBe(2) })
test("adds 1 when we click the +1 button when state is 2",
    () => { expect(counter(2, { type: "INCREMENT" })).toBe(3) })
test("subtracts 1",
    () => { expect(counter(2, { type: "DECREMENT" })).toBe(1) })
test("2 is still 2",
    () => { expect(2).toBe(2) });
test("doesn't flinch when we mess with it", () => { expect(counter(5, {})).toBe(5) })

