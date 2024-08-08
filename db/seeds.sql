-- Insert departments
INSERT INTO department (name)
VALUES  ('Sales'),
        ('Finance'),
        ('Legal'),
        ('Operations'),
        ('Service');

-- Insert roles
INSERT INTO role (title, salary, department_id)
VALUES  ('Salesperson', 75000, 1),
        ('Sales Lead', 90000, 1),
        ('Accountant', 70000, 2),
        ('Lawyer', 110000, 3),
        ('Team Lead', 90000, 4),
        ('Developer', 70000, 4),
        ('Junior Developer', 50000, 4),
        ('Customer Service', 50000, 5);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Robert', 'Downey', 1, 2),
        ('James', 'Jacobs', 2, NULL),
        ('Jimmy', 'Hogan', 3, NULL),
        ('Tom', 'Sawyer', 4, NULL),
        ('Kim', 'Doe', 5, 5),
        ('Jeff', 'James', 6, 5),
        ('Matt', 'Damon', 7, 5),
        ('Anthony', 'Stark', 8, NULL);