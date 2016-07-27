import { Mongo } from 'meteor/mongo';

export const Companies = new Mongo.Collection('companies');

Companies.allow({
    insert(userId, company) {
        return userId && company.owner === userId;
    },
    update(userId, company, fields, modifier) {
        return userId && company.owner === userId;
    },
    remove(userId, company) {
        return userId && company.owner === userId;
    }
});
