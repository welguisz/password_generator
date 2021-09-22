/**
 * @jest-environment jsdom
 */

const password_generator = require('../script')


describe('WHEN prompted for the length of the password\n' +
    'THEN I choose a length of at least 8 characters and no more than 128 characters', () => {
    test('if length is less than 8, expect false to be returned', () => {
        expect(password_generator.check_length(3)).toBe(false);
    })

    test('if length is greater than or equal to 8 and less than or equal to 128, expect true to be returned', () => {
        expect(password_generator.check_length(12)).toBe(true);
    })

    test('if length is greater than 128, expect falsed to be returned', () => {
        expect(password_generator.check_length(129)).toBe(false);
    })
})

describe('THEN my input should be validated and at least one character type should be selected', () => {
    test('if no character sets is selected, return false', () => {
        expect(password_generator.check_options(false, false, false, false)).toBe(false);
    })
    test('if one character set is selected, return true', () => {
        expect(password_generator.check_options(true, false, false, false)).toBe(true);
        expect(password_generator.check_options(false, true, false, false)).toBe(true);
        expect(password_generator.check_options(false, false, true, false)).toBe(true);
        expect(password_generator.check_options(false, false, false, true)).toBe(true);
    })
    test('if all characters sets are selected, return true', () => {
        expect(password_generator.check_options(true, true, true, true)).toBe(true);
    })
})

describe('Check that different arrays are given when different character sets are selected', () => {

})
