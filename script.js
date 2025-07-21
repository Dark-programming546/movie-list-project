const movieInput = document.getElementById("movieInput");
const addBtn = document.getElementById("addBtn");
const movieList = document.getElementById("movieList");

const API_KEY = "f3bf8caf"; // Replace with your real key

addBtn.addEventListener("click", async () => {
  const movieName = movieInput.value.trim();

  if (movieName !== "") {
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>${data.Title}</strong><br>
          <img src="${data.Poster}" alt="${data.Title}" height="150"><br>
        `;

        // Optional remove on click
        li.addEventListener("click", () => li.remove());

        movieList.appendChild(li);
      } else {
        alert("Movie not found!");
      }
    } catch (error) {
      console.error("Error fetching movie:", error);
      alert("Failed to load movie data.");
    }

    movieInput.value = "";
  }
});

