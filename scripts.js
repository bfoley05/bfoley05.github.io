window.scrollTo({
    top: 0,
    behavior: "instant",
});

window.addEventListener('load', () => {
    window.scrollTo({
        top: 0,
        behavior: "instant" // Adjust scroll behavior as needed
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('header nav ul');

    menuIcon.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
});


window.addEventListener('scroll', function() {
    var heroSection = document.getElementById('hero-section');
    var video = document.getElementById('background-video');
    var heroBottom = heroSection.getBoundingClientRect().bottom;
    var windowHeight = window.innerHeight;

    if (heroBottom <= 0) {
        video.style.opacity = 0; // Hide the video when the hero section is out of view
    } else {
        // Calculate the opacity based on the distance to the bottom of the hero section
        var opacity = heroBottom / windowHeight;
        video.style.opacity = opacity;
    }
});

window.onload = function() {
    window.scrollTo({
        top: 0,
        behavior: "instant",
    });
    var background = document.getElementById('back-img');
    if (background) {
        background.style.opacity = '0';
    }
};

window.addEventListener('scroll', function() {
    var projects = document.getElementById('projects');
    var background = document.getElementById('back-img');
    var projectsTop = projects.getBoundingClientRect().top;
    var projectsBottom = projects.getBoundingClientRect().bottom;
    var windowHeight = window.innerHeight;
    
    var opacity = 0;
    if (projectsTop < windowHeight && projectsBottom > 0) {
        var visibleHeight = Math.min(windowHeight, projectsBottom) - Math.max(0, projectsTop);
        var sectionHeight = projectsBottom - projectsTop;
        opacity = visibleHeight / sectionHeight;
    }
    
    opacity = Math.max(0, Math.min(1, opacity));
    
    background.style.opacity = opacity;
});






// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}



document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card');
    const moreBtn = document.getElementById('see-more-btn');
    const lessBtn = document.getElementById('see-less-btn');
    let visibleCount = 3; // Number of cards to show initially

    // Initially show the first 3 cards
    for (let i = 0; i < visibleCount; i++) {
        if (cards[i]) cards[i].classList.add('show');
    }
    lessBtn.style.display = 'none'; // Initially hide the "See Less" button

    moreBtn.addEventListener('click', function() {
        let nextVisibleCount = visibleCount + 3; // Number of cards to show with each click
        for (let i = visibleCount; i < nextVisibleCount; i++) {
            if (cards[i]) cards[i].classList.add('show');
        }
        visibleCount = nextVisibleCount; // Update the visible count

        // Hide the "See More" button if all cards are visible
        if (visibleCount >= cards.length) {
            moreBtn.style.display = 'none';
        }
        // Show the "See Less" button if more than the initial number of cards are visible
        if (visibleCount > 3) {
            lessBtn.style.display = 'block';
        }
    });

    lessBtn.addEventListener('click', function() {
        let nextVisibleCount = Math.max(3, visibleCount - 3); // Ensure at least 3 cards are visible
        for (let i = visibleCount - 1; i >= nextVisibleCount; i--) {
            if (cards[i]) cards[i].classList.remove('show');
        }
        visibleCount = nextVisibleCount; // Update the visible count

        // Hide the "See Less" button if showing the initial number of cards
        if (visibleCount <= 3) {
            lessBtn.style.display = 'none';
        }
        // Show the "See More" button if not all cards are visible
        if (visibleCount < cards.length) {
            moreBtn.style.display = 'block';
        }
    });
});

