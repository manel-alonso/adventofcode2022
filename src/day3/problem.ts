import { letterValues } from "./utils";

export const findPrioritiesInRutsacks = (input: string): number => {
  // First we need to divide each rutsack from the input
  const rutsacks = input.split("\n");

  // Then we need to divide each rutsack by the two compartments (half of it)
  const rutsacksDivided = rutsacks.map((rutsack) => {
    // We know it has exactly the same amout so we don't need to worry
    const halfRutsack = rutsack.length / 2;

    return [
      rutsack.slice(0, halfRutsack),
      rutsack.slice(halfRutsack, rutsack.length),
    ];
  });

  // Then we need to know what both containers share in common
  const rutsacksPrioritized: string[] = [];
  rutsacksDivided.forEach((rutsacks) => {
    // We iterate over all the leters on the first container
    for (let i = 0; i < rutsacks[0].length; i++) {
      // We get the letter from the first rutsack
      const searchingLetter = rutsacks[0].at(i) as string;

      // If the second rutsack contains that letter, we add it to our list and break the loop.
      if (rutsacks[1].indexOf(searchingLetter) !== -1) {
        rutsacksPrioritized.push(searchingLetter);
        break;
      }
    }
  });

  // Then we calculate the value of each item using our letterValues
  const totalValue = rutsacksPrioritized.reduce((prev, curr) => {
    // If that letter is uppercase, we will need to add 26 to the value of it.
    const upperValue = /[A-Z]/.test(curr) ? 26 : 0;
    const letter = letterValues[curr.toLowerCase()] + upperValue;

    return prev + letter;
  }, 0);

  return totalValue;
};

export const findBadgePrioritiesInRutsacks = (input: string): number => {
  // First we need to divide each rutsack from the input
  const rutsacks = input.split("\n");

  // Then we need to divide them by groups of three
  const groupRutsacks = [];
  for (let i = 1; i !== rutsacks.length + 1; i++) {
    if (i % 3 === 0) {
      groupRutsacks.push([rutsacks[i - 3], rutsacks[i - 2], rutsacks[i - 1]]);
    }
  }

  // We now need to find a matching letter between the three rutsacks
  const badges = groupRutsacks.map((rutsack) => {
    for (let i = 0; i < rutsack[0].length; i++) {
      const searchingLetter = rutsack[0].at(i) as string;

      // If we find that badge on the other rutsacks, we return and stop the search
      if (
        rutsack[1].indexOf(searchingLetter) !== -1 &&
        rutsack[2].indexOf(searchingLetter) !== -1
      ) {
        return searchingLetter;
      }
    }

    return "";
  });

  // Then we calculate the value of each item using our letterValues
  const totalValue = badges.reduce((prev, curr) => {
    // If that letter is uppercase, we will need to add 26 to the value of it.
    const upperValue = /[A-Z]/.test(curr) ? 26 : 0;
    const letter = letterValues[curr.toLowerCase()] + upperValue;

    return prev + letter;
  }, 0);

  return totalValue;
};
