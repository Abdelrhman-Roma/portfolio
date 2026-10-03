/* =====================================
   LOADING SCREEN
===================================== */

const loader = document.getElementById("loader");
const loaderProgress = document.getElementById("loaderProgress");
const loaderPercentage = document.getElementById("loaderPercentage");

let progress = 0;

const loadingInterval = setInterval(() => {

    progress += Math.floor(Math.random() * 8) + 3;

    if (progress >= 100) {
        progress = 100;

        clearInterval(loadingInterval);

        setTimeout(() => {
            loader.classList.add("hidden");
        }, 500);
    }

    loaderProgress.style.width = `${progress}%`;
    loaderPercentage.textContent = `${progress}%`;

}, 100);


/* =====================================
   SCROLL PROGRESS
===================================== */

const scrollProgress =
    document.getElementById("scrollProgress");


function updateScrollProgress() {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width =
        `${progress}%`;
}


window.addEventListener(
    "scroll",
    updateScrollProgress
);

updateScrollProgress();

/* =========================================================
   PROJECT DATA
   ========================================================= */

const projectData = {

    movie: {
        category: "DATA ANALYTICS / BUSINESS INTELLIGENCE",

        title: "Movie Analytics & Performance Dashboard",

        description:
            "Interactive Power BI dashboard analyzing movie performance across revenue, budget, ratings, votes, runtime, genres and release decades.",

        images: [
            "assets/images/page1.png",
            "assets/images/page2.png"
        ],

        tools: [
            "Power BI",
            "Power Query",
            "DAX",
            "Data Visualization",
            "Exploratory Data Analysis"
        ],

        highlights: [
            "Movie performance analysis",
            "Revenue trends across decades",
            "Average ratings by genre",
            "Budget vs gross revenue analysis",
            "Votes vs gross revenue analysis",
            "Total profit by decade",
            "Interactive dashboard filtering"
        ],

        github:
            "https://github.com/Abdelrhman-Roma/movie-industry-analysis"
    },


    chess: {
        category: "ARTIFICIAL INTELLIGENCE / ALGORITHMS",

        title: "AI Chess Agent",

        description:
            "An AI-powered chess game featuring intelligent gameplay through the Minimax algorithm with Alpha-Beta pruning and three tiers of heuristic evaluation functions (300-1000 ELO), combined with an interactive Pygame interface and complete chess rules implementation.",

        images: [],

        tools: [
            "Python 3.7+",
            "Pygame",
            "Minimax Algorithm",
            "Alpha-Beta Pruning",
            "Heuristic Evaluation",
            "Object-Oriented Programming"
        ],

        highlights: [
            "Minimax search with configurable depth",
            "Alpha-Beta pruning optimization",
            "Three-tiered evaluation system (Basic, Positional, Advanced)",
            "Material balance and positional analysis",
            "Piece mobility and king safety evaluation",
            "Complete chess rules (castling, en passant, promotion)",
            "Check, checkmate, and stalemate detection",
            "Interactive drag-and-drop interface",
            "Modular architecture with ai/, game/, gui/ modules"
        ],

        github:
            "https://github.com/Abdelrhman-Roma/AI-Chess-Agent"
    },


    sales: {
        category: "DATA ANALYTICS / BUSINESS INTELLIGENCE",

        title: "Sales Data Analysis & Power BI Dashboard",

        description:
            "A complete sales analytics workflow demonstrating the full data analyst pipeline: from raw data cleaning with Power Query, through transformation and structuring, to building an interactive Power BI dashboard with KPIs and business insights.",

        images: [
            "assets/images/sales-dashboard.png"
        ],

        tools: [
            "Power BI",
            "Power Query",
            "Data Cleaning",
            "Data Transformation",
            "Data Visualization",
            "KPI Development",
            "Dashboard Design"
        ],

        highlights: [
            "Raw Data → Cleaning → Transformation → Visualization pipeline",
            "254 total orders analyzed",
            "117K total quantity processed",
            "769.52K total sales tracked",
            "Sales breakdown by product and payment method",
            "Geographic performance analysis across cities",
            "Lisbon top performer: 241.71K (31.41% of sales)",
            "Payment preference insights (Cash, Credit Card, Gift Card)",
            "Text column cleaning and standardization",
            "Interactive filtering and drill-down capabilities"
        ],

        github:
            "https://github.com/Abdelrhman-Roma/sales-data-analysis-powerbi"
    },


    hr: {
        category: "HR ANALYTICS / DATA VISUALIZATION",

        title: "HR Analysis & Clean Dashboard",

        description:
            "An interactive HR Analytics Dashboard that transforms raw employee data into visual insights for workforce analysis and HR decision-making. Analyzes employee demographics, compensation, departmental performance, hiring patterns, and attrition with interactive filtering capabilities.",

        images: [
            "assets/images/Dashboard.png"
        ],

        tools: [
            "Excel Dashboard",
            "Data Analysis",
            "Data Cleaning",
            "Data Visualization",
            "HR Analytics",
            "Dashboard Design"
        ],

        highlights: [
            "Total headcount and active employee tracking",
            "Total and average salary analysis",
            "Gender distribution (Male vs Female)",
            "Employee turnover tracking",
            "Leaving reasons analysis (resignation, termination, redundancy)",
            "Department-level salary and headcount comparison",
            "Year-over-year hiring trends",
            "13 departments tracked (Admin, CEO, Finance, HR, IT, Legal, etc.)",
            "Interactive filtering by department",
            "Data quality focus: handling missing values, removing duplicates"
        ],

        github:
            "https://github.com/Abdelrhman-Roma/HR-Analysis-and-Clean-Dashboard"
    }

};


/* =========================================================
   PROJECT MODAL
   ========================================================= */

const projectModal = document.getElementById("projectModal");

const modalClose = document.getElementById("modalClose");

const modalCategory = document.getElementById("modalCategory");

const modalTitle = document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalGallery =
    document.getElementById("modalGallery");

const modalTools =
    document.getElementById("modalTools");

const modalHighlights =
    document.getElementById("modalHighlights");

const modalGithub =
    document.getElementById("modalGithub");


/* =========================================================
   OPEN PROJECT
   ========================================================= */

function openProject(projectName) {

    const project = projectData[projectName];

    if (!project) {
        return;
    }


    /* Category */

    modalCategory.textContent =
        project.category;


    /* Title */

    modalTitle.textContent =
        project.title;


    /* Description */

    modalDescription.textContent =
        project.description;


    /* Gallery */

    modalGallery.innerHTML = "";

    if (project.images.length === 0) {

        modalGallery.style.display = "none";

    } else {

        modalGallery.style.display = "grid";

        if (project.images.length === 1) {
            modalGallery.classList.add("single-image");
        } else {
            modalGallery.classList.remove("single-image");
        }


        project.images.forEach((image, index) => {

            const img = document.createElement("img");

            img.src = image;

            img.alt =
                `${project.title} preview ${index + 1}`;

            img.loading = "lazy";

            modalGallery.appendChild(img);

        });

    }


    /* Tools */

    modalTools.innerHTML = "";

    project.tools.forEach(tool => {

        const tag = document.createElement("span");

        tag.textContent = tool;

        modalTools.appendChild(tag);

    });


    /* Highlights */

    modalHighlights.innerHTML = "";

    project.highlights.forEach(highlight => {

        const li = document.createElement("li");

        li.textContent = highlight;

        modalHighlights.appendChild(li);

    });


    /* GitHub */

    modalGithub.href =
        project.github;


    /* Open */

    projectModal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE PROJECT
   ========================================================= */

function closeProject() {

    projectModal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================================================
   PROJECT BUTTONS
   ========================================================= */

document
    .querySelectorAll(".project-details-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            const projectName =
                button.dataset.project;

            openProject(projectName);

        });

    });


/* =========================================================
   CLOSE BUTTON
   ========================================================= */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProject
    );

}


/* =========================================================
   BACKDROP CLOSE
   ========================================================= */

const modalBackdrop =
    document.querySelector(".modal-backdrop");

if (modalBackdrop) {

    modalBackdrop.addEventListener(
        "click",
        closeProject
    );

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains("active")
        ) {

            closeProject();

        }

    }
);

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const emailBody = `
Name: ${name}

Email: ${email}

Message:

${message}
        `;

        const contactEmail = "YOUR_EMAIL@gmail.com";

        const mailtoLink =
            `mailto:${contactEmail}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(emailBody)}`;

        window.location.href = mailtoLink;

        if (formStatus) {
            formStatus.textContent =
                "Opening your email application...";
        }
    });
}
