const pool = require('./connection');

class DB {
    constructor() {}

    async query(sql, args = []) {
        const client = await pool.connect();
        try {
            const result = await client.query(sql, args);
            return result;
        } finally {
            client.release();
        }

    }

    findAllEmployees() {
        return this.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;");
    }

    addOneEmployee(firstName, lastName, roleId, managerId) {
        return this.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1,$2,$3,$4)", [firstName, lastName, roleId, managerId]);
    }

    updateOneEmployee(employeeId, newData) {
        const { first_name, last_name, role_id, manager_id } = newData;
        return this.query("UPDATE employee SET first_name = $1, last_name = $2, role_id = $3, manager_id = $4 WHERE id = $5", [first_name, last_name, role_id, manager_id, employeeId]);
    }

    viewRole() {
        return this.query("SELECT * FROM role");
    }

    addRoles(titleName, salaryAmount, departmentId) {
        return this.query("INSERT INTO role (title, salary, department_id) VALUES ($1,$2,$3)", [titleName, salaryAmount, departmentId]);
    }

    viewDepartment() {
        return this.query("SELECT * FROM department");
    }

    addDepartment(departmentName) {
        return this.query("INSERT INTO department (name) VALUES ($1)",[departmentName]);
    }

    quitNow() {
        return process.exit();
    }

}


module.exports = new DB();
