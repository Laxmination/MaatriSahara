function login() {
    var userNumber = document.getElementById("number").value;
    var password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userNumber: userNumber, password: password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            alert("Login successful!");
            window.location.href = "/dashboard";
        } else {
            alert("Invalid username or password");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while trying to log in");
    });
}
