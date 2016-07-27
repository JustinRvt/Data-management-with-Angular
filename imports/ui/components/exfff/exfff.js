import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './exfff.html';

import { name as CompaniesList } from '../companiesList/companiesList';
import { name as CompanyDetails } from '../companyDetails/companyDetails';
import { name as Navigation } from '../navigation/navigation';


class Exfff {}

const name = 'exfff';

export default angular.module(name, [
    angularMeteor,
    uiRouter,
    CompaniesList,
    CompanyDetails,
    Navigation,
    'accounts.ui'
])
.component(name, {
    template,
    controllerAs: name,
    controller: Exfff
})
.config(config)
.run(run);

function config($locationProvider, $urlRouterProvider){
  'ngInject';

  $locationProvider.html5Mode(true);
  
  $urlRouterProvider.otherwise('/enseignes');
}

function run($rootScope, $state){
  'ngInject';

  $rootScope.$on('$stateChangeError',
    (event, toState, toParams, fromState, fromParams, error) => {
      if (error === 'AUTH_REQUIRED') {
        $state.go('companies');
      }
    });
}
