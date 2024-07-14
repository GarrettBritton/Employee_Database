INSERT INTO department (department_name)
VALUES  ('Sales'),
        ('Finance'),
        ('Legal'),
        ('Operations'),
        ('Service');

INSERT INTO role (title, salary, department_id)
VALUES  ('Salesperson', 75000, 1),
        ('Sales Lead', 90000, 1),
        ('Accountant', 70000, 2),
        ('Lawyer', 110000, 3),
        ('Team Lead', 90000, 4),
        ('Developer', 70000, 4),
        ('Junior Developer', 50000, 4),
        ('Customer Service', 50000, 5);

INSERT INTO employee (role_id, first_name, last_name, manager_id)
VALUES  (1, 'Robert', 'Downey', 2),
        (2, 'James', 'Jacobs', NULL),
        (3, 'Jimmy', 'Hogan', NULL),
        (4, 'Tom', 'Sawyer', NULL),
        (5, 'Kim', 'Doe', 5),
        (6, 'Jeff', 'James', 5),
        (7, 'Matt', 'Damon', 5),
        (8, 'Anthony', 'Stark', NULL);
       