INSERT INTO department (name) VALUES
('Engineering'),
('Sales'),
('Marketing'),
('Finance'),
('Human Resources');

INSERT INTO role (title, salary, department_id) VALUES
('Software Engineer', 60000, 1),
('Sales Representative', 50000, 2),
('Marketing Specialist', 45000, 3),
('Financial Analyst', 55000, 4),
('HR Manager', 70000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Michael', 'Johnson', 3, 1),
('Emily', 'Davis', 4, 3),
('David', 'Wilson', 5, 4);
