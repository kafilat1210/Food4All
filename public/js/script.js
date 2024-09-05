document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
  
    // Handle registration form submission
    registerForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('/routes/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });
  
        const data = await response.json();
        if (response.ok) {
          alert('Registration successful!');
        } else {
          alert(`Registration failed: ${data.error}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during registration.');
      }
    });
  
    // Handle login form submission
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
  
      try {
        const response = await fetch('/routes/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        const data = await response.json();
        if (response.ok) {
          alert('Login successful!');
          // Store the token in localStorage or a cookie
          localStorage.setItem('token', data.token);
        } else {
          alert(`Login failed: ${data.error}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login.');
      }
    });
  });
  