let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

// Toggle between login and registration forms
let switchForm = document.querySelector('.switch-form');
let registerSection = document.querySelector('.register-section');
let loginSection = document.querySelector('.login-section');

switchForm.onclick = (e) => {
    e.preventDefault();
    // Toggle visibility of login and register sections
    if (loginSection.style.display === "none") {
        loginSection.style.display = "flex";
        registerSection.style.display = "none";
        switchForm.textContent = "Don't have an account? Register";
    } else {
        loginSection.style.display = "none";
        registerSection.style.display = "flex";
        switchForm.textContent = "Already have an account? Login";
    }
};

// Handle Register Button Click (AJAX Registration)
document.querySelector('#register-btn').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form from submitting traditionally

    // Get form data
    let username = document.querySelector('#register-username').value;
    let email = document.querySelector('#register-email').value;
    let password = document.querySelector('#register-password').value;

    // Create data object
    let data = {
        username: username,
        email: email,
        password: password
    };

    // Send data to the server via AJAX (using Fetch API)
    fetch('register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Set content type to JSON
        },
        body: JSON.stringify(data) // Send data as JSON
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Registration successful!');
            // Optionally, redirect to login page or clear the form
            registerSection.style.display = "none";
            loginSection.style.display = "flex";
        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    });
});

// Swiper settings for product slider
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});
