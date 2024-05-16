// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('form');
//     const phoneInput = document.getElementById('phone');
//     const warning2 = document.querySelector('.warning2');

//     form.addEventListener('submit', function(event) {
//         const phoneValue = phoneInput.value;
//         const phoneNum = phoneValue.replace(/[^0-9]/g, ''); // Remove non-numeric characters

//         if (phoneNum.length !== 10) {
//             warning2.style.display = 'block';
//             warning2.textContent = 'Enter a 10 digit phone number';
//             event.preventDefault(); // Prevent form submission
//         } else {
//             warning2.style.display = 'none';
//         }
//     });
// });