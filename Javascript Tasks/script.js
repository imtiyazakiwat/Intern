        function toggleAnswer(answerId) {
            var answer = document.getElementById(answerId);
            var dropdownIcon = answer.previousElementSibling.querySelector('.dropdown-icon');
            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "block";
                dropdownIcon.textContent = "▲";
            } else {
                answer.style.display = "none";
                dropdownIcon.textContent = "▼";
            }
        }

        document.addEventListener("DOMContentLoaded", function() {
            var animationExamples = document.getElementById("answer2");
            var animations = [
                { name: "Fade In", class: "fade-in" },
                { name: "Slide In", class: "slide-in" },
                { name: "Rotate", class: "rotate" },
                { name: "Bounce", class: "bounce" },
                { name: "Zoom In", class: "zoom-in" },
                { name: "Flip", class: "flip" },
                { name: "Pulse", class: "pulse" }
            ];

            animations.forEach(function(animation) {
                var element = document.createElement("div");
                element.classList.add("animation-example");
                element.classList.add(animation.class);
                element.innerText = animation.name;
                element.addEventListener("click", function() {
                    this.classList.toggle(animation.class);
                    void this.offsetWidth; // Trigger reflow to restart animation
                    this.classList.toggle(animation.class);
                });
                animationExamples.appendChild(element);
            });
        });
