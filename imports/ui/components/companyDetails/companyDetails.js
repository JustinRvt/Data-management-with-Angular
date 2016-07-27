import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { Meteor } from 'meteor/meteor';

import template from './companyDetails.html';
import { Companies } from '../../../api/companies';

class companyDetails {
    constructor($stateParams, $scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.companyId = $stateParams.companyId;

        this.subscribe('companies');
        this.subscribe('users');

        this.helpers({
            company() {
                return Companies.findOne({
                    _id: $stateParams.partyId
                });
            },
            users(){
              return Meteor.users.find({});
            }
        });
    }

    save() {
      Companies.update({
        _id: this.company._id
      }, {
        $set: {
          Enseigne: this.company.name,
          Statut_enseigne: this.company.description,
          public: this.company.public
        }
      }, (error) => {
        if (error) {
          console.log('Erreur : impossible de mettre à jour l\'enseigne');
        } else console.log ('Actualisation ok');
      });
    }
}


const name = 'companyDetails';

export default angular.module(name, [
        angularMeteor,
        uiRouter
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
        template: '<company-details></company-details>',
        resolve: {
          currentUser($q) {
            if (Meteor.userId() === null){
              return $q.reject('AUTH_REQUIRED');
            } else {
              return $q.resolve();
            }
          }
        }
    });
}
