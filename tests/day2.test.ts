import { getTotalScoreForStrategy, getTotalScoreForStrategyCorrected } from "../src/day2/problem";

describe('day2', () => {
    it('should get the total score from an incorrect game config', () => {
        const input = "A Y\nB X\nC Z";
        const expected = 15;

        const result = getTotalScoreForStrategy(input);

        expect(result).toBe(expected);
    });

    it('should get the total score from a correct game config', () => {
        const input = "A Y\nB X\nC Z";
        const expected = 12;

        const result = getTotalScoreForStrategyCorrected(input);
        
        expect(result).toBe(expected);
    });
});