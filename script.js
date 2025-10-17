const listEl = document.querySelectorAll(".name-list > li")
const searchBarEl = document.querySelector(".search-bar")
console.log(listEl)
console.log(searchBarEl)


searchBarEl.addEventListener("keyup", () => {
    let searchTerm = searchBarEl.value.toLowerCase()
    listEl.forEach((item) => {
        if (item.textContent.toLowerCase().includes(searchTerm)) {
            item.style.display = "block"
        }
    })
})