const onion = 15.678;
const nutmeg = 123.965;
const cheese = 90.2345;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxPrice = Math.max(onion,nutmeg,cheese);
console.log(maxPrice);

// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minPrice = Math.min(onion,nutmeg,cheese);
console.log(minPrice);

// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const total = onion + nutmeg + cheese;
console.log(total);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
const totalInteger = Math.floor(onion) + Math.floor(nutmeg) + Math.floor(cheese);
console.log(totalInteger);
// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
console.log(Math.round(totalInteger/100)*100);

// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const isEven = ((totalInteger%2) == 0);
console.log(isEven);

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const clientPays = 500;
const remainder = clientPays - total;
console.log(remainder);

// Виведіть середнє значення цін, округлене до другого знаку після коми
const averagePrice = (total/3).toFixed(2);
console.log(averagePrice);



// Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?

let price;
price = 100;   // change manually price

const discount = Math.round(Math.random() * 100) + 1;
const toPay = price - (price*(discount/100)).toFixed(2);
const profit = price/2 - (price-toPay);

console.log(discount);
console.log(toPay);
console.log(profit);


console.log(`Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Вартість всіх товарів: ${total}
Заокруглена в меншу сторону вартість товарів: ${totalInteger}
Заокруглена до сотень вартість товарів: ${Math.round(totalInteger/100)*100}
Чи є сума парна?: ${isEven}
Решта від 500 грн: ${remainder.toFixed(2)}
Середнє значення ціни: ${averagePrice}
Задача з дисконотом:
    Якщо ціна: ${price} та знижка: ${discount}, 
    то сума до оплати: ${toPay} 
       чистий прибуток: ${profit} 
`
)