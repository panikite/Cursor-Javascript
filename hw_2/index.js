const N = parseInt(prompt("Введіть число №1:"));
const M = parseInt(prompt("Введіть число №2:"));
const missEven = confirm("Пропускати парні числа?");
let total = 0;
console.log(
`Число #1: ${N};
Число #2: ${M};
Пропускати парні числа?: ${missEven}`);

if(typeof(N)!=="NaN" && typeof(M)!=="NaN") {

        for(let i = N; i <=M; i++) {
            if(missEven && i%2==0) {
                continue;
            }
            total+=i;
        }
    }

console.log(`Сумма: ${total}`);




