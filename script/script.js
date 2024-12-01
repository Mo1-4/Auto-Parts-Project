// Nav Mobile Toggle
let bars = document.getElementById("bars");
let accordionItems = document.getElementById("accordionItems");

bars.addEventListener("click", () =>{
    accordionItems.classList.toggle("hidden");
    accordionItems.classList.toggle("active");
})

// Scroll Animation
const elements = document.querySelectorAll('.animate');
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
    entry.target.classList.add('animate-in');
    }
});
}, {

threshold: 0.5,
});

elements.forEach((element) => {
observer.observe(element);
});

// Scroll To Top Button
let backToTopButton = document.getElementById("backToTopButton");

window.addEventListener("load", () =>{
    window.scrollTo(0,0)
})

window.addEventListener("scroll", () =>{
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        backToTopButton.style.display = "flex";
    } else{
        backToTopButton.style.display = "none";
    }
})

backToTopButton.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})