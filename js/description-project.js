const $heart = window.document.querySelector(".-heart");
const $cartButton = window.document.querySelector(".-second");

$heart.addEventListener("click", handleClick);
$cartButton.addEventListener("click", insertText);

function handleClick () {
    console.log("ae");
}

function insertText() {
    document.getElementById("cartButton").innerHTML = "Carrinho(11)";
}