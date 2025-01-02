var app = angular.module('expenseTrackerApp', ['ngRoute']);

// Configuring routes
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })
    .when('/add', {
        templateUrl: 'views/form.html',
        controller: 'FormController'
    })
    .when('/edit/:id', {
        templateUrl: 'views/form.html',
        controller: 'FormController'
    })
    .otherwise({
        redirectTo: '/'
    });
});

// Home Controller
app.controller('HomeController', function($scope, ExpenseService) {
    $scope.expenses = ExpenseService.getAllExpenses();
    
    $scope.deleteExpense = function(id) {
        ExpenseService.deleteExpense(id);
        $scope.expenses = ExpenseService.getAllExpenses();
    };

    $scope.totalAmount = function() {
        return ExpenseService.getTotalAmount();
    };
});

// Form Controller
app.controller('FormController', function($scope, $location, $routeParams, ExpenseService) {
    const expenseId = $routeParams.id;
    $scope.isEdit = !!expenseId;

    if ($scope.isEdit) {
        $scope.expense = ExpenseService.getExpenseById(expenseId);
    } else {
        $scope.expense = { title: '', amount: null };
    }

    $scope.saveExpense = function() {
        if ($scope.isEdit) {
            ExpenseService.updateExpense($scope.expense);
        } else {
            ExpenseService.addExpense($scope.expense);
        }
        $location.path('/'); // Redirect to home page
    };
});