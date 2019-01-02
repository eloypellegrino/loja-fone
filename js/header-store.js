const $search = document.querySelector("[type=search]");
const $searchBtn = document.querySelector(".fa-search");
const $searchBtnClose = document.querySelector(".fa-times");

$searchBtn.addEventListener("click", () => {
    $search.classList.toggle("-active");
    $searchBtn.classList.toggle("-active");
    $searchBtnClose.classList.toggle("-active");
    $searchBtn.classList.toggle("-hidden");
    $searchBtnClose.classList.toggle("-hidden");
});

$searchBtnClose.addEventListener("click", () => {
    $search.classList.toggle("-active");
    $searchBtn.classList.toggle("-active");
    $searchBtnClose.classList.toggle("-active");
    $searchBtn.classList.toggle("-hidden");
    $searchBtnClose.classList.toggle("-hidden");
});