import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './companiesList.html';
import { Companies } from '../../../api/companies';
import { name as CompanyAdd } from '../companyAdd/companyAdd';

class CompaniesList {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.subscribe('companies');

        this.helpers({
            companies() {
                return Companies.find({});
            }
        });
    }
}

const name = 'companiesList';

export default angular.module(name, [
        angularMeteor,
        uiRouter,
        CompanyAdd
    ])
    .component(name, {
        template,
        controllerAs: name,
        controller: CompaniesList
    })
    .config(config);

    function config($stateProvider){
      'ngInject';
      $stateProvider
        .state('companies', {
          url: '/enseignes',
          template: '<companies-list></companies-list>'
        });
    }
