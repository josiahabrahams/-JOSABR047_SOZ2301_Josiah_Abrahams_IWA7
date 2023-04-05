const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const leoPositive =  parseFloat(leoBalance *-1)
const sarahPositive = parseFloat(sarahBalance*-1)
const owed = leoPositive + sarahPositive
const amount = owed.toLocaleString("fi-FI");
const leo = `${` ${leoName} ${leoSurname} `} Owed R(${leoPositive}) `
const sarah = `${`${sarahName}${sarahSurname}`}(Owed R${sarahPositive})`
const total = "Total amount owed: "
const result =` ${leo}  
 ${sarah}  
${divider}  

${total }${ amount }  

${divider}`

console.log(result)