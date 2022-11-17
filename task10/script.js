// Дано:
// Три товара с категории vegetables:
// cabbage = 8;
// avocado = 30;
// tomato = 10;

// Три товара с категории fruits:
// grapes = 20;
// raspberry = 25;
// coconut = 50;

// Задача: в зависимости от выбранного пользователем периода (winter или summer), категории (vegetables или fruits), 
//товара с выбранной категории (vegetables: cabbage, avocado, tomato или fruits: grapes, raspberry, coconut), 
//и количества единиц выбранного товара – посчитать финальную стоимость покупки и вывести всю информацию о выбранном товаре в html.

// Порядок действий:

// 1. Запрашиваем у пользователя период, в которой он совершает покупку: winter или summer.
// Если пользователь вводит winter, то финальное значение стоимости покупки будет умножаться на 2
// Если пользователь вводит summer, то финальное значение стоимости покупки будет умножаться на 0.8
// Важно: 
// Продолжаем запрашивать у пользователя название периода до тех пор, пока не будет введено слово ‘winter’ либо ‘summer’.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова. 
// 2. Запрашиваем у пользователя категорию, с которой он будет далeе выбирать товар: vegetables или fruits.
// Важно: 
// Продолжаем запрашивать у пользователя название категории до тех пор, пока не будет введено слово ‘vegetables’ либо ‘fruits’.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова. 
// 3. Запрашиваем у пользователя товар в зависимости от выбранной ранее категории.
// Для категории vegetables пользователь может ввести название товара cabbage или avocado или tomato.
// Для категории fruits пользователь может ввести название товара grapes или raspberry или coconut.
// Важно: 
// Продолжаем запрашивать у пользователя название товара до тех пор, пока не будет введено название одного из трех допустимых товаров.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до/внутри слова.
// 4. Запрашиваем у пользователя количество единиц ранее выбранного товара.
// Важно:
// Введенное значение должно быть числом и не меньше 1.
// 5. Выводим в html информацию о выбранном товаре с финальной стоимостью покупки. Вариант вывода:


vegetables = ['cabbage', 'avocado', 'tomato'];
fruits = ['grapes', 'raspberry', 'coconut'];
priceVegetables = [8, 30, 10];
priceFruits = [20, 25, 50];

do {
    period = prompt("Winter or summer period?").replaceAll(" ", "").toLowerCase();
} while (period !== "winter" && period !== "summer");
//console.log(period);


if (period === "summer") {
    costFactor = 0.8;
} else {
    costFactor = 2;
};
//console.log(costFactor);

do {
    categoryOfProducts = prompt("Choose category in wich you want to buy products: vegetables or fruits.").replaceAll(" ", "").toLowerCase();
} while (categoryOfProducts !== "vegetables" && categoryOfProducts !== "fruits");
console.log(categoryOfProducts);


if (categoryOfProducts === "vegetables") {
    do {
        product = prompt("Choose product from category vegetables: cabbage, avocado, tomato");
        vegetablesProduct = vegetables.indexOf(product);
        productPrice = priceVegetables[vegetablesProduct];
    } while (product !== "cabbage" && product !== "avocado" && product !== "tomato");

} else {
    do {
        product = prompt("Choose product from category fruits: grapes, raspberry, coconut");
        fruitsProduct = fruits.indexOf(product);
        productPrice = priceFruits[fruitsProduct];
    } while (product !== "grapes" && product !== "raspberry" && product !== "coconut");

};
//console.log(product);


do {
    quantityOfGoods = parseInt(prompt(`Enter count of ${product}`).replaceAll("", " "));

} while (isNaN(quantityOfGoods) || quantityOfGoods <= 1);
console.log(quantityOfGoods);

finalSum = quantityOfGoods * productPrice * costFactor;
//console.log(finalSum);


if (categoryOfProducts === "vegetables") {
    productImg = `<img src="images/images/vegetables/${product}.svg" alt="${product}" width="100px" height="100px"></img>`;
} else {
    productImg = `<img src="images/images/fruits/${product}.svg" alt="${product}" width="100px" height="100px"></img>`;
}


document.write(`
 <div class="product" align="center">
    ${productImg}
    <p>Selected product: <b>${product}</b></p>
    <p>Count of ${product}: <b>3${quantityOfGoods}</b></p>
    <p>Selected period: <b>${period}</b></p>
    <p>Selected category: <b>${categoryOfProducts}</b></p>
    <p>Final sum: <b>${finalSum} UAH</b></p>
</div>
 `)




