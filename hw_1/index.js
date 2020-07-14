let onion = 15.678;
let nutmeg = 123.965;
let cheese = 90.2345;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
let maxPrice = Math.max(onion,nutmeg,cheese);
console.log(maxPrice);

// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
let minPrice = Math.min(onion,nutmeg,cheese);
console.log(minPrice);

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let total = onion + nutmeg + cheese;
console.log(total);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
let totalInteger = Math.floor(onion) + Math.floor(nutmeg) + Math.floor(cheese);
console.log(totalInteger);
// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
console.log(Math.round(totalInteger/100)*100);

// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let isEven = ((totalInteger%2) == 0);
console.log(isEven);

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let remainder = 500 - total;
console.log(remainder);

// Виведіть середнє значення цін, округлене до другого знаку після коми
console.log((total/3).toFixed(2));



// Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
let price,
    toPay,
    profit,
    discount;

price = 100;   // change manually price

discount = Math.round(Math.random() * 100) + 1;
toPay = price - (price*(discount/100)).toFixed(2);
profit = price/2 - (price-toPay);

console.log(discount);
console.log(toPay);
console.log(profit);


console.log(`Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${total}`)