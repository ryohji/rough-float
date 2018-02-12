import {
    valueOf
} from '../index';
import {
    equal as assertEq
} from 'assert';
import {
    describe,
    it
} from 'mocha';

describe('rough values', () => {
    it('#0 is zero.', () => assertEq(valueOf(0), 0));
    it('#64 is one.', () => assertEq(valueOf(64), 1));
    it('#127 is Infinity.', () => assertEq(valueOf(127), Infinity));
    it('#-64 is -1.', () => assertEq(valueOf(-64), -1));
    it('#-127 is -Infinity.', () => assertEq(valueOf(-127), -Infinity));
    it('#-128 is NaN.', () => assertEq(Number.isNaN(valueOf(-128)), true));
    it('size is same and its sign is opposite for respective index of [1, 127).', () => {
        for (let i = 1; i < 127; ++i) {
            assertEq(valueOf(i) + valueOf(-i), 0);
        }
    });
    it('absolute(valueOf(#-1)) === valueOf(#1)', () => assertEq(Math.abs(valueOf(-1)), valueOf(1)));
    it('#7 is just 2 times bigger than #1.', () => assertEq(valueOf(7), 2 * valueOf(1)));
    it('#13 is just 4 times bigger than #1.', () => assertEq(valueOf(13), 4 * valueOf(1)));
    it('#19 is just 8 times bigger than #1.', () => assertEq(valueOf(19), 8 * valueOf(1)));
    it('#25 is just 16 times bigger than #1.', () => assertEq(valueOf(25), 16 * valueOf(1)));
    it('#31 is just 32 times bigger than #1.', () => assertEq(valueOf(31), 32 * valueOf(1)));
    it('#37 is just 64 times bigger than #1.', () => assertEq(valueOf(37), 64 * valueOf(1)));
    it('#43 is just 128 times bigger than #1.', () => assertEq(valueOf(43), 128 * valueOf(1)));
    it('#49 is just 256 times bigger than #1.', () => assertEq(valueOf(49), 256 * valueOf(1)));
    it('#55 is just 512 times bigger than #1.', () => assertEq(valueOf(55), 512 * valueOf(1)));
    it('#61 is just 1024 times bigger than #1.', () => assertEq(valueOf(61), 1024 * valueOf(1)));
    it('#67 is just square-root times bigger than #64.', () => assertEq(valueOf(67), Math.SQRT2 * valueOf(64)));
});
