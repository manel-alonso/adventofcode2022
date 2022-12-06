import { readFileSync } from 'fs';
import { findBadgePrioritiesInRutsacks, findPrioritiesInRutsacks } from './day3/problem';

const day: number = 3;
const inputFile = 'rutsacks';

const input = readFileSync(`./inputs/day${day}/${inputFile}.txt`, 'utf8');

console.log(findBadgePrioritiesInRutsacks(input));