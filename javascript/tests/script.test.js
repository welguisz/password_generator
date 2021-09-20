/**
 * @jest-environment jsdom
 */

const check_length = require('../script')
test('if length is less than 8, expect false to be returned', () => {
    expect(check_length(3)).toBe(false);
})

test('if length is greater than or equal to 8 and less than or equal to 128, expect true to be returned', () => {
    expect(check_length(12)).toBe(true);
})

test('if length is greater than 128, expect falsed to be returned', () => {
    expect(check_length(129)).toBe(false));
})