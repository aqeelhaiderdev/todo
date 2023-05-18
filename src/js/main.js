const list = document.querySelector(".list-container");
const listRow = document.querySelector(".list-row");
const submitButton = document.querySelector(".submit");
const searchBox = document.querySelector(".search-section");
const InputText = document.querySelector(".search");

submitButton.addEventListener("click", function () {
  const getValue = InputText.value;
  if (getValue === "") {
    alert("Please Type Something");
  } else {
    const html = `<li class="list-row">${getValue}</li>`;
    list.insertAdjacentHTML("afterend", html);
    InputText.value = "";
  }
});

// listRow.addEventListener("click", function () {
//   // listRow.classList.toggle("checked");
// });
