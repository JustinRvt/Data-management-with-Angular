import {
    Meteor
} from 'meteor/meteor';

import {
    Companies
} from './collection';

if (Meteor.isServer) {
    Meteor.publish('companies', function() {
        return Companies.find({

            fields: {
                Identifiant_enseigne: 1,
                Mode_developpement: 1,
                Enseigne: 1,
                Secteur_activite: 1
            }
        })
    })
};
/*
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
    */
