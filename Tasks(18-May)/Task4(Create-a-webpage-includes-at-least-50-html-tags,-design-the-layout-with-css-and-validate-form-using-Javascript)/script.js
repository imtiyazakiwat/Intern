document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    let name = document.querySelector('#contactForm input[type="text"]').value;
    let email = document.querySelector('#contactForm input[type="email"]').value;
    let message = document.querySelector('#contactForm textarea').value;

    // Basic Validation (You can add more complex checks)
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Email validation (you can use more robust regex)
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If validation passes, submit the form or process data (e.g., send to a server)
    // ... your form submission logic ...

    alert("Thank you for your message! I'll get back to you soon.");
});

// Function to get all used HTML tags and display them
function displayHtmlTags() {
    const htmlTags = document.querySelectorAll('*'); 
    const tagsContainer = document.querySelector('.tags-container');

    htmlTags.forEach(element => {
        let tagName = element.tagName.toLowerCase();
        let tagElement = document.createElement('div');
        tagElement.classList.add('tag');
        tagElement.textContent = tagName;
        tagsContainer.appendChild(tagElement);
    });
}

// Call the function after the page loads
window.onload = displayHtmlTags;