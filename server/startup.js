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
