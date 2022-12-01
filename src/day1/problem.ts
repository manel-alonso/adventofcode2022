export const findElfWithMostCalories = (input: string) => {
    // We need to split each elf calories per new blank line (regex: \n\n)
    const elfs = input.split('\n\n');

    // Once we splitted per elf, we need to divide for each elf and provide the total calories for that elf
    const totalCaloriesPerElf: number[] = elfs.map((elf) => {
        // We need to clean the string for unexpected characters as \n and transformit to a Number array
        const cleanedElfs = elf.split('\n').map(Number);

        // We add up all of the elf calories into a single number
        return cleanedElfs.reduce((a, b) => a + b);
    })

    // We return the elf with the highest amount of calories
    return Math.max(...totalCaloriesPerElf);
};

export const findTopThreeElfsWithMostCaloriesTotal = (input: string) => {
    // We need to split each elf calories per new blank line (regex: \n\n)
    const elfs = input.split('\n\n');

    // Once we splitted per elf, we need to divide for each elf and provide the total calories for that elf
    const totalCaloriesPerElf: number[] = elfs.map((elf) => {
        // We need to clean the string for unexpected characters as \n and transformit to a Number array
        const cleanedElfs = elf.split('\n').map(Number);

        // We add up all of the elf calories into a single number
        return cleanedElfs.reduce((a, b) => a + b);
    })

    // In order to get the top three elfs, we need to sort the array in descending order
    const totalCaloriesPerElfSorted = totalCaloriesPerElf.sort((a, b) => a > b ? -1 : 1);

    // We return the top 3 elfs calories added up
    return totalCaloriesPerElfSorted[0] + totalCaloriesPerElfSorted[1] + totalCaloriesPerElfSorted[2];
};