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
      console.log("Department added successfully!");
      return department;
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
