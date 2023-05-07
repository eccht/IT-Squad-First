const btns = document.querySelectorAll("[class*='arrow-']");

btns.forEach(elem => {
    elem.addEventListener("click", function (event) {
        event.preventDefault();

        const slides = document.querySelectorAll("[class*='slide-']");
        const lastSlide = slides[slides.length-1];
        const firstSlide = slides[0];
        const activeSlide = document.querySelector(".active");
    
        if (this.classList.contains("arrow-prev")) {
            activeSlide.classList.remove("active");
            const prevSlide = activeSlide.previousElementSibling;
            if (prevSlide) {
                prevSlide.classList.add("active");
            } else {
                lastSlide.classList.add("active");
            };
        };

        if (this.classList.contains("arrow-next")) {
            activeSlide.classList.remove("active");
            const nextSlide = activeSlide.nextElementSibling;
            if (nextSlide.tagName == "DIV") {
                nextSlide.classList.add("active");
            } else {
                firstSlide.classList.add("active");
            };
        };
    });
});