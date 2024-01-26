const searchInput = document.getElementById("search-input")
const resultsArtist = document.getElementById("result-artist")
const resultPlaylist = document.getElementById("cards-container")

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResults(result))
}
function displayResults(result) {
  const artistName = document.getElementById("artist-name")
  const artistImage = document.getElementById("artist-img")
  resultPlaylist.style.display = "none"

  result.forEach((element) => {
    artistName.innerText = element.name
    artistImage.src = element.urlImg
  })

  resultsArtist.classList.remove("hidden")
}
document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase()
  if (searchTerm === "") {
    resultPlaylist.style.display = "flex"
    resultsArtist.style.display = "none"
    return
  }
  resultPlaylist.style.display = "none"
  resultsArtist.style.display = "flex"
  
  requestApi(searchTerm)
})
