const hamburguer = document.querySelector("#hamburguer")
const navmenu = document.querySelector("#sidebar")

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active")
  navmenu.classList.toggle("active")
})
