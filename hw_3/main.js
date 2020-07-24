// 1.Функція, яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
const getMaxDigit = function (number) {
    let numbers = number.toString().split("");
    return (Math.max(...numbers));
}
console.log(getMaxDigit(395));



// 2. Функція, яка визначає ступінь числа.
const getPow = function (a,b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log(getPow(85,3));



// 3. Функція, яка форматує ім'я, роблячи першу букву великою.
const formatName = function (name) { 
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(formatName("Avrelij"));



// 4. Функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). 
const salaryAfterTax = function (salary) {
    let tax_1 = 18;
    let tax_2 = 1.5;
    return salary - salary*((tax_1 + tax_2)/100);
}
console.log(salaryAfterTax(1000));



// 5. Функція, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5
const getRandomNumber = function (min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}
console.log(getRandomNumber(2,4));



// 6. Функція, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
const countLetter = function (letter, word) {
    let result = 0;
    for ( let i = 0; i < word.length; i++) {
        word = word.toLowerCase();
        if (word[i] === letter) result++;
    }
    return result;
}
console.log(countLetter("а", "Асталавіста"));


// 7. Функція, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
//    Інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.
const convertCurrency = function (number) {
    let result = "";
    number = number.toLowerCase();
    let positionChar = number.indexOf("uah");
    let newNumber = number.slice(0,positionChar);

    if (number.includes("$")) {
        result = (newNumber * 25) + "uah";
    } else if (number.includes("uah")) {
        result = (newNumber / 25) + "$";
    } else if (!(number.includes("$"))&& !(number.includes("uah"))) {
        console.log('Введіть дані у форматі "сума UAH" або "сума $"');
        result = 0;
    }
    return result
}
console.log(convertCurrency("2500UAH"));




// 8. Функція генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
const getRandomPassword = function (length = 8) {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += Math.floor(Math.random()*10);
    }
    return password
}
console.log(getRandomPassword(4));




// 9.Функція, яка видаляє всі букви з речення. 
const deleteLetters = function (letter, word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            newWord += "";
        } else newWord += word[i];
    }
    return newWord;
}
console.log(deleteLetters('a', "blablabla"));



// 10. Функція, яка перевіряє, чи є слово паліндромом
const isPalyndrom = function (phrase) {
    phrase = phrase.toLowerCase().replace(/\s/g, '');
    let checkPhrase = phrase.split("").reverse().join("");
    if (phrase === checkPhrase) {
        return "Це паліндром"
    }
    return "Це не паліндром"
}
console.log(isPalyndrom('Кит на морі романтик'));



// 11. Функція, яка видалить з речення букви, які зустрічаються більше 1 разу.
const deleteDuplicateLetter = function (word) {
    word = word.toLowerCase();
    let result = "";

    for ( let i = 0; i < word.length; i++ ) {
        let counter = 0;
        for (let j = 0; j < word.length; j++ ) {
            if (word[j] === word[i]) counter ++;
        }
        if (counter === 1) result += word[i];
    }
    return result;
}          

console.log(deleteDuplicateLetter('Бісквіт був дуже ніжним'));




document.writeln(`
 1. Функція, яка отримує будь-яке число та виводить найбільшу цифру в цьому числі: </br>
    <b> getMaxDigit(385) => ${getMaxDigit(385)}; </b> </br>
    </br>
 2. Функція, яка визначає ступінь числа: </br>
    <b> getPow(85,3) => ${getPow(85,3)}; </b> </br>
    </br>
 3. Функція, яка форматує ім'я, роблячи першу букву великою: </br>
    <b> formatName("Avrelij") => ${formatName("Avrelij")}; </b> </br>
    </br>
 4. Функція, яка вираховує суму, що залишається після оплати податку від зарабітньої плати: </br>
     <b> salaryAfterTax(1000) => ${salaryAfterTax(1000)}; </b> </br>
    </br>
    5. Функція, яка повертає випадкове ціле число в діапазоні від N до M: </br>
    <b> getRandomNumber(2,4) => ${getRandomNumber(2,4)}; </b> </br>
    </br>
    6. Функція, яка рахує скільки разів певна буква повторюється в слові: </br>
    <b> countLetter("а", "Асталавіста") => ${countLetter("а", "Асталавіста")}; </b> </br>
    </br>
 7. Функція, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку: </br>
    <b> convertCurrency("2500UAH") => ${convertCurrency("2500UAH")}; </b> </br>
    </br>
 8. Функція генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам: </br>
    <b> getRandomPassword(4) => ${getRandomPassword(4)}; </b> </br>
    </br>
 9. Функція, яка видаляє всі букви з речення: </br>
    <b> deleteLetters('a', "blablabla") => ${deleteLetters('a', "blablabla")}; </b> </br>
    </br>
 10. Функція, яка перевіряє, чи є слово паліндромом: </br>
    <b> isPalyndrom('Кит на морі романтик') => ${isPalyndrom('Кит на морі романтик')}; </b> </br>
    </br>
 11. Функція, яка видалить з речення букви, які зустрічаються більше 1 разу: </br>
    <b> deleteDuplicateLetter('Бісквіт був дуже ніжним') => ${deleteDuplicateLetter('Бісквіт був дуже ніжним')}; </b> 
`)