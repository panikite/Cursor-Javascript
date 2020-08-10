class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.allMarks = [5, 4, 4, 5];
        this.isDismissed;
    }

   getInfo() {
        return `Студент ${this.course}-го курсу учбового закладу - ${this.university}, ${this.fullName}`;
    }

    get marks() {
        if (this.isDismissed) {
            return null
        } else {
            return this.allMarks;
        }
    }
    set marks(mark) {
        if (this.isDismissed) {
            this.allMarks.push(mark);
        } else {
            return null
        }
    }

    getAverageMark() {
        return this.allMarks.reduce((acc,item) => acc + item) / this.allMarks.length;
    }

    dismiss() {
        this.isDismissed = true;
    }
    recover() {
        this.isDismissed = false;
    }

}



const stud1 = new Student('Політехніка', '1','Макаренко');




