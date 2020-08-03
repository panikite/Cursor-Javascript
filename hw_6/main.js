
const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

// 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл


const getSubjects = function (student) {
    const subjectList = Object.keys(student.subjects)
    const result = subjectList.map(i => i.charAt(0).toUpperCase() + i.substr(1).replace(/_/gi," "))
    return result
}

console.log(`Список предметів для студента: ${getSubjects(students[0])}`, getSubjects(students[0]))





// 2.Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)

const getAverageMark = function (student) {
    const allMarksForStudent = Object.values(student.subjects).flat(1)
    const sum = allMarksForStudent.reduce((total,i) => total +=i)
    const marksNum = allMarksForStudent.reduce(total => total +=1, 0)
    return (sum/marksNum).toFixed(2)
}

console.log(`Середня оцінка по усім предметам для студента: ${getAverageMark(students[0])}`)




// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.

const getStudentInfo = function (student) {
    const studentInfo = {}
    studentInfo.course = student.course;
    studentInfo.name = student.name
    studentInfo.averageMark = getAverageMark(student)
    return studentInfo
}

console.log(`Інформація про студента getStudentInfo(students[0] : ${JSON.stringify(getStudentInfo(students[0]))}`)





// 4.Створіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

const getStudentsNames = function (students) {
const sortedNames = []
students.forEach( i => sortedNames.push(i.name))

return sortedNames.sort()
}


console.log(`Імена студентів у алфавітному порядку: ${getStudentsNames(students)}`, getStudentsNames(students))



// 5.Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

const getBestStudent = function(students) {
    let studentList = {};
    let bestStudentInfo = {};
    let maxNum = 0;
    for (i of students) {
        studentList[i.name] = getAverageMark(i);
    }

    Object.entries(studentList).forEach(([key, value]) => {
        value = +value;
        if (value > maxNum) {
            maxNum = value;
            bestStudentInfo.name = key;
            bestStudentInfo.averageMark = value;
            return bestStudentInfo;
        } else return bestStudentInfo
    });

    return bestStudentInfo.name
}

console.log(`Ім'я кращого студента зі списку по показнику середньої оцінки: ${getBestStudent(students)}`)



// 6.Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

const calculateWordLetters = function(word) {
    const result = {};
    let counter = 1;
    const a = word.split("").sort().reverse();

    for (let i = 0; i < a.length; i++) {
        if(a[i] == a[i+1]) counter ++;
        else {
            result[a[i]] = counter;
            counter = 1;
        }
    }
    return result
}

console.log(`Кількість букв та їх повторень у слові calculateWordLetters("тест") : ${JSON.stringify(calculateWordLetters("тест"))}`)




