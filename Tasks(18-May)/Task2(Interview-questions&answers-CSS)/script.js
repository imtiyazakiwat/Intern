document.addEventListener("DOMContentLoaded", function() {
    const questionsAndAnswers = [
        {
            question: "What is CSS?",
            answer: "CSS stands for Cascading Style Sheets. It is used to define the presentation of a document written in HTML, including colors, layout, and fonts."
        },
        {
            question: "What are the different types of CSS selectors?",
            answer: "CSS selectors are patterns used to select elements to style. Common types include element selectors, class selectors, ID selectors, attribute selectors, and pseudo-class selectors."
        },
        {
            question: "What is the box model in CSS?",
            answer: "The CSS box model describes the rectangular boxes generated for elements in the document tree and consists of margins, borders, padding, and the actual content area."
        },
        {
            question: "What is the difference between padding and margin?",
            answer: "Padding is the space between the content and the border of an element, while margin is the space outside the border of an element."
        },
        {
            question: "What is the purpose of the z-index property in CSS?",
            answer: "The z-index property specifies the stack order of elements. An element with a higher z-index is always in front of an element with a lower z-index."
        },
        {
            question: "What is a CSS preprocessor?",
            answer: "A CSS preprocessor is a scripting language that extends CSS and gets compiled into regular CSS syntax. Examples include Sass, LESS, and Stylus."
        },
        {
            question: "What are flexbox and grid layout in CSS?",
            answer: "Flexbox is a one-dimensional layout model for arranging items in rows or columns. Grid layout is a two-dimensional model for layout items in rows and columns."
        },
        {
            question: "What are media queries in CSS?",
            answer: "Media queries are used to apply CSS styles based on the characteristics of the user's device, such as the screen width, height, orientation, resolution, and more."
        },
        {
            question: "What is the difference between absolute and relative positioning in CSS?",
            answer: "Absolute positioning places an element relative to its nearest positioned ancestor, while relative positioning moves an element relative to its original position."
        },
        {
            question: "What is a CSS framework?",
            answer: "A CSS framework is a pre-prepared library that is meant to be used as a base for starting the design of a website. Examples include Bootstrap, Foundation, and Bulma."
        },
        {
            question: "How do you center a div element in CSS?",
            answer: "You can center a div horizontally using margin: 0 auto; or flexbox: display: flex; justify-content: center;. Vertically centering can be done with flexbox: display: flex; align-items: center; or using absolute positioning."
        },
        {
            question: "What is the difference between inline, block, and inline-block elements?",
            answer: "Inline elements do not start on a new line and only take up as much width as necessary. Block elements start on a new line and take up the full width available. Inline-block elements are like inline elements but respect width and height."
        },
        {
            question: "What are pseudo-classes in CSS?",
            answer: "Pseudo-classes are keywords added to selectors that specify a special state of the selected elements. Examples include :hover, :focus, :nth-child(), and :last-child."
        },
        {
            question: "What are pseudo-elements in CSS?",
            answer: "Pseudo-elements allow you to style parts of an element. Common pseudo-elements include ::before, ::after, ::first-line, and ::first-letter."
        },
        {
            question: "What is the purpose of the display property in CSS?",
            answer: "The display property specifies the display behavior of an element. Common values include block, inline, inline-block, flex, grid, and none."
        },
        {
            question: "What is the float property in CSS?",
            answer: "The float property is used for positioning and formatting content, such as allowing text to wrap around an image. Elements can be floated to the left or right."
        },
        {
            question: "How do you create a responsive design using CSS?",
            answer: "Responsive design can be achieved using fluid grids, flexible images, and media queries. This approach ensures that the layout adapts to different screen sizes and devices."
        },
        {
            question: "What is the purpose of the opacity property in CSS?",
            answer: "The opacity property sets the transparency level of an element. Values range from 0 (completely transparent) to 1 (completely opaque)."
        },
        {
            question: "How do you implement CSS transitions?",
            answer: "CSS transitions allow you to change property values smoothly over a given duration. Example: transition: background-color 0.3s ease-in-out;."
        },
        {
            question: "What is the difference between a reset and a normalize CSS file?",
            answer: "A reset CSS file removes all default browser styling, while a normalize CSS file makes the default styling consistent across different browsers."
        },
        {
            question: "What is the use of the @import rule in CSS?",
            answer: "The @import rule is used to import one stylesheet into another. It must be at the top of the CSS file before any other rules."
        },
        {
            question: "How do you hide an element using CSS?",
            answer: "You can hide an element using display: none; (removes the element from the layout) or visibility: hidden; (hides the element but retains its space in the layout)."
        },
        {
            question: "What is the difference between the :nth-child() and :nth-of-type() selectors?",
            answer: "The :nth-child() selector targets elements based on their position within their parent, regardless of type. The :nth-of-type() selector targets elements based on their position among siblings of the same type."
        },
        {
            question: "What is a CSS variable?",
            answer: "CSS variables, also known as custom properties, allow you to store values that can be reused throughout a document. They are defined using --variable-name and accessed using var(--variable-name)."
        },
        {
            question: "What is the purpose of the calc() function in CSS?",
            answer: "The calc() function performs calculations to determine CSS property values. It can be used to dynamically set lengths, sizes, and other numerical values. Example: width: calc(100% - 50px);."
        }
    ];

    const questionsContainer = document.getElementById('questions-container');

    questionsAndAnswers.forEach(qa => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionHeader = document.createElement('h3');
        questionHeader.textContent = qa.question;

        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        const answerParagraph = document.createElement('p');
        answerParagraph.textContent = qa.answer;

        answerDiv.appendChild(answerParagraph);

        questionDiv.appendChild(questionHeader);
        questionDiv.appendChild(answerDiv);

        questionsContainer.appendChild(questionDiv);
    });
});
