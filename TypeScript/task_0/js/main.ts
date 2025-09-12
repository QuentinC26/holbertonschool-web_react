interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: "David",
  lastName: "test",
  age: 18,
  location: "Chicago"
}

const student2: Student = {
  firstName: "Patrick",
  lastName: "test",
  age: 18,
  location: "Chicago"
}

const studentsList = [student1, student2];

const theArray = [ [student1.firstName, student1.location], 
  [student2.firstName, student2.location]]

let table = document.createElement('table');
for (let row of studentsList) {
  let newRow = table.insertRow();
  for (let key in row) {
    let newCell = newRow.insertCell();
    newCell.textContent = row[key];
  }
}
document.body.appendChild(table);

console.log(theArray)
