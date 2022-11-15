// // Створити масив, довжину та елементи якого задає користувач.
// // Відсортувати масив за зростанням.
// // Видалити елементи з масиву з 2 по 4 (включно!).

// // У міру змін виводити вміст масиву на сторінку.


newArr = [];
do {
    newArr.length = parseInt(prompt(`Укажите длинну массива. Значение может быть от 2 до 10`))
    if (newArr.length === null) {
        alert("Попробуй еще раз!");
    }
    else if (isNaN(+newArr.length)) {
        alert("Попробуй снова!");
    }

} while (newArr.length >= 10 || newArr.length <= 2)
console.log(newArr.length);

for (i = 0; i < newArr.length; i++)
    newArr[i] = parseInt(prompt(`Введите элементы массива.`));
console.log(newArr);

//сортировка по возрастанию методом пузырьком

do {
    flag = false;
    for (let i = 0; i < newArr.length - 1; i += 1) {
        if (newArr[i] > newArr[i + 1]) {
             swap = newArr[i];
            newArr[i] = newArr[i + 1];
            newArr[i + 1] = swap;
            flag = true;
        }
    }
} while (flag);
console.log(newArr);

//удаление элементов из массива со 2 по 4 включительно
newArr.splice(1, 3);
console.log(newArr);


