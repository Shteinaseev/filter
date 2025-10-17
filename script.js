const listEl = document.querySelectorAll("#name-list > li")
const searchBarEl = document.querySelector(".search-bar")

searchBarEl.addEventListener("keyup", () => {
    let searchTerm = searchBarEl.value.toLowerCase()
    listEl.forEach((item) => {
        if (!item.textContent.toLowerCase().includes(searchTerm)) {
            item.style.opacity = "0"
            item.style.fontSize = "0"
        } else{
            item.style.opacity = "1"
            item.style.fontSize = "1.2rem"
        }
    })
})

const listEl2 = document.querySelectorAll("#prosek-list > li")
const btnSortName = document.querySelector(".btn-sort-name")
const btnSortAVG = document.querySelector(".btn-sort-average")

const names = document.querySelectorAll(".name")
const avg = document.querySelectorAll(".avg")

