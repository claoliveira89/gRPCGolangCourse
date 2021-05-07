const Schema = require('./employees_pb');
const fs = require('fs');

const leo = new Schema.Employee();
leo.setId(1002);
leo.setName('Leo');
leo.setSalary(9000);

const hussein = new Schema.Employee();
hussein.setId(1001);
hussein.setName('Hussein');
hussein.setSalary(1000);

const rick = new Schema.Employee();
rick.setId(1003);
rick.setName('Rick');
rick.setSalary(5000);

const employees = new Schema.Employees();
employees.addEmployees(hussein);
employees.addEmployees(leo);
employees.addEmployees(rick);

const bytes = employees.serializeBinary();
fs.writeFileSync('protobuff/employeesbinary', bytes);

console.log('binary ' + bytes);

const employees2 = Schema.Employees.deserializeBinary(bytes);
console.log(employees2.toString());
