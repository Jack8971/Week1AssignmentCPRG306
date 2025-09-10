"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];


// broken test data for exercise 6
const brokenUsers = [
  { id: 1, age: 20 }, // missing name
  null,
  { id: 2, name: 123, age: 22 },           // name wrong type
  { id: 3, name: "Gary", age: 25 }, // valid
];
// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
  const list1 = document.getElementById("names-list");
  users.forEach(u => {
    const li = document.createElement("li");
    li.textContent = u.name;
    list1.appendChild(li);
  });
// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
const list2 = document.getElementById("young-characters-list");
  users.filter(u => u.age < 40).forEach(u => {
    const li = document.createElement("li");
    li.textContent = `${u.name} (${u.age})`;
    list2.appendChild(li);
  });
// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
 const list3 = document.getElementById("function-list");
  function renderNames(arr, targetUl) {
    arr.forEach(u => {
      const li = document.createElement("li");
      li.textContent = u.name;
      targetUl.appendChild(li);
    });
  }
  renderNames(users, list3);
// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
 const list4 = document.getElementById("age-filter-list");
  function filterByAge(arr, threshold, targetUl) {
    arr.filter(u => u.age < threshold).forEach(u => {
      const li = document.createElement("li");
      li.textContent = `${u.name} (${u.age})`;
      targetUl.appendChild(li);
    });
  }
  filterByAge(users, 35, list4);
// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
  const list5 = document.getElementById("error-handling-list");
  const errorBox5 = document.getElementById("error-messages");
  users.forEach(u => {
    try {
      if (!u.name || typeof u.name !== "string") {
        throw new Error("Missing or invalid name property");
      }
      const li = document.createElement("li");
      li.textContent = u.name;
      list5.appendChild(li);
    } catch (err) {
      const div = document.createElement("div");
      div.className = "error-message";
      div.textContent = err.message;
      errorBox5.appendChild(div);
    }
  });
// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"
 const list6 = document.getElementById("broken-array-list");
  const errorBox6 = document.getElementById("broken-array-errors");
  brokenUsers.forEach(u => {
    try {
      if (!u || typeof u.name !== "string") {
        throw new Error("Missing or invalid name property");
      }
      const li = document.createElement("li");
      li.textContent = u.name;
      list6.appendChild(li);
    } catch (err) {
      const div = document.createElement("div");
      div.className = "error-message";
      div.textContent = err.message;
      errorBox6.appendChild(div);
    }
  });


