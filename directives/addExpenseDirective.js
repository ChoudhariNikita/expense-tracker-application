app.directive("addExpense", function () {
  return {
    restrict: "E",
    template: `
             <div class="text-center">
                <a href="#!/add" class="btn btn-success mt-3">Add Expense</a>
            </div>
        `,
  };
});
