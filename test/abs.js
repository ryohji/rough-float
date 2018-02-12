import {
    abs
} from '../src/abs';
import {
    equal as assertEq
} from 'assert';
import {
    describe,
    it
} from 'mocha';

describe('abs', () => {
    it('abs(#0) === #0.', () => assertEq(abs(0), 0));
    it('abs(#1) === #1.', () => assertEq(abs(1), 1));
    it('abs(#-1) === #1.', () => assertEq(abs(-1), 1));
    it('abs(#64) === #64.', () => assertEq(abs(64), 64));
    it('abs(#-64) === #64.', () => assertEq(abs(-64), 64));
    it('abs(#126) === #126.', () => assertEq(abs(126), 126));
    it('abs(#-126) === #126.', () => assertEq(abs(-126), 126));
    it('abs(#127) === #127.', () => assertEq(abs(127), 127));
    it('abs(#-127) === #127.', () => assertEq(abs(-127), 127));
    it('abs(#-128) === #-128.', () => assertEq(abs(-128), -128));
});
