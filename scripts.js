const form = document.querySelector("form");
const newItem = document.getElementById("newItem");
const listItems = document.querySelector("ul");

const showAlert = document.getElementById("show-alert");

form.onsubmit = (event) => {
  event.preventDefault();

  addItem(newItem.value);
  newItem.value = "";
};

function addItem(newItem) {
  listItems.innerHTML += `<li>
  <input type="checkbox" name="check-1" id="check-1" />
  <span>${newItem}</span>
  <button class=delete-item type="button">
  <img class="delete-item" src="assets/delete.svg" alt="" />
  </button>
  </li>`;
}

listItems.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-item")) {
    const li = event.target.closest("li");

    li.remove();

    showAlert.classList.remove("hidden");
  }
});

showAlert.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-alert")) {
    showAlert.classList.add("hidden");
  }
});
