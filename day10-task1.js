let expenses = [];
let totalExpenses = 0;

function addExpense() {
    const expenseInput = document.getElementById('expenseInput');
    const amountInput = document.getElementById('amountInput');

    const expenseName = expenseInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (expenseName !== '' && !isNaN(amount) && amount > 0) {
        const newExpense = {
            name: expenseName,
            amount: amount
        };

        expenses.push(newExpense);
        updateExpenseList();
        updateTotalExpenses();
        
        // Clear input fields
        expenseInput.value = '';
        amountInput.value = '';
    } else {
        alert('Please enter valid expense details.');
    }
}

function updateExpenseList() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    expenses.forEach(expense => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.name}: Rs.${expense.amount.toFixed(2)}`;
        expenseList.appendChild(listItem);
    });
}

function updateTotalExpenses() {
    const totalExpensesElement = document.getElementById('totalExpenses');
    totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    totalExpensesElement.textContent = totalExpenses.toFixed(2);
}
