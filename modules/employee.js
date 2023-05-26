const connection = require("../config/connection");

class Employee {
  constructor(firstName, lastName, roleId, managerId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.roleId = roleId;
    this.managerId = managerId;
  }
  async create() {
    try {
      const [result] = await connection.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [this.firstName, this.lastName, this.roleId, this.managerId]
      );
      const [employee] = await connection.query(
        "SELECT * FROM employee WHERE id = (?)",
        [result.insertId]
      );
      return "Employee added successfully!", employee;
    } catch (err) {
      console.log({ err });
    }
  }
}
