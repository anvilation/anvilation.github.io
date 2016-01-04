(function() {
    'use strict';

    angular
        .module('app', [
			'ngMaterial',
			'ngMessages'
	]).controller('MenuCtrl', function($scope){
		
	}).config(function($mdThemingProvider, $mdIconProvider){
		  $mdThemingProvider.theme('default')
		      .primaryPalette('blue-grey')
		      .accentPalette('teal');
		
		  $mdIconProvider
		        .fontSet('fa', 'fontawesome')
		        .iconSet('anvilation', '/img/anvilation.svg'); 
	});

})();
/*
To Do:
	- implement routes
	
	
	- implement imagary to create look and feed
	
	
	- header images for cards
	
	
	- implement button actions
	
	- Project Controller
	
	- About Controller


 	- create and implement a project view

*/