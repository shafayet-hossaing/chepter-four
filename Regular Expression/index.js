// Regular Expression
// const regText = "I'm Form myCountry"
// const regExpression = /myCountry/
// const updatedText = regText.replace(regExpression, 'Bangladesh')
// console.log(updatedText);
// const matched = regText.match(regExpression)
// console.log(matched);





// Modify (i)
// const text = 'Hello, this is Mark'
// console.log(text.match(/This/i)); // (i) It's used not to be case sensitive



// Modify (g)
// const text = 'This is my book'
// console.log(text.match(/Is/gi)); // (g) It's used to search globally and will return you an array with all the matching thins





// Brackets [] 
// const text = 'hello THere!'
// console.log(text.match(/[hLr]/gi)); // [] Means, every character doesn't need to be matched




// Brackets [^]
// const text = 'hello There'
// console.log(text.match(/[^hel]/g)); // [^] Means except the things into brackets all (if global used) will be showing





// Brackets [start-end]
const text = 'Hello there'
console.log(text.match(/[a-z]/gi)); // [a-z] Means form A to Z everything will be shown