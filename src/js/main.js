const list = document.querySelector(".list-container");
console.log(list);
const listRow = document.querySelector(".list-row");
const submitButton = document.querySelector(".submit");
const searchBox = document.querySelector(".search-section");
const InputText = document.querySelector(".search");

submitButton.addEventListener("click", function () {
  const getValue = InputText.value;
  if (getValue === "") {
    alert("Please Type Something");
  } else {
    const html = `<li class="list-row">${getValue} <span class="cross">&#10005;</span></li>`;
    list.insertAdjacentHTML("beforeend", html);
    InputText.value = "";
  }
});

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
