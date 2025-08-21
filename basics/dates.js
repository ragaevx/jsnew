// Dates

let myDate = new Date()
// console.log(myDate.toString());

// // Thu Aug 14 2025 06:24:46 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toISOString());

// // 2025-08-14T06:24:46.389Z

// console.log(myDate.toJSON());

// // 2025-08-14T06:25:56.127Z

// console.log(myDate.toLocaleDateString('en-IN'));

// // 14/8/2025

// console.log(myDate.toLocaleTimeString('en-IN'));

// // 6:26:59 am

// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 7, 15)
// let myCreatedDate = new Date(2025, 7, 15, 6, 9)
// 
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());

// '${newdate.getDay()} and the time'

newDate.toLocaleString('default', {

    weekday: 'long',
    timezone: 'Asia/Kolkata',
})