/**
 * @jest-environment jsdom
 */

const check_length = require('../script')
test('if length is less than 8, expect false to be returned', () => {
    expect(check_length(3).toBe(false);
})