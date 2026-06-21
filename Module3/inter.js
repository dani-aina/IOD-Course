//‍​‌‍==============𝗝𝗦 𝗜𝗻𝘁𝗲𝗿𝗺𝗲𝗱𝗶𝗮𝘁𝗲 𝗟𝗮𝗯=============

//===========1
const example = 'Can this string be manipulated?'
//console.log(example.toUpperCase())

//===========2
const str = "I am typing a super long sentence so that I can test this new function that I am learning!"

function truncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max) + "..."
    }
    return str
}

//console.log(truncate("I am typing a super long sentence so that I can test this new function that I am learning!", 10))

//===========3
const animals = ['Tiger', 'Giraffe']
//console.log(animals)

//a
animals.push('Rabbit', 'Fox')
//console.log(animals)

//b
animals.unshift('Lion', 'Cheetah')
//console.log(animals)

//c
animals.sort()
//console.log(animals)

/*
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
*/

//e

//===========4
//a
/*
4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a dash.
b) Create variants of the camelCase function that use different types of for loops, and c) with and without the conditional operator.
*/

const cssProp = 'margin-left-width'

function camelCase(cssProp){
    let transformedArray = []
    let item = cssProp.split('-')
    transformedArray.push(item[0])
    console.log(item)

    for(let i = 1; i < item.length; i++){
        let upper = item[i]

        let firstLetter = upper.slice(0, 1).toUpperCase()
        let remainder = upper.slice(1)
        
        let newWord = firstLetter + remainder
        console.log(newWord)

        transformedArray.push(newWord)
    }
    let joined = transformedArray.join("")
        console.log(joined)

    return joined
}


//console.log(camelCase(cssProp))


//===========5

let twentyCents = 0.20
let tenCents = 0.10
//console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
//a
//console.log(fixedTwenty + fixedTen) <==== doesn't work because toFixed returns a string, not a number

//b
const float1 = 0.20
const float2 = 0.10

function currencyAddition(float1, float2) {
    return Number((float1 + float2).toFixed(2));
}

console.log(currencyAddition(float1, float2))

//c
