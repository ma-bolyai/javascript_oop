class Student {
  constructor(name) {
    this.name = name;
    this.askedQuestionNumber = 0;
  }

  askQuestion() {
    console.log("???");
    this.askedQuestionNumber++;
  }
}

const stu1 = new Student("Adam");
stu1.askQuestion();
console.log(stu1);

class StudentWithWork extends Student {
  constructor(name) {
    super(name);
    this.workDone = 0;
  }

  doWork() {
    console.log("Working...");
    this.workDone++;
  }
}

const stu2 = new StudentWithWork("Lilith");
stu2.askQuestion();
stu2.doWork();
console.log(stu2);
