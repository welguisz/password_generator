/**
 * @jest-environment jsdom
 */

const password_generator = require('../script')
const {isInteger} = require("../script");


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
    test('if uppercase selected, then char array of uppercase is returned', () => {
        const val = password_generator.create_char_array(true, false, false, false);
        expect(val.length).toBe(26);
        expect(val).toStrictEqual(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
    })
    test('if lowercase selected, then char array of lowercase is returned', () => {
        const val = password_generator.create_char_array(false, true, false, false);
        expect(val.length).toBe(26);
        expect(val).toStrictEqual(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
            "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    })
    test('if numeric selected, then char array of numbers is returned', () => {
        const val = password_generator.create_char_array(false, false, true, false);
        expect(val.length).toBe(10);
        expect(val).toStrictEqual(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
    })
    test('if special is selected, then char array of special characters is returned', () => {
        const val = password_generator.create_char_array(false, false, false, true);
        expect(val.length).toBe(33);
        expect(val).toStrictEqual([" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")",
            "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",
            "\\", "]", "^", "_", "`", "{", "|", "}", "~"]);
    })
    test('check that different options return different sizes', () => {
        expect(password_generator.create_char_array(true, true, false, false).length).toBe(52);
        expect(password_generator.create_char_array(true, false, true, false).length).toBe(36);
        expect(password_generator.create_char_array(true, false, false, true).length).toBe(59);
        expect(password_generator.create_char_array(true, true, true, false).length).toBe(62);
        expect(password_generator.create_char_array(true, true, false, true).length).toBe(85);
        expect(password_generator.create_char_array(true, true, true, true).length).toBe(95);
    })
})

describe("Check that a password is returned with the given length", () => {
    test('returns all A when char_array is all As', () => {
        const val = password_generator.create_password(8, ["A", "A"]);
        expect(val.length).toBe(8);
        expect(val).toBe("AAAAAAAA");
    })
    test('returns random character when char_array is randomized', () => {
        const val = password_generator.create_password(120, ["A", "B", "C", "1", "2", "3"]);
        expect(val.length).toBe(120);
    })
})

describe("Check isInteger works", () => {
    test('returns true when any integer is given', () => {
        expect(isInteger(-5)).toBe(true);
        expect(isInteger(0)).toBe(true);
        expect(isInteger(3)).toBe(true);
    })
    test('returns false when String is an input', () => {
        expect(isInteger("str")).toBe(false);
    })
    test('retrusn false when float is an input', () => {
        expect(isInteger(3.15)).toBe(false);
    })
})