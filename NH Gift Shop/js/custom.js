














document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("searchIcon");
  const searchInput = document.getElementById("searchInput");
  const container = document.querySelector(".container.my-5");
  let resultArea = document.getElementById("resultArea");

  if (!resultArea) {
    resultArea = document.createElement("div");
    resultArea.id = "resultArea";
    resultArea.style.marginTop = "20px";
    container.insertBefore(resultArea, container.firstChild);
  }

  // Toggle input box on icon click
  searchIcon.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent event bubbling to document
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
      searchInput.style.display = "block";
      searchInput.focus();
    } else {
      searchInput.style.display = "none";
      resultArea.innerHTML = "";
      searchInput.value = "";
    }
  });

  // Search on input
  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.trim().toLowerCase();
    if (keyword === "") {
      resultArea.innerHTML = "";
      return;
    }

    const matches = items.filter(item => item.title.toLowerCase().includes(keyword));

    if (matches.length > 0) {
      resultArea.innerHTML = matches
        .map(
          match => `
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${match.image}" class="img-fluid rounded-start" alt="${match.title}">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${match.title}</h5>
                  <p class="card-text">${match.description}</p>
                </div>
              </div>
            </div>
          </div>
        `
        )
        .join("");
    } else {
      resultArea.innerHTML = `<p class="text-center">No results found for "${keyword}"</p>`;
    }
  });

  // Click outside to close search input
  document.addEventListener("click", (e) => {
    if (
      e.target !== searchInput &&
      e.target !== searchIcon &&
      searchInput.style.display === "block"
    ) {
      searchInput.style.display = "none";
      resultArea.innerHTML = "";
      searchInput.value = "";
    }
  });
});



  
