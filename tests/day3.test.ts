import { findBadgePrioritiesInRutsacks, findPrioritiesInRutsacks } from "../src/day3/problem";

describe("day3", () => {
  it("should get the total prioritized value from a list of rutsacks", () => {
    const input =
      "vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw";
    const expected = 157;

    const result = findPrioritiesInRutsacks(input);

    expect(result).toBe(expected);
  });

  it("should get the total prioritized value from a the badge in a list of rutsacks divided by groups of three", () => {
    const input =
      "vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw";
    const expected = 70;

    const result = findBadgePrioritiesInRutsacks(input);

    expect(result).toBe(expected);
  });
});
