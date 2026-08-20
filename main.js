/* =========================================================
   JENNIFER ZAMUDIO — MAIN JAVASCRIPT
   ========================================================= */

/* =========================================================
   NAVIGATION — ACTIVE PAGE
   ========================================================= */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach(link => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});



/* =========================================================
   RESEARCH PROJECTS
   ========================================================= */

document.querySelectorAll(".project-header").forEach(header => {

    header.addEventListener("click", () => {

        const project = header.closest(".project");

        project.classList.toggle("open");

    });

});


/* =========================================================
   NEWS
   ========================================================= */

/* =========================================================
   NEWS
   ========================================================= */

const newsItems = [

    {
        date: "April 8, 2025",
        title: "Received an Honorable Mention for the NSF Graduate Research Fellowship Program",
        details: "Received an Honorable Mention for the NSF Graduate Research Fellowship Program.",
        category: "AWARD"
    },

    {
        date: "March 24, 2025",
        title: "Passed my preliminary exam and became a PhD Candidate",
        details: "Passed my preliminary exam, defending my dissertation proposal on patient-provider connectedness, and officially became a PhD Candidate.",
        category: "MILESTONE"
    },

    {
        date: "December 2024",
        title: "Paper published in the Journal of Patient Safety",
        details: 'Our paper, "Rethinking Surgical Safety: Investigating the Impact of Gamified Training on Severe Flow Disruptions in Surgery," was published in the Journal of Patient Safety.',
        category: "PUBLICATION"
    },

    {
        date: "June 4, 2024",
        title: "Received three departmental DEI Mini Grants",
        details: "Received three departmental DEI Mini Grants, including two grants in collaboration with the INFORMS student chapter DEI chair.",
        category: "AWARD"
    },

    {
        date: "May 1, 2024",
        title: "Began role as Student Engagement Coordinator for the Rackham Aspiring Fellows program",
        details: "Began a new role as a Student Engagement Coordinator for the Rackham Aspiring Fellows program through the Partnerships for Access, Community, and Excellence (PACE) Program at the University of Michigan.",
        category: "ROLE"
    },

    {
        date: "March 24, 2024",
        title: "Presented at the Inaugural Robotics Summit at the HFES Healthcare Conference",
        details: "Gave a lecture presentation on our exploratory study examining recurrent communication as a facilitator of effective teamwork in robotic surgery.",
        category: "PRESENTATION"
    },

    {
        date: "February 23, 2024",
        title: "Received the Rackham Conference Travel Grant",
        details: "Received a $900 Rackham Conference Travel Grant.",
        category: "AWARD"
    },

    {
        date: "February 5, 2024",
        title: "Joined the Program Committee of the Society of Surgical Ergonomics",
        details: "Began serving on the Program Committee of the Society of Surgical Ergonomics.",
        category: "SERVICE"
    },

    {
        date: "December 12, 2023",
        title: "Systematic review published in World Journal of Surgery",
        details: 'Our paper, "Why can’t we improve turnover time? A systematic review," was published in World Journal of Surgery.',
        category: "PUBLICATION"
    },

    {
        date: "October 20, 2023",
        title: "Began mentoring with the Graduate Application Mentoring Program",
        details: "Began serving as a mentor in the Graduate Application Mentoring Program (GAMP) in the Industrial and Operations Engineering Department at the University of Michigan.",
        category: "MENTORING"
    },

    {
        date: "October 3, 2023",
        title: "Began role as a Minority-Serving Institution Ambassador",
        details: "Began a new role as a Minority-Serving Institution Ambassador with the Partnerships for Access, Community, and Excellence (PACE) Program at the University of Michigan.",
        category: "ROLE"
    },

    {
        date: "October 2, 2023",
        title: "Began serving as DEI Advocate for HFES and IOE",
        details: "Began serving as the DEI Advocate of the Human Factors and Ergonomics Society Student Chapter and on the Industrial and Operations Engineering Department DEI Committee.",
        category: "SERVICE"
    },

    {
        date: "June 9, 2023",
        title: "First-author paper published in the American Journal of Surgery",
        details: 'My first-author paper, "Demands of surgical teams in robotic-assisted surgery: An assessment of intraoperative workload within different surgical specialties," was published in the American Journal of Surgery.',
        category: "PUBLICATION"
    },

    {
        date: "May 24, 2023",
        title: "Joined the DEI Committee of the Society of Surgical Ergonomics",
        details: "Began serving on the DEI Committee of the Society of Surgical Ergonomics.",
        category: "SERVICE"
    },

    {
        date: "March 26–29, 2023",
        title: "Attended the HFES International Symposium on Human Factors and Ergonomics in Healthcare",
        details: "Attended the HFES International Symposium on Human Factors and Ergonomics in Healthcare in Orlando, Florida, to support colleagues and mentees presenting our work.",
        category: "CONFERENCE"
    },

    {
        date: "March 9, 2023",
        title: "Committed to the University of Michigan PhD program",
        details: "Committed to the University of Michigan's PhD Program in Industrial and Operations Engineering.",
        category: "MILESTONE"
    },

    {
        date: "February 21, 2023",
        title: "Joined the Research Consortium of the Society of Surgical Ergonomics",
        details: "Began serving on the Research Consortium of the Society of Surgical Ergonomics.",
        category: "SERVICE"
    },

    {
        date: "February 1, 2023",
        title: "Joined the self-driving car team for the Cedars-Sinai AI Campus Initiative",
        details: "Joined the self-driving car team for the Cedars-Sinai AI Campus Initiative hosted by Arkansas Tech University.",
        category: "RESEARCH"
    },

    {
        date: "October 27, 2022",
        title: "Proceedings paper published at the HFES Annual Meeting",
        details: 'My proceedings paper, "Using the National Aeronautics and Space Administration Task Load Index (NASA-TLX) in surgery: Considerations for use in the wild," was published in the Proceedings of the Human Factors and Ergonomics Society Annual Meeting.',
        category: "PUBLICATION"
    },

    {
        date: "October 10–14, 2022",
        title: "Presented at the HFES International Annual Meeting",
        details: "Attended the HFES International Annual Meeting in Atlanta, Georgia, where I gave a lecture on using the NASA-TLX in real-world clinical settings.",
        category: "PRESENTATION"
    },

    {
        date: "September 23, 2022",
        title: "Won Best Oral Presentation at the Society of Surgical Ergonomics Research Symposium",
        details: 'Won the award for "Best Oral Presentation" at the Inaugural Research Symposium of the Society of Surgical Ergonomics.',
        category: "AWARD"
    }

];


/* =========================================================
   RENDER NEWS
   ========================================================= */


function displayNews() {

    const newsContainer = document.getElementById("news-container");

    if (!newsContainer) return;

    newsContainer.innerHTML = "";

    newsItems.forEach((item) => {

        const article = document.createElement("article");

        article.className = "news-item";

        article.innerHTML = `
            
            <div class="news-item-header">

                <div class="news-date">
                    ${item.date}
                </div>

                <div class="news-item-content">

                    <h2 class="news-item-title">
                        ${item.title}
                    </h2>

                    <span class="news-category">
                        ${item.category}
                    </span>

                </div>

                <button
                    class="news-toggle"
                    aria-label="Expand news item"
                    type="button"
                >
                    +
                </button>

            </div>


            <div class="news-item-details">

                <p>
                    ${item.details}
                </p>

            </div>

        `;

        const header = article.querySelector(".news-item-header");

        header.addEventListener("click", () => {

            article.classList.toggle("open");

        });

        newsContainer.appendChild(article);

    });

}

/* =========================================================
   HOMEPAGE — RECENT NEWS
   ========================================================= */

function renderHomepageNews() {

    const container = document.getElementById("homepage-news");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    newsItems.slice(0, 3).forEach(item => {

        const article = document.createElement("article");

        article.className = "homepage-news-item";

        article.innerHTML = `

            <div class="homepage-news-date">
                ${item.date}
            </div>

            <div class="homepage-news-content">

                <span class="homepage-news-category">
                    ${item.category}
                </span>

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.summary}
                </p>

            </div>

            <a href="news.html" class="homepage-news-arrow">
                →
            </a>

        `;

        container.appendChild(article);

    });

}

renderHomepageNews();

/* =========================================================
   START NEWS
   ========================================================= */

displayNews();
