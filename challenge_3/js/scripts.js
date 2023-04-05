const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = (  parseFloat(leoBalance *-1) + parseFloat(sarahBalance*-1))
const amount ='R'+ owed.toFixed(2)
const leo = `${` ${leoName} ${leoSurname} `} Owed R( ${leoBalance}) `
const sarah = `${`${sarahName}${sarahSurname}`}(Owed R${sarahBalance})`
const total = "Total amount owed: "
const result =` ${leo}  
 ${sarah}  
${divider}  

${total }${ amount }  

${divider}`

console.log(result)