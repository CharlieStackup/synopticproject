document.addEventListener("DOMContentLoaded", function() {
  // Adding Javascript for active nav bar

  const filterContainer = document.querySelector(".gallery-filter");
  const galleryItem = document.querySelectorAll(".gallery-display__image");

  filterContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains("filter-button")) {
      // Deactiveate existing active status
      filterContainer.querySelector(".active").classList.remove("active");
    }

    // Add new filter item
    e.target.classList.add("active");

    const filterValue = e.target.getAttribute("data-filter");
    galleryItem.forEach((item) => {
      console.log(item.classList);
      if(item.classList.contains(filterValue) || filterValue === "all")
      {
        item.classList.remove("hide");
        item.classList.add("show");
      }
      else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  });
});