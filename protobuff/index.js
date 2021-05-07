const fs = require('fs');
const employees = [];

employees.push({
    name: "Hussein",
    salary: 1000,
    id: 1001
});

const leo = {
    name: "Leonardo",
    salary: 9000,
    id: 1002
}

employees.push(leo);

employees.push({
    name: "Rick",
    salary: 5000,
    id: 1003
});

fs.writeFileSync('protobuff/jasondata.json', JSON.stringify(employees));
