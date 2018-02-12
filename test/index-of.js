import {
    equal as assertEq
} from 'assert';
import {
    describe,
    it
} from 'mocha';
import {
    indexOf
} from '../src/index-of';

describe('indexOf', () => {
    it('-Infinity is #-127.', () => assertEq(indexOf(-Infinity), -127));
    it('-1024 is #-124.', () => assertEq(indexOf(-1024), -124));
    it('-512 is #-118.', () => assertEq(indexOf(-512), -118));
    it('-256 is #-112.', () => assertEq(indexOf(-256), -112));
    it('-128 is #-106.', () => assertEq(indexOf(-128), -106));
    it('-64 is #-100.', () => assertEq(indexOf(-64), -100));
    it('-32 is #-94.', () => assertEq(indexOf(-32), -94));
    it('-16 is #-88.', () => assertEq(indexOf(-16), -88));
    it('-8 is #-82.', () => assertEq(indexOf(-8), -82));
    it('-4 is #-76.', () => assertEq(indexOf(-4), -76));
    it('-2 is #-70', () => assertEq(indexOf(-2), -70));
    it('-1 is #-64', () => assertEq(indexOf(-1), -64));
    it('-0.5 is #-58.', () => assertEq(indexOf(-0.5), -58));
    it('-0.25 is #-52.', () => assertEq(indexOf(-0.25), -52));
    it('-0.125 is #-46.', () => assertEq(indexOf(-0.125), -46));
    it('-0.0625 is #-40.', () => assertEq(indexOf(-0.0625), -40));
    it('-0.03125 is #-34.', () => assertEq(indexOf(-0.03125), -34));
    it('-0.015625 is #-28.', () => assertEq(indexOf(-0.015625), -28));
    it('-0.0078125 is #-22.', () => assertEq(indexOf(-0.0078125), -22));
    it('-0.00390625 is #-16.', () => assertEq(indexOf(-0.00390625), -16));
    it('-0.001953125 is #-10.', () => assertEq(indexOf(-0.001953125), -10));
    it('-0.0009765625 is #-4.', () => assertEq(indexOf(-0.0009765625), -4));
    it('-2**(-63/6) is #-1.', () => assertEq(indexOf(-Math.pow(2, -63/6)), -1));
    it('0 is #0.', () => assertEq(indexOf(0), 0));
    it('validate values in ranges [1, 127).', () => {
        for (let i = 1; i < 127; ++i) {
            assertEq(indexOf(Math.pow(2, (i - 64)/6)), i);
        }
    });
    it('Infinity is #127.', () => assertEq(indexOf(Infinity), 127));
    it('NaN is #-128.', () => assertEq(indexOf(NaN), -128));
});
