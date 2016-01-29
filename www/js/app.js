// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('hanbell', ['ionic', 'hanbell.services', 'hanbell.controllers'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            //if (window.cordova && window.cordova.plugins.Keyboard) {
            //    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            //    cordova.plugins.Keyboard.disableScroll(true);
            //
            //}
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppController'
            })
            .state('app.login', {
                url: '/login',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login.html',
                        controller: 'SignInController'
                    }
                }
            })
            .state('app.home', {
                url: '/home/:userId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeController'
                    }
                }
            })
            .state('app.itemcategory', {
                url: '/itemcategory/:userId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/itemcategory.html',
                        controller: 'ItemCategoryController'
                    }
                }
            })
            .state('app.itemcompany', {
                url: '/itemcompany/:userId/:itemId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/itemcompany.html',
                        controller: 'ItemCompanyController'
                    }
                }
            })
            .state('app.iteminventory', {
                url: '/iteminventory/:userId/:itemId/:companyId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/iteminventory.html',
                        controller: 'ItemInventoryController'
                    }
                }
            })
            .state('app.itemkind', {
                url: '/itemkind/:userId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/itemkind.html',
                        controller: 'ItemKindController'
                    }
                }
            })
            .state('app.itemmaster', {
                url: '/itemmaster/:userId/:categoryId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/itemmaster.html',
                        controller: 'ItemMasterController'
                    }
                }
            })
            .state('app.itemmodel', {
                url: '/itemmodel/:userId/:kindId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/itemmodel.html',
                        controller: 'ItemModelController'
                    }
                }
            })
            .state('app.pricinggroup', {
                url: '/pricinggroup/:userId/:itemId/:modelId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/pricinggroup.html',
                        controller: 'PricingGroupController'
                    }
                }
            })
            .state('app.pricing', {
                url: '/pricing/:userId/:itemId/:modelId/:groupId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/pricing.html',
                        controller: 'PricingController'
                    }
                }
            })
            .state('app.single', {
                url: '/playlists/:playlistId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/pricinggroup.html',
                        controller: 'PlaylistController'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/login');
    });
