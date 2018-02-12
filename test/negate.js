import {
    negate
} from '../src/negate';
import {
    equal as assertEq
} from 'assert';
import {
    describe,
    it
} from 'mocha';

describe('negate', () => {
    it('negate(#0) === #0.', () => assertEq(negate(0), 0));
    it('negate(#1) === #-1.', () => assertEq(negate(1), -1));
    it('negate(#-1) === #1.', () => assertEq(negate(-1), 1));
    it('negate(#64) === #-64.', () => assertEq(negate(64), -64));
    it('negate(#-64) === #64.', () => assertEq(negate(-64), 64));
    it('negate(#126) === #-126.', () => assertEq(negate(126), -126));
    it('negate(#-126) === #126.', () => assertEq(negate(-126), 126));
    it('negate(#127) === #-127.', () => assertEq(negate(127), -127));
    it('negate(#-127) === #127.', () => assertEq(negate(-127), 127));
    it('negate(#-128) === #-128.', () => assertEq(negate(-128), -128));
});
