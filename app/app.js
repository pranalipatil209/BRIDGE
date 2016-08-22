
/**
 * main js 
 * */
var bridgeApp = angular.module('bridgeApp', ['ui.router']);

/** configure existing services */
bridgeApp.config(function ($stateProvider, $urlRouterProvider) {

	/**
         * @default Home
         */
	$urlRouterProvider.otherwise('/home');

	/** @define states */
	$stateProvider
		/** Home states */
		.state('home', {
			url: '/home',

			templateUrl: 'pages/home.html',


			controller: 'bridgeCtrl'
		})

});
