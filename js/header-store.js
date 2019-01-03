const $search = document.querySelector("[type=search]");
const $searchBtn = document.querySelector(".fa-search");
const $searchBtnClose = document.querySelector(".fa-times");

function searchClick() {
    $search.classList.toggle("-active");
    $searchBtn.classList.toggle("-active");
    $searchBtnClose.classList.toggle("-active");
    $searchBtn.classList.toggle("-hidden");
    $searchBtnClose.classList.toggle("-hidden");
};

$searchBtn.addEventListener("click", searchClick);
$searchBtnClose.addEventListener("click", searchClick);

const $mobileMenu = document.querySelector(".mobileMenu");
const $navMenu = document.querySelectorAll(".header-store .action");

function openMenu() {
    $navMenu.forEach(element => {
        if (element.style.display == "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    })

}

$mobileMenu.addEventListener("click", openMenu);