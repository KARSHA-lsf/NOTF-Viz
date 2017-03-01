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
            },{
                "active": true,
                "text": "LMn-20f",
                "subItem":[
                    {
                	"text":"Permno",
                	"link":"\heatmap.html?tabel=notf_lmn_2004_permno_20f&col=711&y_col=permno&csize=18&rows=20&title_main=Permno vs Factors&title_sub=LMn"
                	},
                	{"text":"Date",
                	"link":"\heatmap.html?tabel=notf_lmn_2004_dates_20f&col=252&y_col=date&csize=10&rows=20&title_main=Date vs Factors&title_sub=LMn"
                	},
                	{"text":"NAICS",
                    	"link":"\heatmap.html?tabel=notf_lmn_2004_naics_20f&col=24&y_col=naics&csize=20&rows=20&title_main=NAICS vs Factors&title_sub=LMn"
                    }
                ]
            },{
                "active": true,
                "text": "AmNeg-20f",
                "subItem":[
                    {
                	"text":"Permno",
                	"link":"\heatmap.html?tabel=notf_amneg_2004_permno_20f&col=711&y_col=permno&csize=18&rows=20&title_main=Permno vs Factors&title_sub=AmNeg-20f"
                	},
                	{"text":"Date",
                	"link":"\heatmap.html?tabel=notf_amneg_2004_dates_20f&col=252&y_col=date&csize=18&rows=20&title_main=Date vs Factors&title_sub=AmNeg-20f"
                	},
                	{"text":"NAICS",
                    	"link":"\heatmap.html?tabel=notf_amneg_2004_naics_20f&col=24&y_col=naics&csize=20&rows=20&title_main=NAICS vs Factors&title_sub=AmNeg-20f"
                    }
                ]
            },
            {
                "active": true,
                "text": "AmNeg-25f",
                "subItem":[
                    {
                	"text":"Permno",
                	"link":"\heatmap.html?tabel=notf_amneg_2004_permno_25f&col=711&y_col=permno&csize=18&rows=25&title_main=Permno vs Factors&title_sub=AmNeg-25f"
                	},
                	{"text":"Date",
                	"link":"\heatmap.html?tabel=notf_amneg_2004_dates_25f&col=252&y_col=date&csize=18&rows=25&title_main=Date vs Factors&title_sub=AmNeg-25f"
                	},
                	{"text":"NAICS",
                    	"link":"\heatmap.html?tabel=notf_amneg_2004_naics_25f&col=24&y_col=naics&csize=20&rows=25&title_main=NAICS vs Factors&title_sub=AmNeg-25f"
                    }
                ]
            },
            {
                "active": true,
                "text": "LMn_sm1-20f",
                "subItem":[
                    {
                	"text":"Permno",
                	"link":"\heatmap.html?tabel=notf_lmn_2004_sm1_permno_20f&col=711&y_col=permno&csize=18&rows=20&title_main=Permno vs Factors&title_sub=LMn_sm1-20f"
                	},
                	{"text":"Date",
                	"link":"\heatmap.html?tabel=notf_lmn_2004_sm1_dates_20f&col=252&y_col=date&csize=18&rows=20&title_main=Date vs Factors&title_sub=LMn_sm1-20f"
                	},
                	{"text":"NAICS",
                    	"link":"\heatmap.html?tabel=notf_lmn_2004_sm1_naics_20f&col=24&y_col=naics&csize=20&rows=20&title_main=NAICS vs Factors&title_sub=LMn_sm1-20f"
                    }
                ]
            },
            {
                "active": true,
                "text": "LMn_sm2-20f",
                "subItem":[
                    {
                	"text":"Permno",
                	"link":"\heatmap.html?tabel=notf_lmn_2004_sm2_permno_20f&col=711&y_col=permno&csize=18&rows=20&title_main=Permno vs Factors&title_sub=LMn_sm2-20f"
                	},
                	{"text":"Date",
                	"link":"\heatmap.html?tabel=notf_lmn_2004_sm2_dates_20f&col=252&y_col=date&csize=18&rows=20&title_main=Date vs Factors&title_sub=LMn_sm2-20f"
                	},
                	{"text":"NAICS",
                    	"link":"\heatmap.html?tabel=notf_lmn_2004_sm2_naics_20f&col=24&y_col=naics&csize=20&rows=20&title_main=NAICS vs Factors&title_sub=LMn_sm2-20f"
                    }
                ]
            },
            {
                "active": true,
                "text": "LMn_sm3-20f",
                "subItem":[
                    {
                	"text":"Permno",
                	"link":"\heatmap.html?tabel=notf_lmn_2004_sm3_permno_20f&col=711&y_col=permno&csize=18&rows=20&title_main=Permno vs Factors&title_sub=LMn_sm3-20f"
                	},
                	{"text":"Date",
                	"link":"\heatmap.html?tabel=notf_lmn_2004_sm3_dates_20f&col=252&y_col=date&csize=18&rows=20&title_main=Date vs Factors&title_sub=LMn_sm3-20f"
                	},
                	{"text":"NAICS",
                    	"link":"\heatmap.html?tabel=notf_lmn_2004_sm3_naics_20f&col=24&y_col=naics&csize=20&rows=20&title_main=NAICS vs Factors&title_sub=LMn_sm3-20f"
                    }
                ]
            },
            {
                "active": true,
                "text": "LMx_sm1-20f",
                "subItem":[
                    {
                	"text":"Permno",
                	"link":"\heatmap.html?tabel=notf_lmx_2004_sm1_permno_20f&col=711&y_col=permno&csize=18&rows=20&title_main=Permno vs Factors&title_sub=LMx_sm1-20f"
                	},
                	{"text":"Date",
                	"link":"\heatmap.html?tabel=notf_lmx_2004_sm1_dates_20f&col=252&y_col=date&csize=18&rows=20&title_main=Date vs Factors&title_sub=LMx_sm1-20f"
                	},
                	{"text":"NAICS",
                    	"link":"\heatmap.html?tabel=notf_lmx_2004_sm1_naics_20f&col=24&y_col=naics&csize=20&rows=20&title_main=NAICS vs Factors&title_sub=LMx_sm1-20f"
                    }
                ]
            },
            {
                "active": true,
                "text": "LMx_sm2-20f",
                "subItem":[
                    {
                	"text":"Permno",
                	"link":"\heatmap.html?tabel=notf_lmx_2004_sm2_permno_20f&col=711&y_col=permno&csize=18&rows=20&title_main=Permno vs Factors&title_sub=LMx_sm2-20f"
                	},
                	{"text":"Date",
                	"link":"\heatmap.html?tabel=notf_lmx_2004_sm2_dates_20f&col=252&y_col=date&csize=18&rows=20&title_main=Date vs Factors&title_sub=LMx_sm2-20f"
                	},
                	{"text":"NAICS",
                    	"link":"\heatmap.html?tabel=notf_lmx_2004_sm2_naics_20f&col=24&y_col=naics&csize=20&rows=20&title_main=NAICS vs Factors&title_sub=LMx_sm2-20f"
                    }
                ]
            },
            {
                "active": true,
                "text": "LMx_sm3-20f",
                "subItem":[
                    {
                	"text":"Permno",
                	"link":"\heatmap.html?tabel=notf_lmx_2004_sm3_permno_20f&col=711&y_col=permno&csize=18&rows=20&title_main=Permno vs Factors&title_sub=LMx_sm3-20f"
                	},
                	{"text":"Date",
                	"link":"\heatmap.html?tabel=notf_lmx_2004_sm3_dates_20f&col=252&y_col=date&csize=18&rows=20&title_main=Date vs Factors&title_sub=LMx_sm3-20f"
                	},
                	{"text":"NAICS",
                    	"link":"\heatmap.html?tabel=notf_lmx_2004_sm3_naics_20f&col=24&y_col=naics&csize=20&rows=20&title_main=NAICS vs Factors&title_sub=LMx_sm3-20f"
                    }
                ]
            },
            ]};});