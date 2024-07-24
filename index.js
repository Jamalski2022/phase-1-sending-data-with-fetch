// Add your code here
// Function definition in your JavaScript file
function submitData(name, email) {
    const userData = {
        name: name,
        email: email
    };

    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Setting the Content-Type header
            'Accept': 'application/json' // Optionally, you can add the Accept header
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(data => {
            document.body.innerHTML = data.id;  // Example of appending ID to the DOM
        })
        .catch(error => {
            document.body.innerHTML = error.message;  // Example of appending error message to the DOM
        });
}

// Export the function if using modules
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = submitData;
}



