angular.module('expenseTrackerApp').factory('ExpenseService', function($http) {
    let expenses = [
        { id: 1, title: 'Groceries', amount: 50 },
        { id: 2, title: 'Utilities', amount: 120 },
        { id: 3, title: 'Entertainment', amount: 75 }
    ];

    return {
        // fetchExpenses: function() {
        //     return $http.get('https://jsonplaceholder.typicode.com/posts')
        //         .then(function(response) {
        //             expenses = response.data;
        //             return expenses;
        //         });
        // },
        getAllExpenses: function() {
            return expenses;
        },
        getExpenseById: function(id) {
            return expenses.find(expense => expense.id == id);
        },
        addExpense: function(expense) {
            expense.id = new Date().getTime(); // Unique ID
            expenses.push(expense);
        },
        updateExpense: function(expense) {
            const index = expenses.findIndex(e => e.id == expense.id);
            if (index !== -1) {
                expenses[index] = expense;
            }
        },
        deleteExpense: function(id) {
            const index = expenses.findIndex(expense => expense.id == id);
            if (index !== -1) {
                expenses.splice(index, 1);
            }
        },
        getTotalAmount: function() {
            return expenses.reduce((total, expense) => total + expense.amount, 0);
        }
    };
});