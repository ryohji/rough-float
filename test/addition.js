import {
    equal as assertEq
} from 'assert';
import {
    describe,
    it
} from 'mocha';
import {
    valueOf
} from '../src/value-of';
import {
    indexOf
} from '../src/index-of';
import {
    add
} from '../src/addition';

describe('addition', () => {
    for (let y = -128; y < 128; ++y) {
        it(`for addend #${y} and augend in range [#-128, #127].`, () => {
            for (let x = -128; x < 128; ++x) {
                assertEq(add(x, y), indexOf(valueOf(x) + valueOf(y)));
            }
        });
    }
});
