
// Створіть функцію, яка повертає проміс getRandomChinese(length). Функція працює таким чином:
// Запускається цикл(підказка: можна використовувати while) length раз, кожен прохід циклу дивимось на останні 5 цифр результату виклику методу Date.now() Наприклад отримали const sign = 16086;.
// Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms
// Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з китайськими ієрогліфами. Час роботи проміса має складати length * 50ms.
// (Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms

function prom() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let char = Date.now().toString().slice(-5);
            resolve (String.fromCharCode(char)); 
        },50)
    })
}

async function getRandomChinese(length) {
    i = 0;
    let prediction = "";

    while (i < length) {
        prediction += await prom();
        i++;
    }

    document.getElementById('prediction').textContent = `Передбачення: ${prediction}`;
    const time = 50 * length;
    document.querySelector('h3').textContent = time + 'ms';
    return prediction
}

getRandomChinese(4)

