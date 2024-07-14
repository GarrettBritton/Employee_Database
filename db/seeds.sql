INSERT INTO department (name)
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
VALUES  (1, 'Rick', 'Hall', 2),
        (2, 'Jill', 'Jacobs', NULL),
        (3, 'Jimmy', 'John', NULL),
        (4, 'Philip', 'Lawyer', NULL),
        (5, 'Katie', 'Tiller', 5),
        (6, 'Dan', 'Swell', 5),
        (7, 'Jeff', 'Jeric', 5),
        (8, 'Holly', 'Matt', NULL);        