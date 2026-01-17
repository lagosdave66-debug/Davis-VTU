//1. Title-Case Name Formatter (Strings + Functions)   solution

function formatName(first, last) {
 function capitalize(word) {
        if (!word) {
            return "";
        }
    const firstLetter = word[0].toUpperCase();
    let restOfString = "";
        for (let i = 1; i < word.length; i++) {
 let charCode = word.charCodeAt(i);
            
            if (charCode >= 65 && charCode <= 90) {
                
                charCode += 32;
            }
            restOfString += String.fromCharCode(charCode);
        }
        return firstLetter + restOfString;
    }

    const formattedFirst = capitalize(first);
    const formattedLast = capitalize(last);

    return formattedFirst + " " + formattedLast;
}


console.log(`formatName("john", "gabriel"): ${formatName("john", "gabriel")}`);
console.log(`formatName("christiano", "ronaldo"): ${formatName("christiano", "ronaldo")}`);



//My------no 2  ----------------
//2. Text Analyzer (Functions + Loops + Strings)

function analyzeText(text) {
    // Initialize counters and the reversed string
    let vowelCount = 0;
    let digitCount = 0;
    let reversedText = "";
    const totalCharacters = text.length;

    // Define the set of vowels for easy checking
    const vowels = "aeiouAEIOU";

    // Loop 1: Analyze text for vowels and digits
    for (let i = 0; i < totalCharacters; i++) {
        const char = text[i];

        // Check for vowels
        // Iterate through the vowels string manually
        let isVowel = false;
        for (let j = 0; j < vowels.length; j++) {
            if (char === vowels[j]) {
                isVowel = true;
                break;
            }
        }
        if (isVowel) {
            vowelCount++;
        }

        // Check for digits (0-9)
        const charCode = char.charCodeAt(0);
        // ASCII codes for '0' (48) to '9' (57)
        if (charCode >= 48 && charCode <= 57) {
            digitCount++;
        }
    }

    // Loop 2: Reverse the text
    // Start from the last character and prepend to reversedText
    for (let i = totalCharacters - 1; i >= 0; i--) {
        reversedText += text[i];
    }

    return {
        totalCharacters: totalCharacters,
        vowelCount: vowelCount,
        digitCount: digitCount,
        reversedText: reversedText,
    };
}

const analysisResult = analyzeText("Hello World! i love madrid club.");
console.log(`analyzeText("Hello World! i hate manchester United."):`);
console.log(analysisResult);



//-----------No 4
//4. Data Type Comparator (Functions + typeof + Comparison)

function compareValues(a, b) {
    const typeOfA = typeof a;
    const typeOfB = typeof b;

    return {
        sameDataType: typeOfA === typeOfB,
        strictlyEqual: a === b,
        dataTypeA: typeOfA,
        dataTypeB: typeOfB
    };
}
console.log(`compareValues(10, "10"):`);
console.log(compareValues(10, "10")); // Should be: false, false, 'number', 'string'
console.log(`compareValues(true, 1):`);
console.log(compareValues(true, 1)); // Should be: false, false, 'boolean', 'number'
console.log(`compareValues(null, null):`);
console.log(compareValues(null, null)); // Should be: true, true, 'object', 'object'



//-----------No 5
// 5. Custom Range Generator (Loops + Arrays)


function generateRange(start, end) {
    const result = [];

    // Check the condition for returning an empty array
    if (start > end) {
        return result;
    }

    // Loop from the starting number up to and including the ending number
    for (let i = start; i <= end; i++) {
        // Add the current number to the result array
        result[result.length] = i;
    }

    return result;
}

console.log(`generateRange(3, 7): [${generateRange(3, 7).join(', ')}]`);
console.log(`generateRange(10, 5): [${generateRange(10, 5).join(', ')}]`);

//--------------No 6
//6. Sum of 2D Array (Nested Loops)
 
function sumNested(arr) {
    let totalSum = 0;

    // Outer loop iterates through the rows (sub-arrays)
    for (let i = 0; i < arr.length; i++) {
        const subArray = arr[i];

        // Inner loop iterates through the elements in the current sub-array
        for (let j = 0; j < subArray.length; j++) {
            // Add the current number to the total sum
            totalSum += subArray[j];
        }
    }

    return totalSum;
}


const nestedArray = [[2, 3], [4, 1], [10, -5]];
console.log(`sumNested([[2, 3], [4, 1], [10, -5]]): ${sumNested(nestedArray)}`); // 15


// 7. Device Specification Reader (Objects + Loops)

const device = {
    name: "Laptop",
    price: 350000,
    specs: {
        ram: "8GB",
        storage: "256GB",
        processor: "i5"
    }
};

function printSpecs(device) {
    const specs = device.specs;

    console.log("Device Specifications:");
    // The for...in loop iterates over the enumerable properties (keys) of an object
    for (const key in specs) {
        // Use hasOwnProperty to ensure we are only getting properties directly on the specs object
        if (specs.hasOwnProperty(key)) {
            // Print the key and the corresponding value
            console.log(`  ${key.toUpperCase()}: ${specs[key]}`);
        }
    }
}


printSpecs(device);


// 8. Controlled Loop Execution (Loops + continue + break)
 
function controlledLoop() {
    console.log("Numbers from 1 to 100 (excluding multiples of 5, stopping at 73):");
    let i = 1;

    // Use a while loop that theoretically runs up to 100
    while (i <= 100) {

        // Check the stopping condition first: stop the loop completely once the number reaches 73
        if (i === 73) {
            console.log(`\n--- Loop stopped at ${i} by 'break' condition. ---`);
            break; 
        }

        // Check the skipping condition: skip any number that is a multiple of 5
        if (i % 5 === 0) {
            // Increment the counter BEFORE continue, otherwise it will be an infinite loop
            i++; 
            // The 'continue' statement skips the rest of the loop body for the current iteration
            continue;
        }

        // If neither condition was met, print the number
        process.stdout.write(`${i} `);

        // Increment the counter
        i++;
    }
}


controlledLoop();


// 9. Data Type Counter (Arrays + typeof + Loops)
 
function countDataTypes(arr) {
    const counts = {
        number: 0,
        string: 0,
        boolean: 0,
        object: 0,
        null: 0, // 'typeof null' returns 'object', so we need a special check
        undefined: 0
    };

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        // Special check for null, since typeof null === 'object'
        if (item === null) {
            counts.null++;
            continue; // Move to the next item
        }

        // Use typeof for all other standard types
        const type = typeof item;

        // Use a switch or if/else if to check for the required types
        if (counts.hasOwnProperty(type)) {
            counts[type]++;
        }
        // No else block is needed as only the requested types are counted
    }

    return counts;
}


const mixedArray = [10, "hi", null, {a: 1}, true, undefined, 42.5, "world", false, [1, 2]];
const typeCountResult = countDataTypes(mixedArray);
console.log(`countDataTypes([10, "hi", null, {a: 1}, true, undefined, 42.5, "world", false, [1, 2]]):`);
console.log(typeCountResult);


// 10. String Growth Pattern (Loops + Strings)
 
function stringPattern(word) {
    const patternArray = [];
    let currentString = "";

    // Loop through each character of the input word
    for (let i = 0; i < word.length; i++) {
        // Append the current character to the currentString
        currentString += word[i];
        
        // Add the newly formed string to the result array
        patternArray[patternArray.length] = currentString;
    }

    return patternArray;
}

console.log(`stringPattern("CODE"): [${stringPattern("CODE").join(', ')}]`);
console.log(`stringPattern("JavaScript"): [${stringPattern("JavaScript").join(', ')}]`);