class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this._allMarks = [];
        this.isDismissed;
    }

   getInfo() {
        return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
    }

    get marks() {
        return (this.isDismissed ? null : this._allMarks);
    }
    
    set marks(mark) {
        return (this.isDismissed ? null : this._allMarks.push(mark));
    }

    getAverageMark() {
        return (this._allMarks.reduce((acc,item) => acc + item) / this._allMarks.length).toFixed(2);
    }

    dismiss() {
        this.isDismissed = true;
        console.log(`Студента ${this.fullName} виключено`);
    }
    recover() {
        this.isDismissed = false;
        console.log(`Студента ${this.fullName} поновлено`);
    }
}


const stud1 = new Student('Вищої Школи Психотерапії м.Одеса', '1','Остап Бендер');
const markArr1 = [5, 4, 4, 5];
markArr1.forEach(mark => stud1.marks = mark);




console.log(stud1.getInfo())
console.log(`Оцінки студента: ${stud1.marks}`)
stud1.marks = 3;
stud1.marks = 5;
console.log(`Додано нові оцінки: ${stud1.marks}`)
console.log(`Середня оцінка студента: ${stud1.getAverageMark()}`)
stud1.dismiss();
console.log(`Оцінки виключеного студента: ${stud1.marks}`);
stud1.recover();
console.log(`Оцінки поновленого студента: ${stud1.marks}`);





// Advanced

class BudgetStudent extends Student {
    constructor (university, course, fullName) {
        super(university, course, fullName);
        const timer = setInterval(this.getScholarship,30000);
    }

    getScholarship() {
        if (this.isDismissed && this.getAverageMark() <= 4) {
            console.log("Ви не отримуєте стипендії");
        } else {
            console.log("Ви отримали 1400 грн. стипендії");
        }
    }
}


const studBudget = new BudgetStudent('Вищої Школи Психотерапії м.Одеса', '5','Остап Бендер 2')
const markArr2 = [5, 4, 4, 5];
markArr2.forEach(mark => studBudget.marks = mark);





