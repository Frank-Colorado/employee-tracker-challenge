const connection = require("../config/connection");

class Role {
  constructor(title, salary, departmentId) {
    this.title = title;
    this.salary = salary;
    this.departmentId = departmentId;
  }
}
