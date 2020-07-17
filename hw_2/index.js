let N,
    M;

N = +(prompt("Введіть число №1:"));
while (isNaN(N)) {
    N = +(prompt("Ввести потрібно лише ціле число:"));
}

M = +(prompt("Введіть число №2:"));
while (isNaN(M)) {
    M = +(prompt("Ввести потрібно лише ціле число:"));
}

const missEven = confirm("Пропускати парні числа?");
let total = 0;

console.log(
`Число #1: ${N};
Число #2: ${M};
Пропускати парні числа?: ${missEven}`);


const max = Math.max(M,N);
const min = Math.min(M,N);
console.log(max,min);

    for(let i = min; i <=max; i++) {
        if(missEven && i%2==0) {
            continue;
        }
        total+=i;
    }

console.log(`Сумма: ${total}`);









