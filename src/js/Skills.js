// circular progress bar script start ----------------------

const circularProgress = document.querySelectorAll(".circular-progress");

const observerOptions = {
    threshold: 0.1, // 10% visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;

            const progressValue = progressBar.querySelector(".percentage");
            const innerCircle = progressBar.querySelector(".inner-circle");
            let startValue = 0,
                endValue = Number(progressBar.getAttribute("data-percentage")),
                speed = 50,
                progressColor = progressBar.getAttribute("data-progress-color");

            const progress = setInterval(() => {
                startValue++;
                progressValue.textContent = `${startValue}%`;

                innerCircle.style.backgroundColor = progressBar.getAttribute("data-inner-circle-color");

                progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6
                    }deg, ${progressBar.getAttribute("data-bg-color")} 0deg)`;

                if (startValue === endValue) {
                    clearInterval(progress);
                }
            }, speed);

            // Optional: Stop observing after animation starts
            observer.unobserve(progressBar);
        }
    });
}, observerOptions);

// Attach observer to all progress bars
circularProgress.forEach(bar => observer.observe(bar));


// circular progress bar script end ----------------------