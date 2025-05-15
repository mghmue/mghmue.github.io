
const items = [
  {
    title: "Enchanting potted plants",
    image: "../Image/t1.jpg",
    description: "Beautiful potted plants for your wedding.",
  },
  {
    title: "The finest plants",
    image: "../Image/t2.jpg",
    description: "High quality plants perfect for gifts.",
  },
    {
        title: "Beautiful flower arrangements",
        image: "../Image/t3.jpg",
        description: "Stunning flower arrangements for any occasion.",
    },
    {
        title: "Elegant wedding bouquets",
        image: "../Image/t4.jpg",
        description: "Exquisite bouquets for your special day.",
    },
    {
        title: "Unique plant pots",
        image: "../Image/t5.jpg",
        description: "Stylish and unique pots for your plants.",
    },
    {
        title: "Customizable wedding decor",
        image: "../Image/t6.jpg",
        description: "Personalized decor to make your wedding special.",
    },
    {
        title: "Luxurious flower centerpieces",
        image: "../Image/t7.jpg",
        description: "Elegant centerpieces for your wedding tables.",
    },
    {
        title: "Charming garden decorations",
        image: "../Image/t8.jpg",
        description: "Beautiful decorations to enhance your garden.",
    },
    {
        title: "Stylish plant stands",
        image: "../Image/t9.jpg",
        description: "Modern stands to showcase your plants.",
    },
    {
        title: "Artistic floral designs",
        image: "../Image/t10.jpg",
        description: "Creative floral designs for any event.",
    },
    {
        title: "Elegant wedding arches",
        image: "../Image/t11.jpg",
        description: "Stunning arches for your wedding ceremony.",
    },
    {
        title: "Beautiful flower crowns",
        image: "../Image/t12.jpg",
        description: "Lovely flower crowns for brides and bridesmaids.",
    },
    
];















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



  