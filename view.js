// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
    // Formula for simple interest
    const interest = (principal * rate * time) / 100;
    return interest;
}

// Example usage
const principal = 10; // Principal amount
const rate = 50;         // Interest rate
const time = 73;         // Time in years

// Calculate interest
const interest = calculateSimpleInterest(principal, rate, time);
console.log(`Simple Interest: ${interest}`);
