const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом: 
const getPairs = function (array) {
    let pairs = [];
    let boys = [];
    let girls = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i].charAt(array[i].length - 1) == "а" && array[i] !== "Саша") {
            girls.push(array[i]);
        } else {
            boys.push(array[i]);
        }
    }

    let pairNumbers = Math.min(boys.length, girls.length);
    for (let i = 0; i < pairNumbers; i++) {
        pairs[i] = [];
        pairs[i].push(boys[i],girls[i]);
       }
    return pairs
 }

const studentPairs = getPairs(students);
console.log(studentPairs);
 



// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати:
const assignProjects = function (pairs, themes) {
    const pairsAndProjects = [];
    for (let i = 0; i < pairs.length; i++) {
        pairsAndProjects.push(pairs[i].concat(themes[i]))
    }
    return(pairsAndProjects);
}

const assignedProjects = assignProjects(getPairs(students),themes);
console.log(assignedProjects);





// 3. Зіставте оцінки(marks) зі студентом(students):
const assignMarks = function (students, marks) {
    i = 0;
    let assignedMarks = [];
    for (let i = 0; i < students.length; i++) {
        assignedMarks[i] = [];
        assignedMarks[i].push(students[i], marks[i]);
    }
    return assignedMarks
}

const assigendMarks = assignMarks(students, marks);
console.log(assigendMarks);




// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт:
const projectResults = function (studentGroups) {
    const min = 1;
    const max = 5;
    let groupResults = [];
    for (let group of studentGroups) {
        let mark = Math.floor(Math.random() * (max - min + 1)) + min;
        groupResults.push(group.concat(mark)); 
    }
    return groupResults
}
const projectInfo = assignProjects(getPairs(students),themes);
const finalResults = projectResults(projectInfo);
console.log(finalResults);


