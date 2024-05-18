document.addEventListener("DOMContentLoaded", function() {
    const jsQuestionsAndAnswers = [
        {
            question: "What is JavaScript?",
            answer: "JavaScript is a versatile programming language primarily used for creating interactive effects within web browsers."
        },
        {
            question: "What are JavaScript data types?",
            answer: "JavaScript data types include Number, String, Boolean, Object, Undefined, Null, Symbol, and BigInt."
        },
        {
            question: "Explain event delegation in JavaScript.",
            answer: "Event delegation is a technique where a single event listener is added to a parent element to manage events for all of its child elements, improving performance and simplifying code."
        },
        {
            question: "What is a closure in JavaScript?",
            answer: "A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope."
        },
        {
            question: "Differentiate between '==' and '==='.",
            answer: "'==' checks for value equality with type coercion, whereas '===' checks for both value and type equality without type coercion."
        },
        {
            question: "What is the 'this' keyword in JavaScript?",
            answer: "The 'this' keyword refers to the context in which a function is executed. It can refer to different objects depending on the invocation context."
        },
        {
            question: "What is the difference between 'var', 'let', and 'const'?",
            answer: "'var' is function-scoped, 'let' and 'const' are block-scoped. 'let' allows re-assignment, while 'const' does not allow re-assignment."
        },
        {
            question: "Explain promises in JavaScript.",
            answer: "Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a more manageable way to handle asynchronous operations compared to callbacks."
        },
        {
            question: "What is async/await in JavaScript?",
            answer: "Async/await is syntax for handling asynchronous operations. 'async' functions return a promise, and 'await' pauses the function execution until the promise is resolved."
        },
        {
            question: "What is the DOM?",
            answer: "The DOM (Document Object Model) is an API for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated."
        },
        {
            question: "Explain the event loop in JavaScript.",
            answer: "The event loop is a mechanism that allows JavaScript to perform non-blocking operations by managing asynchronous events and executing them when the call stack is empty."
        },
        {
            question: "What is hoisting in JavaScript?",
            answer: "Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase."
        },
        {
            question: "What are arrow functions?",
            answer: "Arrow functions provide a shorter syntax for writing functions and lexically bind the 'this' value, which can be particularly useful inside callbacks."
        },
        {
            question: "What is the difference between 'call', 'apply', and 'bind'?",
            answer: "'call' and 'apply' invoke functions with a specified 'this' value and arguments. 'call' accepts arguments individually, while 'apply' accepts them as an array. 'bind' returns a new function with a specified 'this' value and arguments."
        },
        {
            question: "What is JSON?",
            answer: "JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate."
        },
        {
            question: "What is the difference between synchronous and asynchronous programming?",
            answer: "Synchronous programming executes tasks sequentially, blocking further execution until the current task completes. Asynchronous programming allows multiple tasks to be processed simultaneously without blocking."
        },
        {
            question: "What are higher-order functions?",
            answer: "Higher-order functions are functions that take other functions as arguments or return functions as their result, enabling more abstract and flexible code."
        },
        {
            question: "Explain the concept of prototypal inheritance.",
            answer: "Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects via the prototype chain."
        },
        {
            question: "What is the 'use strict' directive?",
            answer: "'use strict' is a directive introduced in ECMAScript 5 that enables strict mode, which helps catch common coding errors and improves performance by enabling optimizations."
        },
        {
            question: "What is the purpose of the 'new' keyword?",
            answer: "The 'new' keyword is used to create an instance of a user-defined object type or a built-in object type that has a constructor function."
        }
    ];

    const questionsContainer = document.getElementById('questions-container');

    jsQuestionsAndAnswers.forEach(qa => {
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
