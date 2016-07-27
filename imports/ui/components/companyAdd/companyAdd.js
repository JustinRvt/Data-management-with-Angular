import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './companyAdd.html';
import { Companies } from '../../../api/companies';

class CompanyAdd {
  constructor(){
    this.company = {};
  }

  submit(){
    this.company.owner = Meteor.user()._id;
    Companies.insert(this.company);
    this.reset();
  }

  reset(){
    this.company= {};
  }
}

const name = 'companyAdd';

export default angular.module(name, [
  angularMeteor
])
.component(name, {
  template,
  controllerAs: name,
  controller: CompanyAdd
});


// Materialize
$(document).ready(function() {
    $('select').material_select();
    $('.modal-trigger').leanModal();
    $('.tooltipped').tooltip({delay: 50});
  });
