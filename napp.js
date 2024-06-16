document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
    

    const courses = [
        { title: 'Introduction to Programming', description: 'Learn the basics of programming with Python.' },
        { title: 'Web Development', description: 'Become proficient in HTML, CSS, and JavaScript.' },
        { title: 'Data Structures and Algorithms', description: 'Understand data structures and algorithms in depth.' },
        // Add more courses as needed
    ];

    const courseList = document.querySelector('#courses .course-list');

    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
        
        const courseTitle = document.createElement('h3');
        courseTitle.textContent = course.title;
        courseItem.appendChild(courseTitle);
        
        const courseDescription = document.createElement('p');
        courseDescription.textContent = course.description;
        courseItem.appendChild(courseDescription);
        
        courseList.appendChild(courseItem);
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('showing');
    });
})
