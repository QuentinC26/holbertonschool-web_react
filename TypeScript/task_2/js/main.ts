// Task 5

interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string
}

interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workTeacherTasks(): string
}

class Director implements DirectorInterface {
  workFromHome() {
    return 'Working from home'
  }

  getCoffeeBreak() {
    return 'Getting a coffee break'
  }

  workDirectorTasks() {
    return 'Getting to work'
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return 'Cannot work from home'
  }

  getCoffeeBreak() {
    return 'Cannot have a break'
  }

  workTeacherTasks() {
    return 'Getting to work'
  }
}

function createEmployee(salary: number | string) {
  if (typeof(salary) === 'number') {
    if (salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  } else if (typeof(salary) === 'string') {
    if (Number(salary) < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// task 6

function isDirector(employee) {
  if (employee instanceof Director) {
    return true
  } else {
    return false
  }
}

function executeWork(employee) {
    if (employee instanceof Director) {
      return employee.workDirectorTasks()
  } else if (employee instanceof Teacher){
      return employee.workTeacherTasks()
  }
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
