const formGroup = document.createElement("div");
formGroup.className = "form-group";
const tableDiv = document.createElement("div");
formGroup.className = "table-group";
const form = document.createElement("form");
form.id = "form";

// Create form elements
const formElements = [
  {
    label: "First Name:",
    type: "text",
    id: "first-name",
    name: "firstName",

    required: true,
  },
  {
    label: "Last Name:",
    type: "text",
    id: "last-name",
    name: "lastName",
    required: true,
  },
  {
    label: "Address:",
    type: "textarea",
    id: "address",
    name: "address",
    required: true,
  },
  {
    label: "Pincode:",
    type: "text",
    id: "pincode",
    name: "pincode",
    required: true,
  },
  {
    label: "Gender:",
    type: "radio",
    name: "gender",
    required: true,
    options: ["Male", "Female"],
  },
  {
    label: "Choice of Food:",
    type: "select",
    id: "food",
    name: "food",
    required: true,
    options: [
      "Your preference",
      "Vegetarian",
      "Eggtarian",
      "Non-Vegetarian",
      "Vegan",
    ],
  },
  { label: "State:", type: "text", id: "state", name: "state", required: true },
  {
    label: "Country:",
    type: "text",
    id: "country",
    name: "country",
    required: true,
  },
];

// Add form elements to the form
formElements.forEach((element) => {
  const label = document.createElement("label");
  label.textContent = element.label;

  if (element.type !== "radio") {
    label.setAttribute("for", element.id);
  }

  if (element.type === "radio") {
    element.options.forEach((optionText) => {
      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = element.name;
      radioInput.value = optionText.toLowerCase();

      const radioLabel = document.createElement("label");
      radioLabel.textContent = optionText;

      formGroup.appendChild(radioInput);
      formGroup.appendChild(radioLabel);
    });
  } else {
    const input = document.createElement(
      element.type === "select"
        ? "select"
        : element.type === "input"
        ? "input"
        : element.type === "textarea"
        ? "textarea"
        : "input"
    );
    input.type = element.type;
    input.id = element.id;
    input.placeholder = element.name;
    input.name = element.name;
    if (element.required) {
      input.required = true;
    }
    if (element.type === "select") {
      element.options.forEach((optionText) => {
        const option = document.createElement("option");
        option.value = optionText.toLowerCase();
        option.textContent = optionText;
        input.appendChild(option);
      });
    }

    formGroup.appendChild(label);
    formGroup.appendChild(input);
  }
});
// Add submit button
const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.id = "submit";
submitButton.classList.add("btn", "btn-primary");
submitButton.value = "Submit";
formGroup.appendChild(submitButton);

// Append form to the document body

form.appendChild(formGroup);
document.body.appendChild(form);

// Create table element
const table = document.createElement("table");
table.id = "dataTable";
table.className = "table";

// Create table header
const tableHeader = document.createElement("thead");
const tableHeaderRow = document.createElement("tr");
[
  "First Name",
  "Last Name",
  "Address",
  "Pincode",
  "Gender",
  "Choice of Food",
  "State",
  "Country",
].forEach((headerText) => {
  const th = document.createElement("th");
  th.textContent = headerText;
  tableHeaderRow.appendChild(th);
});
tableHeader.appendChild(tableHeaderRow);
table.appendChild(tableHeader);

// Create table body
const tableBody = document.createElement("tbody");
table.appendChild(tableBody);

// Append table to the document body
document.body.appendChild(table);
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var formData = new FormData(this);
  var newRow = document.createElement("tr");
  var tableBody = document.querySelector("#dataTable tbody");

  formData.forEach(function (value, key) {
    var cell = document.createElement("td");
    cell.textContent = value;
    newRow.appendChild(cell);
  });

  tableBody.appendChild(newRow);
  document.getElementById("form").reset();
});