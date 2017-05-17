angular
    .module('myApp', [])

.controller('refCtrl', function CountCtrl() {
    var vm = this;
    vm.heading = 'REFERENCES';

    vm.references = [
        {
            'name': 'Mr. Joe',
            'companyName': 'Company Name',
            'pos': 'Position in Company',
            'phone': '123-456-7890',
            'email1': 'alpha@gmail.com'
        },
        {
            'name': 'Mr. Jane',
            'companyName': 'Company Name',
            'pos': 'Position in Company',
            'phone': '123-456-7890',
            'email1': 'beta@gmail.com'
        }
        ]
})

.component('ref', {
    controller: 'refCtrl',
    template: [
          '<h3> {{$ctrl.heading}} </h3>',
        '<div ng-repeat="name in $ctrl.data">',
        '<h4 class="uni-class"  id="uni-name"> {{name.name}}</h4>',
        ' <h5 class="uni-class"> {{name.companyName}} </h5>',
        '<p>{{name.pos}} </p>',
        '<p>Phone: {{name.phone}} </p>',
        '<p>E-mail: {{name.email1}} </p>',
        '</div>'
        ].join(''),
    bindings: {
        data: '<'
    }
})


.controller('contactCtrl', function CountCtrl() {
    var vm = this;
    vm.heading = 'CONTACT',
        vm.address = 'lorem ipsum dolor isit.',
        vm.phone1 = '123-456-7890',
        vm.phone2 = '123-456-7890',
        vm.twitter = 'twitter.com/alpha',
        vm.facebook = 'facebook.com',
        vm.email = 'alpha@gmail.com'
})

.component('contact', {
    controller: 'contactCtrl',
    template: [
          '<h3>{{$ctrl.heading}} </h3>',
            '<i class="fa fa-home uni-class"></i> <p class="uni-class"> {{$ctrl.address}}</p>',
        '<br>',
            '<i class="fa fa-phone uni-class"></i> <p class="uni-class"> {{$ctrl.phone1}}</p>',
        '<br>',
            '<i class="fa fa-phone uni-class"></i> <p class="uni-class"> {{$ctrl.phone2}}</p>',
        '<br>',
        '<i class="fa fa-twitter uni-class"></i> <p class="uni-class"> {{$ctrl.twitter}}</p>',
        '<br>',
        '<i class="fa fa-facebook uni-class"></i> <p class="uni-class"> {{$ctrl.facebook}}</p>',
        '<br>',
            '<i class="fa fa-envelope uni-class"></i> <p class="uni-class"> {{$ctrl.email}}</p>'
        ].join('')
})



.factory('JsonService', function($http) {

     var _getData = function() {
        return $http.get('data.json');
    };

    return{
        getData: _getData
    };


})


.controller('expCtrl', function CountCtrl($http, JsonService, $scope) {
    var vm = this;
    vm.heading = 'PROFESSIONAL EXPERIENCES';

    //  JsonService.getData().then(function(response) {
    //     $scope.skills = response.data;
    //     console.log(skills);
    // });

$http({
  method: 'GET',
  url: './data.json'
}).then(function successCallback(response) {
    vm.skills = response.data;
      console.log(skills);
  });

//     vm.skills = [    
//         {
//             "company": "ibrand studio",
//             "post": "web and graphic designer",
//             "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea non laudantium minus earum possimus tenetur, amet atque officiis cum temporibus autem, nesciunt sunt vel ab odio placeat vitae tempore provident.",
//             "jyear": 2012,
//             "lyear": 'PRESENT'
//     },

//         {
//             "company": "ibrand studio",
//             "post": "web and graphic designer",
//             "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea non laudantium minus earum possimus tenetur, amet atque officiis cum temporibus autem, nesciunt sunt vel ab odio placeat vitae tempore provident.",
//             "jyear": 2010,
//             "lyear": 2012
//     },

//         {
//             "company": "ibrand studio",
//             "post": "web and graphic designer",
//             "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea non laudantium minus earum possimus tenetur, amet atque officiis cum temporibus autem, nesciunt sunt vel ab odio placeat vitae tempore provident.",
//             "jyear": 2010,
//             "lyear": 2008
//     }
// ]
})

.component('experience', {
    controller: 'expCtrl',
    template: [
        '<h1> {{$ctrl.heading}} </h1>',
        '<div id="exp" ng-repeat="name in $ctrl.skills">',
        '<h3 id="company-name"> {{name.company}} </h3>',
        '<b>{{name.post}}</b> ',
           '<b id="year">{{name.jyear}} - {{name.lyear}} </b> ',
        '<p>{{name.description}} </p>',
        '</div>'
         ].join(''),
    bindings: {
        data: '<'
    }
})


.controller('educationCtrl', function CountCtrl($http) {
    var vm = this;
    vm.heading = 'EDUCATION';

    //    $http.get('data.json').then(function(data){
    //        vm.details = data;
    //    });

    vm.education = [
    
        {
            "institute": "NUST-SEECS",
            "location": "Islamabad, PK",
            "branch": "Bachelors of Software Engineerign",
            "years": '2011 - 2015',
    },

        {
            "institute": "Indiana University",
            "location": "Bloomington, IN ",
            "branch": "Global Business and Entrepreneurship",
            "years": 'Aug 2014',
    },

        {
            "institute": "Resource Academia",
            "location": "Lahore, PK",
            "branch": "A Levels ",
            "years": 'Aug 2008 - Aug 2010',
    },
        {
            "institute": "Cathedral High School",
            "location": "Lahore, PK",
            "branch": "O Levesl",
            "years": 'Apr 2004 - Aug 2008',
    }
]
})

.component('education', {
    controller: 'educationCtrl',
    template: [
        '<h1> {{$ctrl.heading}} </h1>',
        '<div class="edu-block col-md-6 col-lg-6 col-xs-12" ng-repeat="name in $ctrl.data">',

        '<h3 class="uni-class"  id="uni-name"> {{name.institute}} </h3>',
        ' <h3 class="uni-class"> {{name.location}} </h3>',
        '<br>',
        '<b>{{name.branch}}</b> ',
        '<p>{{name.years}} </p>',

        '</div>'
         ].join(''),
    bindings: {
        data: '<'
    }
})

.controller('skillsCtrl', function CountCtrl($http) {
    var vm = this;
    vm.heading = 'Skills';
    vm.skills = [
//     
        {
            "title": "PROFESSIONAL SKILLS",
            "post": [
                {
                    'skill': 'JavaScript',
                    rating: 4
                },
                {
                    'skill': 'HTML/PHP',
                    rating: 5
                },
                {
                    'skill': 'CMS',
                    rating: 3
                },
                {
                    'skill': 'Database',
                    rating: 4
                }
            ]
    },
        
           {
            "title": "PERSONAL SKILLS",
            "post": [
                {
                    'skill': 'Creativity',
                    rating: 5
                },
                {
                    'skill': 'Leadership',
                    rating: 4
                },
                {
                    'skill': 'Organisation',
                    rating: 3
                }
            ]
    }
]
})




.component('skills', {
    controller: 'skillsCtrl',
    template: [
        '<h3> {{$ctrl.heading}} </h3>',
        '<div ng-repeat="name in $ctrl.data">',
        '<h4 id="company-name"> {{name.title}} </h4>',
        '<div ng-repeat="d in name.post">',
        '<p class="uni-class">{{d.skill}} </p>',
        '<p class="uni-class" style="float:right;"> {{d.rating}}</p>',
        '</div>',
        '</div>'
         ].join(''),
    bindings: {
        data: '<'
    }
})


.controller('profileCtrl', function CountCtrl() {
    var vm = this;
    vm.heading = 'PROFILE';
    vm.detail = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quisquam sapiente consectetur, vero eligendi dolore voluptate eos reprehenderit dolor. Sapiente libero earum beatae blanditiis voluptate temporibus maxime nobis, est alias.';

})

.component('profile', {
    controller: 'profileCtrl',
    template: [
        '<div class="col-md-3 col-lg-3 col-xs-12 col-sm-3">',
        '<img ng-src="businessman.svg" class="img-thumbnail img-responsive" width="200" height="250">',
        '</div>',
        '<div class="col-md-9 col-lg-9 col-xs-12 col-sm-9">',
          '<h1> {{$ctrl.heading}} </h1>',
        '<p>{{$ctrl.detail}} </p>',
        '</div>',
        ].join(''),
    bindings: {
        data: '<'
    }
})




document.addEventListener('DOMContentLoaded', function () {
    angular.bootstrap(document, ['myApp']);
});