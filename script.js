function toCase() {
    const inputString = prompt('Enter a string:');
    
    if (inputString && inputString.length > 0) {
        const lowerCaseString = inputString.toLowerCase();
        const upperCaseString = inputString.toUpperCase();
        alert(`${lowerCaseString}-${upperCaseString}`);
    } else {
        alert('-');
    }
}

// Call the function to get user input and display the result
toCase();
