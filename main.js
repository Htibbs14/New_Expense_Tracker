let input_description = document.getElementById("desInput");
let input_amount = document.getElementById("numberInput");
let expense_add_button = document.getElementById("addButton");
let date = document.getElementById("date");
let expenses = document.getElementById("expense_container");

function addExpense(event) {
  event.preventDefault();

  let description = input_description.value;
  let amount = input_amount.value;
  let date_input = date.value;

  if (description === "" && amount === "" && date_input === "") {
    return;
  }

  let expense_content = document.createElement("div");
  expense_content.classList.add("expense_content");

  let expense_text = document.createElement("div");
  expense_text.classList.add("expense_text");

  expense_content.appendChild(expense_text);

  let expense_description = document.createElement("input");
  expense_description.classList.add("expense_description");
  expense_description.type = "text";
  expense_description.value = description;

  expense_text.appendChild(expense_description);

  let expense_amount = document.createElement("input");
  expense_amount.classList.add("expense_amount");
  expense_amount.type = "text";
  expense_amount.value = "$" + amount;

  expense_text.appendChild(expense_amount);

  let expense_date = document.createElement("input");
  expense_date.classList.add("expense_date");
  expense_date.type = "date";
  expense_date.value = date_input;

  expense_text.appendChild(expense_date);

  let expense_action = document.createElement("div");
  expense_action.classList.add("action");

  let delete_button = document.createElement("button");
  delete_button.classList.add("delete_button");
  delete_button.innerText = "Delete";

  expense_action.appendChild(delete_button);
  expense_content.appendChild(expense_action);
  expenses.appendChild(expense_content);

  input_description.value = "";
  input_amount.value = "";
  date.value = "";

  function deleteExpense(event) {
    event.preventDefault();

    expenses.removeChild(expense_content);
  }

  delete_button.addEventListener("click", deleteExpense);
}

expense_add_button.addEventListener("click", addExpense);
