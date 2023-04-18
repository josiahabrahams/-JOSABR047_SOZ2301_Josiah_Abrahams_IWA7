const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const leoPositive =  parseFloat(-leoBalance)// change string into positive number
const sarahPositive = parseFloat(-sarahBalance)// change string into positive number
const owed = leoPositive + sarahPositive
const amount = owed.toLocaleString("fi-FI"); //added a space seperator
const leo = `${` ${leoName} ${leoSurname} `} (Owed: R${leoPositive.toFixed(2)}) `//fixed interpolation and var name syntax and made leoPositive have 2 decimal places
const sarah = `${`${sarahName}${sarahSurname}`}(Owed: R${sarahPositive.toFixed(2)})`//fixed interpolation and var name syntax and made sarahPositive have 2 decimal places
const total = "Total amount owed: "
const result =/**back ticked so i could customize console.log presentation*/` ${leo} 
 ${sarah}  
${divider}  

${total }${ amount }  

${divider}`

console.log(result)