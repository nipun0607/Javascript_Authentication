const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const container = document.querySelector('.container');

// Handle form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    const onlineId = document.getElementById('online-id').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can add more complex validation if needed)
    if (onlineId === '' || password === '') {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';

        // Start the animation to expand the image and hide the left side
        container.classList.add('fullscreen-active');

        // Hide the fullscreen image after 5 seconds
        setTimeout(function() {
            container.classList.remove('fullscreen-active');
        }, 5000); // 5 seconds
    }
});

// Handle Enroll Now button click to clear input fields
document.querySelector('.header-right button').addEventListener('click', function() {
    // Clear input fields in the form
    document.querySelectorAll('.auth-form input').forEach(input => input.value = '');

    // Optional: You can trigger other actions here if needed
});
