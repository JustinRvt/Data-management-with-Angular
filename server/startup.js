import { Meteor } from 'meteor/meteor';
import { Companies } from '../imports/api/companies';


Meteor.startup(() => {
    if (Companies.find().count() === 0) {
        const companies = [
          // Feed DB
        ];

        companies.forEach((company) => {
            Companies.insert(company)
        });
    }
});
