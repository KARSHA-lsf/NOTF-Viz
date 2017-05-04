angular.module('HHF', [])
    .directive('menu', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                loc: '@location',
                menus: '='
            },
            link: function($scope, $element) {
               
            },
            template:'<ul class="nav {{loc}}">'+
	                 '<li ng-repeat="item in menus.MenuItems">'+
	                 	'<a><i class="fa fa-home"></i>{{item.text}}<span class="fa fa-chevron-down"></span></a>'+
	                    '<ul class="nav child_menu">'+
	                        '<li ng-repeat="subitem in item.subItem">'+
	                    		'<a href="{{subitem.link}}">{{subitem.text}}</a>'+
	                    	'</li>'+
	                    '</ul>'+
	                  '</li>'           
        };
    })
    
    .controller('MenuCtrl', function ($scope) {
        $scope.menus = {
            "current": "index",
            "MenuItems": [{
                "active": true,
                "text": "LMx-20f",
                "subItem":[
                    {
                	"text":"Permno",
                	"link":"\heatmap.html?tabel=notf_lmx_2004_permno_20f&col=711&y_col=permno&csize=18&rows=20&title_main=Permno vs Factors&title_sub=LMx"
                	},
                	{"text":"Date",
                	"link":"\heatmap.html?tabel=notf_lmx_2004_dates_20f&col=252&y_col=date&csize=18&rows=20&title_main=Date vs Factors&title_sub=LMx"
                	},
                	{"text":"NAICS",
                    	"link":"\heatmap.html?tabel=notf_lmx_2004_naics_20f&col=24&y_col=naics&csize=20&rows=20&title_main=NAICS vs Factors&title_sub=LMx"
                    }
                ]
            }
            ]};});