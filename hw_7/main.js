const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes (salary) {
    tax = this.tax;
    return salary*tax.toFixed(2)
}

console.log(`Податки у вибраній країні  getMyTaxes.call(ukraine, 1789) : `, getMyTaxes.call(ukraine, 1789))



// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes () {
    return this.tax*this.middleSalary
}

console.log(`Скільки у середньому податків платять IT-спеціалісти у країні getMiddleTaxes.call(latvia) : `, getMiddleTaxes.call(latvia))


// 3.Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes () {
    return this.tax * this.middleSalary * this.vacancies
}

console.log(`Скільки всього податків платять IT-спеціалісти у кожній країні getTotalTaxes.call(latvia) : `, getTotalTaxes.call(latvia))



// 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;

function getMySalary() {
    let result = {};
    const min = 1500;
    const max = 2000;
    
    let timerId = setInterval(() => {
        let salary = Math.floor(min + (max - min) * Math.random());
        const taxes = (salary * this.tax).toFixed(2);
        const profit = (salary - taxes).toFixed(2);
        result.salary = salary;
        result.taxes = taxes;
        result.profit = profit;
        console.log(result)
    }, 10000);

    setTimeout(() => { clearInterval(timerId) },100000);
}

console.log(getMySalary(ukraine))

















