// Toggle styling of nav bar when screen width becomes smaller
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active');
}

// Link social media icons to social media pages
const githubButtons = document.querySelectorAll('.github');
githubButtons.forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = "https://github.com/soshwosh";
    });
});

const linkedinButtons = document.querySelectorAll('.linkedin');
linkedinButtons.forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = "https://www.linkedin.com/in/sasha-r-persaud/";
    });
});

const instagramButtons = document.querySelectorAll('.instagram');
instagramButtons.forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = "https://www.instagram.com/sosh.goes.to.ghc/";
    });
});

// Link Github repos to project cards
const aws_sent_analysis_news_repo = "https://github.com/SWEN-514-614-2231/term-project-team01"
const aws_sent_analysis_news_btn = document.querySelector('.aws_sent_analysis_news');
aws_sent_analysis_news_btn.addEventListener('click', function() {
    window.location.href = aws_sent_analysis_news_repo;
});

// Send emails using Contact Me section
document.getElementById("contact-form").addEventListener('submit', function(event) {
    // Collect input values
    const from_name = document.getElementById('name').value;
    const from_email = document.getElementById('email').value;
    const from_phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Setup email params
    const templateParams = {
        from_name: from_name,
        from_email: from_email,
        from_phone: from_phone,
        subject: subject,
        message: message,
    };

    // Send email using EmailJS
    emailjs.send('service_q76dg58', 'contact_form', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email sent successfully.");
        }, function(error){
            console.log('FAILED...', error);
            alert("Failed to send email.");
        });
});