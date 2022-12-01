import { readFileSync } from 'fs';
import { findElfWithMostCalories, findTopThreeElfsWithMostCaloriesTotal } from './day1/problem';

const day: number = 1;
const inputFile = 'calories';

const input = readFileSync(`./inputs/day${day}/${inputFile}.txt`, 'utf8');

console.log(findTopThreeElfsWithMostCaloriesTotal(input));