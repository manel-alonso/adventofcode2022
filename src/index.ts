import { readFileSync } from 'fs';
import { getTotalScoreForStrategyCorrected } from './day2/problem';

const day: number = 2;
const inputFile = 'strategy';

const input = readFileSync(`./inputs/day${day}/${inputFile}.txt`, 'utf8');

console.log(getTotalScoreForStrategyCorrected(input));