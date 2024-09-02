document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Register form submitted:', { username, email, password });

    try {
        const response = await fetch('http://localhost:5000/routes/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });
        const data = await response.json();
        console.log('Registration response:', data);
    } catch (error) {
        console.error('Error registering:', error);
    }
});

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    console.log('Login form submitted:', { email, password });

    try {
        const response = await fetch('http://localhost:5000/routes/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        console.log('Login response:', data);
        localStorage.setItem('token', data.token);
        fetchFoodListings();
    } catch (error) {
        console.error('Error logging in:', error);
    }
});

async function fetchFoodListings() {
    console.log('Fetching food listings');
    try {
        const response = await fetch('http://localhost:5000/routes/food', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });
        const listings = await response.json();
        console.log('Food listings response:', listings);
        const listingsElement = document.getElementById('listings');
        listingsElement.innerHTML = '';
        listings.forEach(listing => {
            const li = document.createElement('li');
            li.textContent = `${listing.title} - ${listing.description}`;
            listingsElement.appendChild(li);
        });
    } catch (error) {
        console.error('Error fetching food listings:', error);
    }
}
