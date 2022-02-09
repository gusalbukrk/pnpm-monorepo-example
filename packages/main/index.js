import { reduce } from 'lodash-es';
import { add, mul } from 'pnpmtestmath';

const plus = (arr) => reduce(arr, (prev, curr) => add(prev, curr));

const times = (arr) => reduce(arr, (prev, curr) => mul(prev, curr));

console.log(plus([3, 5, 8, 12])); // 28

console.log(times([3, 5, 8, 12])); // 1440
