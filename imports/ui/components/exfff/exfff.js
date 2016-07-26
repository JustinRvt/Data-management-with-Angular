import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './exfff.html';
import {
    name as CompaniesList
} from '../companiesList/companiesList';

class Exfff {}

const name = 'exfff';

export default angular.module(name, [
    angularMeteor,
    CompaniesList
]).component(name, {
    template,
    controllerAs: name,
    controller: Exfff
});
