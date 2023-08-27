/* 
1. **Add an Expense**:

   - Description of the expense.
   - Amount spent.
   - Date of the expense.
   - Category of the expense (e.g., Food, Transport, Entertainment). 
*/
let submitExpense = document.getElementById("personal-expense");
let feedback = document.getElementById("feedback");
let expenses = []; // Array to store expenses

submitExpense.addEventListener("submit", (e) => {
    e.preventDefault();

    let descExpense = document.getElementById("desc-expense");
    let amountSpent = document.getElementById("amount-spent");
    let dateExpense = document.getElementById("date-expense");
    let categoryExpense = document.getElementById("category-expense");
    
    // Validation (basic example, can be expanded)
    if (!descExpense.value || !amountSpent.value || !dateExpense.value || !categoryExpense.value) {
        feedback.textContent = "Please fill out all fields.";
        return;
    }

    // Store the expense in the expenses array
    let expense = {
        description: descExpense.value,
        amount: amountSpent.value,
        date: dateExpense.value,
        category: categoryExpense.value
    };
    expenses.push(expense);

    // Display the expense in the list
    displayExpense(expense);

    // Clear the input fields
    descExpense.value = "";
    amountSpent.value = "";
    dateExpense.value = "";
    categoryExpense.value = "";

    // Provide feedback to the user
    feedback.textContent = "Expense added successfully!";
    feedback.classList.add('active');
});

function displayExpense(expense) {
    let expensesList = document.querySelector("#expenses-list ul");
    let listItem = document.createElement("li");

    listItem.innerHTML = `
        <span>Description: ${expense.description}</span>
        <span>Amount: $${expense.amount}</span>
        <span>Date: ${expense.date}</span>
        <span>Category: ${expense.category}</span>
    `;

    expensesList.appendChild(listItem);
}



