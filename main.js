/* =========================================================
   JENNIFER ZAMUDIO — MAIN JAVASCRIPT
   ========================================================= */


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


function renderNews() {

    const container = document.getElementById("news-container");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    newsItems.forEach((item, index) => {

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

        const header = newsItem.querySelector(".news-item-header");

        header.addEventListener("click", () => {

            newsItem.classList.toggle("open");

        });

        container.appendChild(newsItem);

    });

}


renderNews();
