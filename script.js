// // ✅ Q1. Ek promise banao jo 2 seconds baad "Data received" resolve kare.

// let p = new Promise((resolve,reject)=>{
//     let data = true;
//     setTimeout(() => {

//         if(data){
//             resolve("Data Recieved");
//         } 
//     }, 2000);
// })

// p
// .then((result)=>{
//     console.group(result);
// })
// .catch((err)=>{
//     console.log(err);

// })
//____________________________________________________
// // ✅ Q2.
// //  Ek promise banao jo random number 1–10 generate kare:

// // Agar number > 5 ho → resolve
// // Agar number ≤ 5 ho → reject

// let p = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       let rnd = Math.floor(Math.random()*10)
//     if(rnd>5){
//         resolve("promise resolve");
//     } else{
//         reject("promise rejected");
//     }  
//     }, 2000);

// })
// p
// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.log(err);
// })
//_____________________________________________________

// ✅ Q3.
//  Ek promise banao jo:

// . 1 sec baad "Step 1" print kare
// . Fir .then() me "Step 2" print kare
// . Fir "Step 3"

//_____________________________________________________

// // ✅ Q3.
// //  Ek promise banao jo:

// // . 1 sec baad "Step 1" print kare
// // . Fir .then() me "Step 2" print kare
// // . Fir "Step 3"
// let p = new Promise((resolve , reject)=>{
// setTimeout(() => {
//     resolve("step 1");
// }, 1000);

// })

// p
// .then((res1)=>{
//     console.log(res1)
//     return res1
// })
// .then((res2)=>{
//     console.log("step2")
//   return res2
// })
// .then((res3)=>{
//     console.log("step3");

// })

//_____________________________________________________

// // ✅ Q4
// // Promise reject hone par .catch() chal raha hai ya nahi — test karne ke liye code banao.

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let result = false;
//         if (result) {
//             resolve("promise resolve");
//         } else {
//             reject("promise reject");
//         }

//     }, 1000);
// })
// p
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// // ✅ Q5.

// // 2 promises banao:
// // P1: 1 sec baad resolve
// // P2: 3 sec baad resolve
// // Promise.all() ka output kya aayega?

// let pr1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let result1 = true;
//         if(result1){
//             resolve("promise1 resolve");
//         } else{
//             reject("promise1 rejected");
//         }
//     }, 1000);
// })

// let pr2  = new Promise((resolve,reject)=>{
//     setTimeout(() => {
        
//         let result2 = true;
//         if(result2){
//             resolve("promise2 resolve");
//         } else{
//             reject("promise2 rejected");
//         }
//     }, 3000);
// })
// Promise.all([pr1,pr2])
// .then((data)=>{
// console.log(data)
// })
