function Student(name) {
  this.name = name;
  this.askedQuestionNumber = 0;
}

Student.prototype.askQuestion = () => {
  console.log("???");
  this.askedQuestionNumber++;
};

const stu1 = new Student("Adam");
stu1.askQuestion();
console.log(stu1);

const stu2 = new Student("Lilith");
console.log(stu2);

function StudentWithWork(name) {
  Student.call(this, name);
  this.workDone = 0;
}
Object.setPrototypeOf(StudentWithWork.prototype, Student.prototype);

StudentWithWork.prototype.doWork = () => {
  console.log("Working...");
  this.workDone++;
};

const stu3 = new StudentWithWork("Ramiel");
stu3.askQuestion();
console.log(stu3);

stu3.doWork();
console.log(stu3);
