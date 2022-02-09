import { reduce } from 'lodash-es';
import { add as addBase, mul as mulBase } from 'pnpmtestmath';

const add = (arr) => reduce(arr, (prev, curr) => addBase(prev, curr));

const mul = (arr) => reduce(arr, (prev, curr) => mulBase(prev, curr));

console.log(add([3, 5, 8, 12])); // 28

console.log(mul([3, 5, 8, 12])); // 1440
