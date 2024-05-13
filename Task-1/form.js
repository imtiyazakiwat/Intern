var form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var isValid = true;

    var inputs = form.querySelectorAll('.form-item');

    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        if (!input.value) {
            alert('Please fill out the ' + input.name + ' field.');
            isValid = false;
            break;
        }
    }

    if (isValid) {
        alert("Details are submitted. Thank you!");
    }
});
