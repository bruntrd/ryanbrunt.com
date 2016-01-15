myApp.controller('HomeController', ['$scope', function($scope){
    console.log('home controller');

}]);
myApp.controller('ResumeController', ['$scope', function($scope){
    console.log('resume controller');
}]);
myApp.controller('AboutController', ['$scope', function($scope){
    $scope.myInterval = 3000;
    $scope.slides = [
        {
            image: '/assets/styles/photos/family.png'
        },
        {
            image: '/assets/styles/photos/lnr.png'
        },
        {
            image: '/assets/styles/photos/ryancurling.jpg'
        },
        {
            image: '/assets/styles/photos/lrRedrock.jpg'
        },
        {
            image: '/assets/styles/photos/albs.png'
        }
    ];
    console.log('about controller');
}]);
myApp.controller('ProjectsController', ['$scope', function($scope){
    console.log('projects controller');
}]);
myApp.controller('ContactController', ['$scope', function($scope){
    console.log('contact controller');
}]);

