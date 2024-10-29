const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateMinimumBuses(familyCount, familySizes) {
    // Validate input count
    if (familyCount !== familySizes.length) {
        console.log("Input must be equal with count of family");
        return;
    }

    // Sort family sizes to efficiently pair them
    familySizes.sort((a, b) => a - b);

    let buses = 0;
    let i = 0;
    let j = familySizes.length - 1;

    // Use two-pointer technique to pair families
    while (i <= j) {
        if (familySizes[i] + familySizes[j] <= 4) {
            // Pair the smallest and largest families together
            i++;
        }
        // Allocate a bus for the family at the end pointer
        j--;
        buses++;
    }

    console.log(`Minimum bus required is : ${buses}`);
}

// Input handling
rl.question("Input the number of families : ", (n) => {
    const familyCount = parseInt(n);
    
    rl.question("Input the number of members in the family (separated by a space) : ", (members) => {
        const familySizes = members.split(" ").map(Number);
        
        calculateMinimumBuses(familyCount, familySizes);
        rl.close();
    });
});
