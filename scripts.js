/* script.js */

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const header = document.querySelector("header");
    const toTopButton = document.createElement("button");

    // Add smooth scrolling to internal links
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // Change navbar background on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Back to top button
    toTopButton.innerText = "↑";
    toTopButton.className = "to-top-btn btn btn-primary";
    toTopButton.style.position = "fixed";
    toTopButton.style.bottom = "20px";
    toTopButton.style.right = "20px";
    toTopButton.style.display = "none";
    document.body.appendChild(toTopButton);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            toTopButton.style.display = "block";
        } else {
            toTopButton.style.display = "none";
        }
    });

    toTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    console.log("Isam Technology website loaded successfully!");
});


// landing page

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const header = document.querySelector("header");
    const toTopButton = document.createElement("button");

    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // Change navbar background on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Back to top button
    toTopButton.innerText = "↑";
    toTopButton.className = "to-top-btn btn btn-primary";
    toTopButton.style.position = "fixed";
    toTopButton.style.bottom = "20px";
    toTopButton.style.right = "20px";
    toTopButton.style.display = "none";
    document.body.appendChild(toTopButton);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            toTopButton.style.display = "block";
        } else {
            toTopButton.style.display = "none";
        }
    });

    toTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Landing Page Animations
    const landingContent = document.querySelector(".landing-content");
    if (landingContent) {
        setTimeout(() => {
            landingContent.classList.add("animate");
        }, 500);
    }

    console.log("Landing page enhancements loaded successfully!");
});
