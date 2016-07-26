import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './companiesList.html';

class CompaniesList {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.helpers({
            companies() {
                return Companies.find({});
            }
        });
    }
}

const name = 'companiesList';

export default angular.module(name, [
    angularMeteor
]).component(name, {
    template,
    controllerAs: name,
    controller: CompaniesList
});
