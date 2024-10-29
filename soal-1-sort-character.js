const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sortCharacters(input) {
    // Convert the input to lowercase and remove any whitespace
    input = input.toLowerCase().replace(/\s+/g, '');
    
    // Define vowels
    const vowels = 'aeiou';
    
    // Variables for storing vowels and consonants
    let vowelCharacters = '';
    let consonantCharacters = '';
    
    // Loop through each character in the input
    for (let char of input) {
        if (vowels.includes(char)) {
            vowelCharacters += char;
        } else if (char >= 'a' && char <= 'z') {
            consonantCharacters += char;
        }
    }
    
    // Output result
    console.log("Vowel Characters :");
    console.log(vowelCharacters);
    
    console.log("Consonant Characters :");
    console.log(consonantCharacters);
}

// Prompt user for input
rl.question("Input one line of words (S): ", function(input) {
    sortCharacters(input);
    rl.close();
});
