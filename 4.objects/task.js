function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student("Oleg", "male", 19);
let student2 = new Student("Anna", "female", 20);
let student3 = new Student("John", "male", 21);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks) {
    this.marks.push(...marks);
  } else {
    console.log("Студент отчислен");
  }
}

Student.prototype.getAverage = function () {
  if(Array.isArray(this.marks) && this.marks.length > 0) {
    let sum = this.marks.reduce(((acc, mark) => acc + mark), 0);
    let averageOfMarks = sum / this.marks.length;
    return averageOfMarks;
  } else {
    return 0;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject; 
  this.marks = undefined;
  this.excluded = reason;
}
