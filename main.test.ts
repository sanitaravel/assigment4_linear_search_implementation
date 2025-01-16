import { linearSearch } from './main';
import { describe, it } from 'node:test';
import assert from 'assert';

describe('linearSearch', () => {
    it('should return the index of the first occurrence of the target', () => {
        const arr = [1, 2, 3, 4, 5];
        const target = 3;
        const result = linearSearch(arr, target);
        assert.strictEqual(result, 2);
    });

    it('should return -1 if the target cannot be found', () => {
        const arr = [1, 2, 3, 4, 5];
        const target = 6;
        const result = linearSearch(arr, target);
        assert.strictEqual(result, -1);
    });

    it('should return the index of the first occurrence of the target in an array with duplicates', () => {
        const arr = [1, 2, 3, 3, 5];
        const target = 3;
        const result = linearSearch(arr, target);
        assert.strictEqual(result, 2);
    });

    it('should return -1 for an empty array', () => {
        const arr: number[] = [];
        const target = 3;
        const result = linearSearch(arr, target);
        assert.strictEqual(result, -1);
    });

    it('should return 0 if the target is the first element', () => {
        const arr = [3, 2, 3, 4, 5];
        const target = 3;
        const result = linearSearch(arr, target);
        assert.strictEqual(result, 0);
    });
});
