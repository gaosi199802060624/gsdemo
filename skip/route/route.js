app.config(function($routeProvider){

    $routeProvider.when("/index", {
        templateUrl: "html/index.html",
        controller: "index"
    }).when("/dianpu", {
        templateUrl: "html/dianpu.html",
        controller: "dianpu"
    }).when("/fuwu", {
        templateUrl: "html/fuwu.html",
        controller: "fuwu"
    }).when("/kepian", {
        templateUrl: "html/kepian.html",
        controller: "kepian"
    }).when("/kepianguanli", {
        templateUrl: "html/kepian.html",
        controller: "kepian"
    }).when("/dangqi", {
        templateUrl: "html/dangqi.html",
        controller: "dangqi"
    }).when("/mingxi", {
        templateUrl: "html/mingxi.html",
        controller: "dangqi"
    }).when("/yilan", {
        templateUrl: "html/yilan.html",
        controller: "dangqi"
    }).when("/fenxiang", {
        templateUrl: "html/fenxiang.html",
        controller:"fenxiang"
    }).when("/youke", {
        templateUrl: "html/youke.html",
        controller:"qianke"
    }).when("/xitong", {
        templateUrl: "html/xitong.html",
        controller:"xitong"
    }).when("/shanghu1",{
        templateUrl:"html/shanghu1.html",
         conreoller:"shanghu1"
    }).when("/shanghu2",{
        templateUrl:"html/shanghu2.html",
        conreoller:"shanghu2"
    }).when("/shanghu3",{
        templateUrl:"html/shanghu3.html",
        conreoller:"shanghu3"
    }).when("/shanghu8",{
        templateUrl:"html/shanghu8.html",
        conreoller:"shanghu8"
    }).when("/shanghu9",{
        templateUrl:"html/shanghu9.html",
        conreoller:"shanghu9"
    }).when("/shanghu10",{
        templateUrl:"html/shanghu10.html",
        conreoller:"shanghu10"
    })
})