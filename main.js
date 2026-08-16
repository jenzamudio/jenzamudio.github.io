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

const newsItems = [

    {
        date: "AUG 2026",

        title: "Dissertation research continues to examine patient–provider connection",

        summary:
            "My dissertation examines how patients experience connection with their healthcare providers and how those experiences can be measured.",

        category: "RESEARCH",

        details: [
            "My current work focuses on understanding the processes and experiences that contribute to meaningful patient–provider connection.",

            "This work brings together qualitative research, measurement science, and computational approaches to better understand connection and disconnection in healthcare."
        ]
    },


    {
        date: "AUG 2026",

        title: "Academic website launched",

        summary:
            "I launched a new academic website to share my research, publications, teaching, and ongoing work.",

        category: "ACADEMIC",

        details: [
            "This website is designed to make my research easier to explore and to provide a central place for updates about my academic work."
        ]
    }

];


/* =========================================================
   RENDER NEWS
   ========================================================= */

function renderNews() {

    const container = document.getElementById("news-container");

    /*
       If we're on a page that doesn't contain
       the news container, do nothing.
    */

    if (!container) {
        return;
    }


    container.innerHTML = "";


    newsItems.forEach(item => {

        const newsItem = document.createElement("article");

        newsItem.className = "news-item";


        const detailsHTML = item.details
            .map(paragraph => `<p>${paragraph}</p>`)
            .join("");


        newsItem.innerHTML = `

            <div class="news-item-header">

                <div class="news-date">
                    ${item.date}
                </div>


                <div>

                    <h2 class="news-item-title">
                        ${item.title}
                    </h2>


                    <p class="news-item-summary">
                        ${item.summary}
                    </p>


                    <span class="news-category">
                        ${item.category}
                    </span>

                </div>


                <div class="news-toggle">
                    +
                </div>

            </div>


            <div class="news-item-details">

                ${detailsHTML}

            </div>

        `;


        const header =
            newsItem.querySelector(".news-item-header");


        header.addEventListener("click", () => {

            newsItem.classList.toggle("open");

        });


        container.appendChild(newsItem);

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

renderNews();
