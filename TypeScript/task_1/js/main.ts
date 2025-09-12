//task 1

interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [key: string]: any; 
};

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3)

//task 2

interface Directors extends Teacher {
  numberOfReports: number
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

//task 3

interface printTeacherFunction {
  firstName: string,
  lastName: string
}

const person1: printTeacherFunction = {
  firstName: 'John',
  lastName: 'Doe'
}

function printTeacher(firstName: string, lastName: string) {
  return firstName[0] + '.' + ' ' + lastName
}

console.log(printTeacher("John", "Doe"))

//task4 :

interface constructorMethod {
  firstName: string,
  lastName: string
}

interface StudentClass {
  firstName: string,
  lastName: string,
  workOnHomework(): string,
  displayName(): string
}

class StudentClass {
  public firstName: string;
  public lastName: string; 

  public constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working'
  }

  displayName() {
    return this.firstName
  }
}
