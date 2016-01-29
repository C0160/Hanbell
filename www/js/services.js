/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var api_url = "http://ar.hanbell.com.cn:8480/JRS/api";

angular.module('hanbell.services', [])
    .factory('Company', ['$http', function ($http) {
        var base_url = api_url + "/shberp.company";
        return {
            query: function (userno, $scope) {
                if (userno == undefined || userno == "") {
                    $scope.showLoginFirst();
                    return;
                }
                return $http.get(base_url).success(function (response, status) {
                    $scope.entityList = response;
                    if (status != 200) {
                        $scope.showAlert("找不到资料");
                    }
                }).error(function () {
                    $scope.showAlert('获取资料失败!');
                });
            },
            top: function (userno, n, $scope) {
                $scope.showAlert('无法操作!');
            },
            get: function (userno, Id, $scope) {
                $scope.showAlert('无法操作!');
            },
            add: function (userno, entity, $scope) {
                $scope.showAlert('无法操作!');
            },
            del: function (userno, Id, $scope) {
                $scope.showAlert('无法操作!');
            },
            save: function (userno, Id, entity, $scope) {
                $scope.showAlert('无法操作!');
            }
        };
    }])
    .factory('ItemCategory', ['$http', function ($http) {
        var base_url = api_url + "/shberp.itemcategory";
        return {
            query: function (userno, $scope) {
                if (userno == undefined || userno == "") {
                    $scope.showLoginFirst();
                    return;
                }
                return $http.get(base_url).success(function (response, status) {
                    $scope.entityList = response;
                    if (status != 200) {
                        $scope.showAlert("找不到资料");
                    }
                }).error(function () {
                    $scope.showAlert('获取资料失败!');
                });
            },
            top: function (userno, n, $scope) {
                $scope.showAlert('无法操作!');
            },
            get: function (userno, Id, $scope) {
                $scope.showAlert('无法操作!');
            },
            add: function (userno, entity, $scope) {
                $scope.showAlert('无法操作!');
            },
            del: function (userno, Id, $scope) {
                $scope.showAlert('无法操作!');
            },
            save: function (userno, Id, entity, $scope) {
                $scope.showAlert('无法操作!');
            }
        };
    }])
    .factory('ItemInventory', ['$http', function ($http) {
        var base_url = api_url + "/shberp.invbal";
        return {
            query: function (userno, itemno, facno, $scope) {
                if (userno == undefined || userno == "") {
                    $scope.showLoginFirst();
                    return;
                }
                return $http.get(base_url + '/' + itemno + ";facno=" + facno).success(function (response, status) {
                    $scope.entityList = response;
                    if (status != 200) {
                        $scope.showAlert("找不到资料");
                    }
                }).error(function () {
                    $scope.showAlert('获取资料失败!');
                });
            },
            top: function (userno, n, $scope) {
                $scope.showAlert('无法操作!');
            },
            get: function (userno, Id, $scope) {
                $scope.showAlert('无法操作!');
            },
            add: function (userno, entity, $scope) {
                $scope.showAlert('无法操作!');
            },
            del: function (userno, Id, $scope) {
                $scope.showAlert('无法操作!');
            },
            save: function (userno, Id, entity, $scope) {
                $scope.showAlert('无法操作!');
            }
        };
    }])
    .factory('ItemKind', ['$http', function ($http) {
        var base_url = api_url + "/shberp.itemkind";
        return {
            query: function (userno, $scope) {
                if (userno == undefined || userno == "") {
                    $scope.showLoginFirst();
                    return;
                }
                return $http.get(base_url).success(function (response, status) {
                    $scope.entityList = response;
                    if (status != 200) {
                        $scope.showAlert("找不到资料");
                    }
                }).error(function () {
                    $scope.showAlert('获取资料失败!');
                });
            },
            top: function (userno, n, $scope) {
                $scope.showAlert('无法操作!');
            },
            get: function (userno, Id, $scope) {
                $scope.showAlert('无法操作!');
            },
            add: function (userno, entity, $scope) {
                $scope.showAlert('无法操作!');
            },
            del: function (userno, Id, $scope) {
                $scope.showAlert('无法操作!');
            },
            save: function (userno, Id, entity, $scope) {
                $scope.showAlert('无法操作!');
            }
        };
    }])
    .factory('ItemMaster', ['$http', function ($http) {
        var base_url = api_url + "/shberp.servitemmaster";
        return {
            query: function (userno, category, $scope) {
                if (userno == undefined || userno == "") {
                    $scope.showLoginFirst();
                    return;
                }
                if (category == undefined || category == "") {
                    $scope.go('/app/home', userno);
                    return;
                }
                return $http.get(base_url + '/' + category).success(function (response, status) {
                    $scope.entityList = response;
                }).error(function () {
                    $scope.showAlert('获取资料失败!');
                });
            },
            top: function (userno, n, $scope) {
                $scope.showAlert('无法操作!');
            },
            get: function (userno, Id, $scope) {
                $scope.showAlert('无法操作!');
            },
            add: function (userno, entity, $scope) {
                $scope.showAlert('无法操作!');
            },
            del: function (userno, Id, $scope) {
                $scope.showAlert('无法操作!');
            },
            save: function (userno, Id, entity, $scope) {
                $scope.showAlert('无法操作!');
            }
        };
    }])
    .factory('ItemModel', ['$http', function ($http) {
        var base_url = api_url + "/shberp.itemmodel";
        return {
            query: function (userno, kind, $scope) {
                if (userno == undefined || userno == "") {
                    $scope.showLoginFirst();
                    return;
                }
                if (kind == undefined || kind == "") {
                    $scope.go('/app/home', userno);
                    return;
                }
                var url = base_url + "/kind/" + kind;
                return $http.get(url).success(function (response, status) {
                    $scope.entityList = response;
                }).error(function () {
                    $scope.showAlert('获取资料失败!');
                });
            },
            top: function (userno, n, $scope) {
                $scope.showAlert('无法操作!');
            },
            get: function (userno, Id, $scope) {
                $scope.showAlert('无法操作!');
            },
            add: function (userno, entity, $scope) {
                $scope.showAlert('无法操作!');
            },
            del: function (userno, Id, $scope) {
                $scope.showAlert('无法操作!');
            },
            save: function (userno, Id, entity, $scope) {
                $scope.showAlert('无法操作!');
            }
        };
    }])
    .factory('PricingGroup', ['$http', function ($http) {
        var base_url = api_url + "/shberp.pricinggroup";
        return {
            query: function (userno, $scope) {
                if (userno == undefined || userno == "") {
                    $scope.showLoginFirst();
                    return;
                }
                return $http.get(base_url + '/' + userno).success(function (response, status) {
                    $scope.entityList = response;
                    if (status != 200) {
                        $scope.showAlert("找不到资料");
                    }
                }).error(function () {
                    $scope.showAlert("获取资料失败");
                });
            },
            top: function (userno, n, $scope) {
                $scope.showAlert('无法操作!');
            },
            get: function (userno, Id, $scope) {
                if (userno !== undefined && userno !== "" && Id !== undefined && Id !== "") {
                    return $http.get(base_url + '/' + userno + '/' + Id).success(function (response, status) {
                        $scope.pricinggroup = response;
                        if (status != 200) {
                            $scope.showAlert("找不到资料");
                        }
                    }).error(function () {
                        $scope.showAlert("获取资料失败");
                    });
                }
            },
            add: function (userno, entity, $scope) {
                $scope.showAlert('无法操作!');
            },
            del: function (userno, Id, $scope) {
                $scope.showAlert('无法操作!');
            },
            save: function (userno, Id, entity, $scope) {
                $scope.showAlert('无法操作!');
            }
        };
    }])
    .factory('Pricing', ['$http', function ($http) {
        var base_url = api_url + "/shberp.pricing";
        return {
            query: function (userno, $scope) {
                $scope.showAlert('无法操作!');
            },
            top: function (userno, n, $scope) {
                $scope.showAlert('无法操作!');
            },
            get: function (userno, itemno, modelno, $scope) {
                if (userno !== undefined && userno !== "" && itemno !== undefined && itemno !== "") {
                    var url;
                    if (modelno !== undefined && modelno !== "" && modelno !== "NULL") {
                        url = base_url + '/' + itemno + '/' + modelno;
                    } else {
                        url = base_url + '/' + itemno;
                    }
                    //alert(url)
                    return $http.get(url).success(function (response, status) {
                        $scope.pricing = response;
                        if (status != 200) {
                            $scope.showAlert("找不到资料");
                        }
                    }).error(function () {
                        $scope.showAlert('获取资料失败!');
                    });
                }
            },
            add: function (entity, $scope) {
                $scope.showAlert('无法操作!');
            },
            del: function (userno, $scope) {
                $scope.showAlert('无法操作!');
            },
            save: function (userno, entity, $scope) {
                $scope.showAlert('无法操作!');
            }
        };
    }])
    .factory('User', ['$http', '$location', function ($http, $location) {
        var base_url = api_url + "/shberp.secuser";
        return {
            query: function (userno, $scope) {
                $scope.showAlert('无法操作!');
            },
            top: function (userno, n, $scope) {
                $scope.showAlert('无法操作!');
            },
            get: function (userno, password, $scope) {
                if (userno !== undefined && userno !== "" && password !== undefined && password !== "") {
                    var url = base_url + '/' + userno + '/' + password;
                    return $http.get(url).success(function (response, status) {
                        var user = response;
                        $location.url("/app/home/" + user.userno);
                    }).error(function () {
                        $scope.showAlert('认证失败!');
                    });
                }
            },
            add: function (entity, $scope) {
                $scope.showAlert('无法操作!');
            },
            del: function (userno, $scope) {
                $scope.showAlert('无法操作!');
            },
            save: function (userno, entity, $scope) {
                $scope.showAlert('无法操作!');
            }
        };
    }]);
