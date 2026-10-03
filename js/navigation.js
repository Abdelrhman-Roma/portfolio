/* =====================================
   SECTION NAVIGATION
===================================== */

const sections =
    document.querySelectorAll("section");


const navDots =
    document.querySelectorAll(".nav-dot");


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const id =
                        entry.target.id;


                    navDots.forEach((dot) => {

                        dot.classList.remove("active");

                        if (
                            dot.dataset.section === id
                        ) {
                            dot.classList.add("active");
                        }

                    });

                }

            });

        },
        {
            threshold: 0.55
        }
    );


sections.forEach((section) => {

    sectionObserver.observe(section);

});