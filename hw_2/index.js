let number_1,
    number_2;

number_1 = +(prompt("Введіть число №1:"));
while (!number_1 || isNaN(number_1)) {
    number_1 = +(prompt("Ввести потрібно лише ціле число:"));
}

number_2 = +(prompt("Введіть число №2:"));
while (!number_2 || isNaN(number_2)) {
    number_2 = +(prompt("Ввести потрібно лише ціле число:"));
}

const missEven = confirm("Пропускати парні числа?");
let total = 0;

console.log(
`Число #1: ${number_1};
Число #2: ${number_2};
Пропускати парні числа?: ${missEven}`);


const max = Math.max(number_1,number_2);
const min = Math.min(number_1,number_2);

    for(let i = min; i <=max; i++) {
        if(missEven && i%2==0) {
            continue;
        }
        total+=i;
    }

console.log(`Сумма: ${total}`);









