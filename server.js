const inquirer = require('inquirer');
const cTable = require('console.table');
const client = require('./connection');

function start() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add Department',
        'Add Role',
        'Add Employee',
        'Update Employee Role',
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View All Departments':
          viewAllDepartments();
          break;
        case 'View All Roles':
          viewAllRoles();
          break;
        case 'View All Employees':
          viewAllEmployees();
          break;
        case 'Add Department':
          addDepartment();
          break;
        case 'Add Role':
          addRole();
          break;
        case 'Add Employee':
          addEmployee();
          break;
        case 'Update Employee Role':
          updateEmployeeRole();
          break;
        case 'Exit':
          client.end();
          break;
        default:
          break;
      }
    });
}

function viewAllDepartments() {
  const query = 'SELECT * FROM department';
  client.query(query, (err, res) => {
    if (err) throw err;
    console.table(res.rows);
    start();
  });
}

function viewAllRoles() {
  const query = 'SELECT * FROM role';
  client.query(query, (err, res) => {
    if (err) throw err;
    console.table(res.rows);
    start();
  });
}

function viewAllEmployees() {
  const query = 'SELECT * FROM employee';
  client.query(query, (err, res) => {
    if (err) throw err;
    console.table(res.rows);
    start();
  });
}

function addDepartment() {
  inquirer
    .prompt({
      name: 'departmentName',
      type: 'input',
      message: 'What is the name of the department?',
    })
    .then((answer) => {
      const query = 'INSERT INTO department (name) VALUES ($1)';
      client.query(query, [answer.departmentName], (err, res) => {
        if (err) throw err;
        console.log(`Added ${answer.departmentName} to departments`);
        start();
      });
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        name: 'roleTitle',
        type: 'input',
        message: 'What is the title of the role?',
      },
      {
        name: 'roleSalary',
        type: 'input',
        message: 'What is the salary of the role?',
      },
      {
        name: 'roleDepartment',
        type: 'input',
        message: 'What is the department ID for the role?',
      },
    ])
    .then((answers) => {
      const query = 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)';
      client.query(query, [answers.roleTitle, answers.roleSalary, answers.roleDepartment], (err, res) => {
        if (err) throw err;
        console.log(`Added ${answers.roleTitle} to roles`);
        start();
      });
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: 'firstName',
        type: 'input',
        message: "What is the employee's first name?",
      },
      {
        name: 'lastName',
        type: 'input',
        message: "What is the employee's last name?",
      },
      {
        name: 'roleId',
        type: 'input',
        message: "What is the employee's role ID?",
      },
      {
        name: 'managerId',
        type: 'input',
        message: "What is the employee's manager ID?",
      },
    ])
    .then((answers) => {
      const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)';
      client.query(query, [answers.firstName, answers.lastName, answers.roleId, answers.managerId], (err, res) => {
        if (err) throw err;
        console.log(`Added ${answers.firstName} ${answers.lastName} to employees`);
        start();
      });
    });
}

function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        name: 'employeeId',
        type: 'input',
        message: "What is the employee's ID?",
      },
      {
        name: 'newRoleId',
        type: 'input',
        message: "What is the employee's new role ID?",
      },
    ])
    .then((answers) => {
      const query = 'UPDATE employee SET role_id = $1 WHERE id = $2';
      client.query(query, [answers.newRoleId, answers.employeeId], (err, res) => {
        if (err) throw err;
        console.log(`Updated employee's role`);
        start();
      });
    });
}

start();