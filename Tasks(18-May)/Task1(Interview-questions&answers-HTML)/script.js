const questionsAndAnswers = [
    {
        question: "What is HTML5 and how is it different from HTML4?",
        answer: "HTML5 is the latest version of HyperText Markup Language, which includes new features like semantic elements, multimedia elements (<audio> and <video>), and new APIs. It differs from HTML4 by offering more functionality for modern web development."
    },
    {
        question: "What are semantic HTML elements?",
        answer: "Semantic HTML elements clearly describe their meaning in a human- and machine-readable way. Examples include <article>, <section>, <nav>, and <footer>. These elements provide better accessibility and SEO benefits."
    },
    {
        question: "How do you ensure cross-browser compatibility in HTML?",
        answer: "To ensure cross-browser compatibility, use valid and standards-compliant HTML, CSS resets, vendor prefixes, and feature detection libraries like Modernizr. Testing in multiple browsers is also essential."
    },
    {
        question: "What is the difference between <div> and <span>?",
        answer: "<div> is a block-level element used to group larger sections of content, while <span> is an inline element used to apply styles or manipulate a small portion of text or content."
    },
    {
        question: "What is the purpose of the data-* attribute in HTML5?",
        answer: "The data-* attribute is used to store custom data private to the page or application. It can be accessed via JavaScript and used to add extra information to HTML elements without using non-standard attributes."
    },
    {
        question: "Explain the concept of 'defer' and 'async' attributes in script tags.",
        answer: "The 'defer' attribute loads the script after the HTML document has been fully parsed, while the 'async' attribute loads the script asynchronously without blocking the HTML parsing. Both attributes improve page load performance."
    },
    {
        question: "What is the <picture> element used for in HTML5?",
        answer: "The <picture> element provides multiple sources for a single image, allowing for responsive and adaptive image serving. It helps deliver the most appropriate image based on screen size, resolution, and other factors."
    },
    {
        question: "How do you use localStorage and sessionStorage in HTML5?",
        answer: "localStorage and sessionStorage are web storage objects that allow you to store data in key-value pairs in a web browser. localStorage persists data indefinitely, while sessionStorage only lasts for the duration of the page session."
    },
    {
        question: "What is the <template> element used for?",
        answer: "The <template> element is used to declare fragments of HTML that are not rendered until they are inserted into the document using JavaScript. It allows you to create reusable HTML chunks."
    },
    {
        question: "What is the purpose of the <meta> viewport element?",
        answer: "The <meta> viewport element controls the layout on mobile browsers by setting the viewport's width and scale. It ensures that web pages render correctly on different devices."
    },
    {
        question: "What are HTML entities?",
        answer: "HTML entities are used to display reserved characters in HTML or to express characters that are not present on the keyboard. Examples include &amp; for &, &lt; for <, and &gt; for >."
    },
    {
        question: "What is the difference between <strong> and <b> tags?",
        answer: "<strong> is used to indicate that text is of strong importance, and typically renders in bold. <b> is used for stylistic purposes and also renders in bold, but without implying any extra importance."
    },
    {
        question: "What is the difference between <em> and <i> tags?",
        answer: "<em> is used to emphasize text, typically rendering in italics and suggesting a stronger meaning. <i> is used for stylistic purposes and renders text in italics without implying any extra meaning."
    },
    {
        question: "What is the purpose of the <header> and <footer> elements?",
        answer: "<header> is used to define a header for a document or section, and <footer> defines a footer. These elements typically contain introductory or navigational aids (in headers) and information about the document (in footers)."
    },
    {
        question: "What is the role of the <main> element?",
        answer: "The <main> element is used to represent the dominant content of the <body> of a document. It should only be used once per document and is intended to improve accessibility by helping assistive technologies identify the main content."
    },
    {
        question: "How can you embed a video in an HTML document?",
        answer: "You can embed a video using the <video> element. For example: <video controls><source src='video.mp4' type='video/mp4'></video>. The controls attribute adds video controls like play, pause, and volume."
    },
    {
        question: "What is ARIA and why is it important?",
        answer: "ARIA (Accessible Rich Internet Applications) is a set of attributes that define ways to make web content and web applications more accessible to people with disabilities. It is important for creating inclusive web experiences."
    },
    {
        question: "What is the purpose of the <time> element?",
        answer: "The <time> element is used to represent a specific period in time. It can be used to encode dates and times in a machine-readable format, improving accessibility and SEO."
    },
    {
        question: "How do you create a table in HTML?",
        answer: "You create a table using the <table> element, with nested <tr> (table row), <th> (table header), and <td> (table data) elements. Example: <table><tr><th>Header</th></tr><tr><td>Data</td></tr></table>."
    },
    {
        question: "What is the purpose of the <blockquote> element?",
        answer: "The <blockquote> element is used to define a section that is quoted from another source. It typically renders with indentation and can include a cite attribute for the source URL."
    },
    {
        question: "How do you create a hyperlink in HTML?",
        answer: "You create a hyperlink using the <a> element with the href attribute specifying the URL. Example: <a href='https://example.com'>Visit Example</a>."
    },
    {
        question: "What is the purpose of the <aside> element?",
        answer: "The <aside> element is used to define content that is tangentially related to the content around it, such as sidebars, callout boxes, or pull quotes."
    },
    {
        question: "What are custom elements in HTML5?",
        answer: "Custom elements are a part of Web Components, allowing you to define new HTML tags and behaviors. They can be created using JavaScript by extending HTMLElement."
    },
    {
        question: "What is the <canvas> element used for?",
        answer: "The <canvas> element is used to draw graphics on the fly via JavaScript. It provides a space where you can render graphics, manipulate images, and create animations."
    },
    {
        question: "How do you specify a default fallback content for browsers that do not support HTML5 elements?",
        answer: "You can specify fallback content by placing alternative content within the HTML5 element tags. Browsers that do not support the element will render the fallback content. For example: <video controls><source src='video.mp4' type='video/mp4'>Your browser does not support the video tag.</video>."
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
