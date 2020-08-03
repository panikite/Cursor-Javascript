
// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

const getRandomArray = function (length, min, max) {
    let randomArr = [];
        for (i = 0; i < length; i++) randomArr.push(Math.floor(Math.random()*(max-min) + min))
    return randomArr
}
    
console.log(getRandomArray(15, 1, 100))
    
    
    
    
// 2.Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

const getModa = function (...numbers) {
    let numbersArr = [];
    let arrIndex = 0;
    let count = 1;
    let max = 0;
    const sortedArr = numbers.filter(item => Number.isInteger(item)? item : false).sort((a,b) => a-b)
    
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === sortedArr[i + 1]) count ++;
        else {
            numbersArr[arrIndex] = []
            numbersArr[arrIndex].push(sortedArr[i], count)
            arrIndex += 1;
            count = 1;
        }  
    }
    
    for (let i = 0; i < numbersArr.length; i++) numbersArr[i][1] > max ? max = numbersArr[i][1] : 0;
    const finalMode = numbersArr.filter((item) => item[1] === max ? item[0] : 0)

    if(numbersArr.length === finalMode.length) return "There is no mode"
    else  return finalMode.map(item => item[0])
}

console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
    
    

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

const getAverage = function (...numbers) {
    arr = numbers.reduce((acc,item) => {
    if (Number.isInteger(item)) return acc += item;  
    }, 0)
    return arr/numbers.length;
}

console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));




// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

const getMedian = function (...numbers) {
    let medianIndex, median, medianIndex1, medianIndex2;
    numbers.sort((a, b) => a - b)
    const filteredArr = numbers.filter((item) => Number.isInteger(item)) 
 
    if (filteredArr.length % 2 === 1) {
       medianIndex = (filteredArr.length - 1)/2;
       median = filteredArr[medianIndex];
       return median
    } else {
       medianIndex1 = filteredArr.length / 2;
       medianIndex2 = filteredArr.length / 2 - 1;
       median = (filteredArr[medianIndex1] + filteredArr[medianIndex2]) / 2; 
       return median
    }
 }
 
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
 


// Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

const filterEvenNumbers = function (...numbers) {
    return numbers.filter((item) => item % 2);
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));



// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

const countPositiveNumbers = function (...numbers) {
    const positive = numbers.reduce((acc, item) => item > 0 ? acc+=1 : acc)
    return positive
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));



// 7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

const getDividedByFive = function (...numbers) {
    return numbers.filter((item) => !(item % 5))
}
  
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));



// 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

const replaceBadWords = function (string, badWordsList) {
    const filteredString = badWordsList.reduce((acc,item) => {
        return acc.split(item).join("****");
    },string)
    return filteredString
}

let badWords = ["shit", "fuck"];
console.log( replaceBadWords("Are you fucking kidding?", badWords));




// 10. Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами. Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"] Приклад: generateCombinations("ol") -> ["ol", "lo"]


function generateCombinations(word) {
    let charSwap,
        charsRemaining,
        remainingPerms;
    let results = [];
    
    if (word.length >= 10) return "The word shoud be less then 10 characters"
    else {
        if (word.length == 1) return word;
        
        for (let i = 0; i < word.length; i++) {
            charSwap = word[i];
            charsRemaining = word.substring(0, i) + word.substring(i + 1);
            remainingPerms = generateCombinations(charsRemaining)
            
            for (let j = 0; j < remainingPerms.length; j++) {
                results.push(charSwap + remainingPerms[j]);
            }
        }
        return results;
    }
}

console.log(generateCombinations("man"))