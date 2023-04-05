const nickName= "Timmy";
const firstName = "Timothy";
const hello = nickName &&  `Good Morning, ${nickName}!` || firstName && `Good Morning, ${firstName}!` || "Good Morning!"
console.log(hello)