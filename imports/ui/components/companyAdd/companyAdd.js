import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './companyAdd.html';
import { Companies } from '../../../api/companies';

class CompanyAdd {
  constructor(){
    this.company = {};
  }

  submit(){
    console.log('submit:', this.company);
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
