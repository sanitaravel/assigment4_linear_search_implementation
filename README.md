# Linear Search Implementation

This project contains an implementation of the linear search algorithm and its corresponding unit tests.

## linearSearch Function

The `linearSearch` function takes an array of numbers and a target number as arguments. It returns the index of the first occurrence of the target in the array. If the target is not found, it returns -1.

## On first run

Run `npm install` to install all dependencies.

## Running the project

The entrypoint for this project is `main.ts`. Run it with `npm start`.

### Usage

```typescript
import { linearSearch } from './main';

const arr = [1, 2, 3, 4, 5];
const target = 3;
const index = linearSearch(arr, target);
console.log(index); // Output: 2
```

## Running the tests

Run the tests with `npm test`. It will run all files called `*.test.ts` (e.g. `main.test.ts`, `utils.test.ts`).

This script will also run in watch mode, which means it will re-run the tests every time you save a file.

The tests are written using the `node:test` module and are located in the `main.test.ts` file.

### Example Test

```typescript
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

    // ...other tests...
});
```
