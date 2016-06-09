app.controller("searchController", ['$scope', '$state', function ($scope, $state) {
        $scope.juice = [
            {id: '1', type: "shake", name: "Apple", content: {milk: "40%", apple: "40%", shugar: "20%", ice: "10%"}, price: "30"},
        
        {id:'1', type:"shake", name:"Apple", content:{milk:"40%", apple:"30%", shugar:"20%", ice:"10%"}, price:"30"},
        {id:'2', type:"shake", name:"mango", content:{milk:"30%", mango:"25%", shugar:"20%", ice:"10%"}, price:"40"},
        {id:'3', type:"shake", name:"orange", content:{milk:"20%", orange:"40%", shugar:"20%", ice:"10%"}, price:"25"},
        {id:'4', type:"shake", name:"Grapes", content:{milk:"30%", Grapes:"35%", shugar:"20%", ice:"10%"}, price:"35"}
        ];
        }]);