let card = document.querySelector(".card");
let modalOpenBtn = document.querySelector(".card button");
let modal = document.querySelector(".modal");
let modalCrossBtn = document.querySelector(".modal button");

modalOpenBtn.addEventListener("click", function (event) {
    modal.classList.remove("d-none");
});

modalCrossBtn.addEventListener("click", function (event) {
    modal.classList.add("d-none");
});
