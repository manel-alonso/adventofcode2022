import { findElfWithMostCalories, findTopThreeElfsWithMostCaloriesTotal } from "../src/day1/problem";

describe('day1', () => {
    it('should obtain the elf with most calories', () => {
        const input = "12\n\n123\n1\n\n34";
        const expected = 124;

        const result = findElfWithMostCalories(input);

        expect(result).toBe(expected);
    });

    it('should obtain the total calories of the top 3 elfs', () => {
        const input = "12\n\n123\n1\n\n34\n\n87\n\n230\n20\n\n66";
        const expected = 461;

        const result = findTopThreeElfsWithMostCaloriesTotal(input);

        expect(result).toBe(expected);
    });
});