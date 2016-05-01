(function() {
	'use strict'

	angular.module('app').
		controller('welcome', [welcome]);

		function welcome () {
			var vm = this;

			/** kendo dropdown list control**/
			vm.computers = [
				{name: "Macbook Pro", id: 1},
				{name: "Macbook Air", id: 2},
				{name: "Mac Pro", id: 3}
			];
			vm.selectChange = function(e){
				console.log(e.sender.text());
				console.log(e.sender.value());
			}


			/** kendo multiselect dropdown control**/
    	vm.selectedIds = [];
	    vm.selectOptions = {
        placeholder: "Select products...",
        dataTextField: "ProductName",
        dataValueField: "ProductID",
        dataSource: {
            type: "odata",
            serverFiltering: true,
            transport: {
                read: {
                    url: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Products",
                }
            }
        }
    	};
    	vm.multiSelectChange = function(e) {
				console.log(e.sender.value());
    	}



		}
})();