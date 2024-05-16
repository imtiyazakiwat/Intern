var form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var isValid = true;

    var inputs = form.querySelectorAll('.form-item');
    for (var i = 0; i < inputs.length; i++) {
        var input = inputs[i];
        var element_class = '.error-' +i;
        const element = document.querySelector(element_class);
        if (!input.value) {
            clearerrors();
                     element.style.visibility = 'visible';
                     isValid = false;
                     break;
                 }
        if(i==2){
            if(input.value.length !== 10){
                element.innerHTML="please enter 10 digit number"
                console.log("please enter 10 digit number")
                console.log(input.value.length);
                element.style.visibility = 'visible';
                isValid = false;
                break;
                }
           }
        
        
    }

    if (isValid) {
        clearerrors();
        alert("Details are submitted. Thank you!");
    }
});


function clearerrors(){
    const spans = document.querySelectorAll('span');
    spans.forEach(span => {
        span.style.visibility = 'hidden';
    });
}
