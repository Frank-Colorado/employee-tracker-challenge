const connection = require("../config/connection");

class Role {
  constructor(title, salary, departmentId) {
    this.title = title;
    this.salary = salary;
    this.departmentId = departmentId;
  }
  async create() {
    try {
      const [result] = await connection.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [this.title, this.salary, this.departmentId]
      );
      const [role] = await connection.query(
        "SELECT * FROM role WHERE id = (?)",
        [result.insertId]
      );
      return "Role added successfully!", role;
    } catch (err) {
      console.log({ err });
    }
  }
  static async getAll() {
    const [result] = await connection.query("SELECT * FROM role");
    return result;
  }
}
