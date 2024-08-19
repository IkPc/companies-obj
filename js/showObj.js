const companies = require('./companies');

//Adding kind
companies.forEach((company) => {
    company.kind = 'Internet company'
});

function dots(name) {
    const maxChar = 20;
    const dotsQuant = maxChar - name.length;
    return '.'.repeat(dotsQuant);
}

//Showing the company names and their years of foundation
function show(companies) {
    return companies.name + dots(companies.name) + companies.founded;
}

companies.forEach((company) => {
    console.log(show(company));
})
