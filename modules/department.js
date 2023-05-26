const connection = require("../config/connection");

class Department {
  constructor(name) {
    this.name = name;
  }
  async create() {
    try {
      const [result] = await connection.query(
        "INSERT INTO department (name) VALUES (?)",
        [this.name]
      );
      const [department] = await connection.query(
        "SELECT * FROM department WHERE id = (?)",
        [result.insertId]
      );
      return "Department added successfully!", department;
    } catch (err) {
      console.log({ err });
    }
  }
  static async getAll() {
    const [result] = await connection.query("SELECT * FROM department");
    return result;
  }
}

module.exports = Department;
