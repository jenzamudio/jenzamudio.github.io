const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
/* =========================================================
   RESEARCH PROJECT EXPAND / COLLAPSE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const projectToggles = document.querySelectorAll(".project-toggle");

    projectToggles.forEach(function (toggle) {

        toggle.addEventListener("click", function () {

            const isExpanded =
                toggle.getAttribute("aria-expanded") === "true";

            /*
             * Close all other projects first.
             * This keeps the page clean so only one
             * project is expanded at a time.
             */

            projectToggles.forEach(function (otherToggle) {

                otherToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });


            /*
             * If the clicked project was previously closed,
             * open it.
             */

            if (!isExpanded) {

                toggle.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });

    });

});
