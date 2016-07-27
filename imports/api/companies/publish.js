import { Meteor } from 'meteor/meteor';

import { Companies } from './collection';

if (Meteor.isServer){
  Meteor.publish('companies', function(){
    const selector = {
      $or: [{
        // public companies
        $and: [{
          public: true
        }, {
          public: {
            $exists: true
          }
        }]
      }, {
        // when logged in and owner
        $and: [{
          owner: this.userId
        }, {
          owner: {
            $exists: true
          }
        }]
      }]
    };

    return Companies.find();
  });
}
