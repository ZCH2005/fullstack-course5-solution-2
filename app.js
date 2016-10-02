(function () {
    'use strict';

    angular.module("ShoppingListCheckOff", [])
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService)
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController);


    function ShoppingListCheckOffService() {
        var svc = this;
        svc.toBuy = [
            {name: "cookies", quantity: 10},
            {name: "cookies", quantity: 20},
            {name: "cookies", quantity: 30},
            {name: "cookies", quantity: 40},
            {name: "cookies", quantity: 50},
        ];
        svc.bought = [];

        svc.buy = function (index) {
            if (index < 0 || index >= svc.toBuy.length)
                return;

            svc.bought.push(svc.toBuy[index]);
            svc.toBuy.splice(index, 1);           
        }
        svc.getToBuyList = function(){
            return svc.toBuy;
        }
        svc.getBoughtList = function(){
            return svc.bought;
        }

    };

    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function ToBuyController($scope, ShoppingListCheckOffService) {
        var vm = this;
        vm.toBuyList = ShoppingListCheckOffService.getToBuyList();

        vm.buy = function(index){            
          ShoppingListCheckOffService.buy(index);
        }
    };

    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
        var vm = this;
        vm.boughtList = ShoppingListCheckOffService.getBoughtList();       
    };


})();