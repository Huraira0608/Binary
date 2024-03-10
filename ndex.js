// Function to convert binary to decimal
function binaryToDecimal(binary) {
    let decimal = 0;
    let base = 1; // Starting from the rightmost bit

    // Loop through each bit of the binary number
    for (let i = binary.length - 1; i >= 0; i--) {
        // If the current bit is 1, add the corresponding decimal value to the result
        if (binary[i] === '1') {
            decimal += base;
        }
        // Move to the next bit by increasing the base (base doubles each iteration)
        base *= 2;
    }

    return decimal;
}

// Taking input from the user
let binaryInput = prompt("Enter a binary number:");

// Converting input to decimal
let decimalOutput = binaryToDecimal(binaryInput);

// Displaying the result
console.log("Decimal equivalent:", decimalOutput);