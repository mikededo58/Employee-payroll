// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// creating function to add key values of (fistname, lastname and slarey into EmployeesArray)
// defined array
let employeesArray = [];
const collectEmployees = function () {
  // used while loop with confirm to being up prompt

  while (confirm("Add new employee")) {
    let employees = {}; // created onject to push to array
    employees.firstName = prompt("Enter Employees First Name"); //created key with prompt
    employees.lastName = prompt("Enter Employees Last Name");
    const salary = parseInt(prompt("Enter Employees Salary"));
    employees.salary = isNaN(salary) ? 0 : salary;
    employeesArray.push(employees);
  }

  return employeesArray;
};
console.log(employeesArray);
//collectEmployees();

// creating funtion for average salart
const displayAverageSalary = function () {
  let count = 0; // definingg count variable
  let sumSalary = 0; // defining salary varables
  for (let key in employeesArray) {
    // using a for loop to find all salarys
    if (employeesArray.hasOwnProperty(key)) {
      // using hasownproperty to mkae sure a salary exists
      if (employeesArray[key].hasOwnProperty("salary")) {
        // pulling out all obj that have a salary key
        sumSalary += employeesArray[key].salary; // adding all salaries
        count += 1; // adding to account for obj 0
      }
    }
  }
  console.log(
    `The Average salary of the ${count} employees is ${sumSalary / count} `
  ); // dividing total salary by number of objs with a salary
};

// Select a random employee
const getRandomEmployee = function () {
  const randomEmployee =
    employeesArray[Math.floor(Math.random() * employeesArray.length)]; // random employee slected and consoled
  console.log(
    `Congratualtions to ${randomEmployee.firstName} ${randomEmployee.lastName} our random drawing winner!`
  );
};
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // -A;
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const employee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = employee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = employee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = employee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
