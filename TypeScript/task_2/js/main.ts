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

class Director {
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

class Teacher {
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
      return 'Teacher'
    } else {
      return 'Director'
    }
  } else if (typeof(salary) === 'string') {
    if (parseInt(salary)) {
      console.log(salary)
    } else {
      return 'Director'
    }
  }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
