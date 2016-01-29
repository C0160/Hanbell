angular.module('hanbell.controllers', [])

    .controller('AppController', function ($rootScope, $scope, $ionicPopup, $ionicSideMenuDelegate, $location) {

        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $rootScope.showMenu = true;
        $rootScope.userno;

        $scope.go = function (url) {
            //alert('appGo');
            $location.url(url);
        };

        $scope.goHome = function () {
            $location.url("/app/home/" + $rootScope.userno);
        };

        $scope.showAlert = function (msg) {
            var alertPopup = $ionicPopup.alert({
                title: '系统消息',
                template: msg
            });
            alertPopup.then(function (res) {

            });
        };

        $scope.showLoginFirst = function () {
            $scope.showAlert('请先登录!');
            $location.url("/app/login");
        };

        $scope.showSideMenu = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
    })
    .controller('HomeController', function ($rootScope, $scope, $stateParams, $ionicPopup, $location) {

        $rootScope.showMenu = true;
        $scope.userno = $stateParams.userId;

        $scope.menuList = [
            {name: '整机价格和库存', url: '/app/itemkind', hasParam: true},
            {name: '零件价格和库存', url: '/app/itemcategory', hasParam: true}
        ];

        $scope.go = function (url) {
            $location.url(url + '/' + $scope.userno);
        };

    })
    .controller('ItemCategoryController', function ($rootScope, $scope, $stateParams, ItemCategory) {

        $scope.entityList;
        var userno = $stateParams.userId;
        $rootScope.userno = userno;

        ItemCategory.query(userno, $scope);

        $scope.go = function (url, itemcategory) {
            $scope.$parent.go(url + '/' + userno + '/' + itemcategory.category);
        };

    })
    .controller('ItemCompanyController', function ($rootScope, $scope, $stateParams, Company) {

        $scope.entityList;
        var userno = $stateParams.userId;
        $rootScope.userno = userno;
        var itemno = $stateParams.itemId;

        Company.query(userno, $scope);

        $scope.go = function (url, company) {
            $scope.$parent.go(url + '/' + userno + '/' + itemno + '/' + company.facno);
        };

    })
    .controller('ItemInventoryController', function ($rootScope, $scope, $stateParams, ItemInventory) {

        $scope.entityList;
        var userno = $stateParams.userId;
        $rootScope.userno = userno;
        var itemno = $stateParams.itemId;
        var facno = $stateParams.companyId;
        ItemInventory.query(userno,itemno,facno, $scope);

    })
    .controller('ItemKindController', function ($rootScope, $scope, $stateParams, ItemKind) {

        $scope.entityList;
        var userno = $stateParams.userId;
        $rootScope.userno = userno;

        ItemKind.query(userno, $scope);

        $scope.go = function (url, itemkind) {
            $scope.$parent.go(url + '/' + userno + '/' + itemkind.kind);
        };

    })
    .controller('ItemMasterController', function ($rootScope, $scope, $stateParams, ItemMaster) {

        $scope.entityList;
        var userno = $stateParams.userId;
        $rootScope.userno = userno;
        var category = $stateParams.categoryId;

        ItemMaster.query(userno, category, $scope);

        $scope.goPricing = function (url, itemmaster) {
            $scope.$parent.go(url + '/' + userno + '/' + itemmaster.itnbr + '/NULL');
        };

        $scope.goInventory = function (url, itemmaster) {
            $scope.$parent.go(url + '/' + userno + '/' + itemmaster.itnbr);
        };

    })
    .controller('ItemModelController', function ($rootScope, $scope, $stateParams, ItemModel) {

        $scope.entityList;
        var userno = $stateParams.userId;
        $rootScope.userno = userno;
        var kind = $stateParams.kindId;

        ItemModel.query(userno, kind, $scope);

        $scope.goPricing = function (url, itemmodel) {
            $scope.$parent.go(url + '/' + userno + '/' + itemmodel.itemno + '/' + itemmodel.model);
        };

        $scope.goInventory = function (url, itemmodel) {
            $scope.$parent.go(url + '/' + userno + '/' + itemmodel.itemno);
        };

    })
    .controller('PricingGroupController', function ($rootScope, $scope, $stateParams, PricingGroup) {

        $scope.entityList;
        var userno = $stateParams.userId;
        $rootScope.userno = userno;
        var itemno = $stateParams.itemId;
        var modelno = $stateParams.modelId;

        PricingGroup.query(userno, $scope);

        $scope.go = function (url, pricinggroup) {
            $scope.$parent.go(url + '/' + userno + '/' + itemno + '/' + modelno + '/' + pricinggroup.groupid);
        };

    })
    .controller('PricingController', function ($rootScope, $scope, $stateParams, PricingGroup, Pricing) {

        $scope.pricinggroup;
        $scope.pricing;
        var userno = $stateParams.userId;
        $rootScope.userno = userno;
        var itemno = $stateParams.itemId;
        var modelno = $stateParams.modelId;
        var groupid = $stateParams.groupId;

        PricingGroup.get(userno, groupid, $scope);

        Pricing.get(userno, itemno, modelno, $scope);

    })
    .controller('SignInController', function ($rootScope, $scope, $ionicModal, $stateParams, User) {

        $rootScope.showMenu = false;

        $scope.user = {userno: '', password: ''};

        $scope.login = function () {
            User.get($scope.user.userno, $scope.user.password, $scope);
        };

    });
