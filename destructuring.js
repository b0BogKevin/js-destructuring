//1. kérdés: A tömb sorrendje szerint kell megadni a változókat, a nevük nem számít
console.log("1.")
let car = ['Ford', 'Mustang', 2022, 'blue'];
let [brand,model,year,color] = car;
console.log(brand)
console.log(model)
console.log(year)
console.log(color)

//2. kérdés: Az objektum változói nevét kell használni, a sorrend nem számít
console.log("\n2.")

let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
    };

let{bookTitle,bookAuthor,publicationYear,language} = book;
console.log(bookTitle)
console.log(bookAuthor)
console.log(publicationYear)
console.log(language)

//3.
console.log("\n3.")

let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
    };

function printStudentInfo({name,age,grade,subjects}) {
    let ki = `Név:${name}, életkor:${age}, jegy:${grade}, Tantárgyak: `
subjects.forEach(element => {
    ki += element + ","
});
console.log(ki)
}

printStudentInfo(student)