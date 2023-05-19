const list = document.querySelector(".list-container");
console.log(list);
const listRow = document.querySelector(".list-row");
const submitButton = document.querySelector(".submit");
const searchBox = document.querySelector(".search-section");
const InputText = document.querySelector(".search");
const saveData = function () {
  localStorage.setItem("Data", list.innerHTML);
};

const showData = function () {
  list.innerHTML = localStorage.getItem("Data");
};

showData();

submitButton.addEventListener("click", function () {
  const getValue = InputText.value;
  if (getValue === "") {
    alert("Please Type Something");
  } else {
    const html = `<li class="list-row">${getValue} <span class="cross">&#10005;</span></li>`;
    list.insertAdjacentHTML("beforeend", html);
    InputText.value = "";
    saveData();
  }
});

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});
