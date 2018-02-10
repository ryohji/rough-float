import { valueOf } from '../index';
import { equal as assertEq } from 'assert';

describe('foo', () => {
  it('blar', () => assertEq(1, valueOf(63)));
});
