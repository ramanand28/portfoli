document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    let currentPageIndex = 0;

    // Initial animation
    pages[currentPageIndex].classList.add("active");

    // Function to handle page switching
    function switchPage(pageIndex) {
        const currentPage = pages[currentPageIndex];
        const nextPage = pages[pageIndex];

        // Remove "active" class from the current page
        currentPage.classList.remove("active");

        // Add "active" class to the next page
        nextPage.classList.add("active");

        currentPageIndex = pageIndex;
    }

    // Event listener for section headers
    const sectionHeaders = document.querySelectorAll("h2");
    sectionHeaders.forEach(function (header, index) {
        header.addEventListener("click", function () {
            switchPage(index);
        });
    });

    // Automatically trigger animation when "Education" page is loaded
    const educationSection = document.querySelector("#projects");
    const educationEntries = educationSection.querySelectorAll(".projects-entry");
    educationEntries.forEach(function (entry, entryIndex) {
        setTimeout(function () {
            entry.classList.add("active");
        }, entryIndex * 200); // Delay each entry animation
    });
});
