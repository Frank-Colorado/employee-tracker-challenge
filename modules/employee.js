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
      console.log("Employee added successfully!");
      return employee;
    } catch (err) {
      console.log({ err });
    }
  }
  static async getAll() {
    try {
      const [result] = await connection.query("SELECT * FROM employee");
      return result;
    } catch (err) {
      console.log({ err });
    }
  }

  static async updateRole(id, roleId) {
    try {
      console.log("here", id, roleId);
      const [result] = await connection.query(
        "UPDATE employee SET role_id = (?) WHERE id = (?)",
        [roleId, id]
      );
      console.log("Employee role updated successfully!");
      return result;
    } catch (err) {
      console.log({ err });
    }
  }
}

module.exports = Employee;
