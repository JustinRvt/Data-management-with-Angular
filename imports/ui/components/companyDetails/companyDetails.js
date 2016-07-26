import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './companyDetails.html';
import { Companies } from '../../../api/companies';

class companyDetails {
    constructor($stateParams, $scopes, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.companyId = $stateParams.companyId;

        this.helpers({
            company() {
                return Companies.findOne({
                    _id: $stateParams.partyId
                });
            }
        });
    }

    save() {
      Companies.update({
        _id: this.company._id
      }, {
        $set: {
          Enseigne: this.company.Enseigne,
          Statut_enseigne: this.company.Statut_enseigne
        }
      });
    }
}


const name = 'companyDetails';

export default angular.module(name, [
        angularMeteor
    ])
    .component(name, {
        template,
        controllerAs: name,
        controller: companyDetails
    })
    .config(config);

function config($stateProvider) {
    'ngInject';

    $stateProvider.state('companyDetails', {
        url: '/enseignes/:companyId',
        template: '<company-details></company-details>'
    });
}
