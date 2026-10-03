/* =========================================================
   GLOBAL SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.15,
        rootMargin: "0px 0px -5% 0px"
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =========================================================
   COUNTER ANIMATION
   ========================================================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            if (!Number.isFinite(target)) {
                observer.unobserve(counter);
                return;
            }

            const duration = 1200;
            const startTime = performance.now();

            function updateCounter(time) {
                const elapsed = time - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);

                counter.textContent = Math.floor(eased * target);

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            }

            requestAnimationFrame(updateCounter);
            observer.unobserve(counter);
        });
    },
    {
        threshold: 0.7
    }
);

counters.forEach((counter) => {
    counterObserver.observe(counter);
});
