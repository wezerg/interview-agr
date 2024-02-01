import {describe, expect, test} from '@jest/globals';
import getStringsFromChars from './index';

describe('Chars to unique strings function', () => {
    test('Test on array => c, n, s', () => {
        expect(getStringsFromChars(['c', 'n', 's'])).toStrictEqual(['c', 'cn', 'cns', 'cs', 'n', 'ns', 's']);
    });
    test('Test on array => c, h, b, d', () => {
        expect(getStringsFromChars(['c', 'h', 'b', 'd'])).toStrictEqual(['c', 'ch', 'chb', 'chbd', 'cb', 'cbd', 'cd', 'h', 'hb', 'hbd', 'hd', 'b', 'bd', 'd']);
    });
    test('Test on array => c, s, c, s', () => {
        expect(getStringsFromChars(['c', 'd', 'c', 'd'])).toStrictEqual(['c', 'cd', 'cdc', 'cdcd', 'cc', 'ccd', 'd', 'dc', 'dcd', 'dd']);
    });
});