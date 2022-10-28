

// Function to restrict user in the resume page from coming back to login page
window.history.forward();
function noback() {
    window.history.forward();
}
// loginCredentials storage in Map
const userCredentials = new Map([
    ["user1", "pass1"],
    ["user2", "pass2"],
    ["user3", "pass3"],
    ["user4", "pass4"]]);
console.log(userCredentials);
let form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let user = [
        username,
        password
    ];
    console.log(user);
    // to store user details in local Storage
    localStorage.setItem('user', JSON.stringify(user));
    // If username, password match with userCredentials Map we enter resume page
    if (userCredentials.has(username)) {
        if (userCredentials.get(username) === password) {
            alert("Login Successful");
            window.location = 'resumePage.html';
            return;
        }
        else {
            alert("Invalid Password");
            return;
        }
    }
    else {
        alert("Invalid user");
        return;
    }
}
)

