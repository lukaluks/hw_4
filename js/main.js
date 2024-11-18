// const string1 = prompt("Введіть поле 1");        //В цьому прикладі я зробив prompt() який просить ввести поле
// const string2 = prompt("Введіть поле 2");        // Якщо всі 2 поля введено то через if в консоль виводиться значення
//                                                 // "Всі поля заповнені", якщо хоча б 1 поле не введено, то через else
// if (string1 && string2) {                       // в консоль виведеться значення "Не всі поля заповнені"
//     console.log("Всі поля заповнені");
// } else {
//     console.log("Не всі поля заповнені");
// }




// const number1 = parseInt(prompt("Введіть значення"));
// const number2 = parseInt(prompt("Введіть значення"));

// if (number1 + number2 > 10) {
//     console.log("Сума більша за 10");
// } else if (number1 + number2 < 10) {
//     console.log("Сума менша або дорівнює 10");
// }


// const stringNum1 = prompt("Введіть речення");

// if (stringNum1.includes("JavaScript")) {
//     console.log("Текст містить слово JavaScript");
// } else {
//     console.log("Текст не містить слово JavaScript");
// }


// let number = parseInt(prompt("Введіть число"));

// if (number > 10 && number < 20) {
//     console.log("Число входить в діапазон від 10 до 20")
// } else {
//     console.log("Число не входить в діапазон від 10 до 20")
// }

let email = prompt("Введіть email");
let names = prompt("Введіть ім'я");
let password = prompt("Введіть пароль");

if (names.length < 3) {
    console.log("Ім'я повинно містити не менше 3 символів");
}

if (!email.includes("@") || !email.includes(".")) {
    console.log("Email повинен містити символ @ та крапку після нього");
}

if (password.length < 6) {
    console.log("Пароль повинен містити не менше 6 символів");
}