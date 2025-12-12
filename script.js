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

// __________________________________________________


// // ✅ Q7.

// // Promise chain banao:

// // First: return number 10

// // Second: number * 2

// // Third: number + 5
// // Final output: 25

// let pr  = new Promise((resolve , reject)=>{
//     resolve(10);
// })

// pr
// .then((first)=>{
//     console.log(first)
//     return first;
// })
// .then((second)=>{
//     console.log(second)
//     return second*2;
// })
// .then((third)=>{
//     console.log(third)
//     return third+5;

// })
// .then((final)=>{
//     console.log(final);
// })

//__________________________________________________

// ✅ Q8.

// Promise ke andar error throw karke dekhna.
// .catch() chalega ya nahi?
// __________________________________________________




// let  p = new Promise((resolve,rejected)=>{
//     let value  = false;
//     if(value){
//         resolve(10);
//     } else{
//         rejected("something error");
//     }
// })

// p
// .then((value)=>{
//     console.log("Step 1 :" , value);
//     return value*2;
// })
// .then((value)=>{
//     console.log("Step 2:", value);
//     return value+5;
// })
// .then((value)=>{
//     console.log("Final Step : ",value);
// })
// .catch((error)=>{
//     console.log(error);
// })




// Ek promise banao jo 1 sec baad "A" return kare.
// Chain:

// A → A + "B"

// AB → AB + "C"

// ABC → print

// Output: ABC


// let p = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("A");
//     }, 2000);
// })

// p
// .then((value)=>{
//     console.log("Step1 : ", value);
//     return value+"B";
// })
// .then((value)=>{

//     console.log("Step2:", value);
//     return value+"C";
    
// })
// .then((value)=>{
//     console.log("Final Value:", value);
// })
// __________________________________________________

// // ✅ Q4 (Medium)

// // Ek promise banao jo number 10 return kare.
// // Chain:

// // Pehle number ka square

// // Fir square ka double

// // Fir 10 subtract
// // Final value print karo.

// let pr  = new Promise((resolve,reject)=>{
//     resolve(10);
// })

// pr
// .then((value)=>{
//     console.log("Step1:", value);
//     return value*value;
// })
// .then((value)=>{
//     console.log("Square Phase:",value);
//     return value*2;
// })
// .then((value)=>{
//     console.log("Doubble Phase",value )
//     return value-10;
// })
// .then((value)=>{
//     console.log("Subtract Phase:", value);
//     return value;
// })
// .then((value)=>{
//     console.log("Final Value:", value);
// })
//___________________________________________________
// // ✅ Q5 (Hard)

// // Ek function getNumber(n) banao jo promise return karta ho:

// // 1 sec baad number return kare
// // Chain:
// // getNumber(5)
// // value * 4
// // value - 3
// // value / 2
// // final result print



// function getNumber(n){
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {
            
//             resolve(n);
//         }, 1000);
//     })
// }
// getNumber(10)
// .then((value)=>{
//     console.log("PAssed Value",value);
//     return value*4;
// })

// .then((value)=>{
//     console.log("Multiply Step:", value);
//     return value-3;
// })
// .then((value)=>{
//     console.log("Subract Step",value);
//     return value/2;
// })
// .then((value)=>{
//     console.log("Divide Step:", value);
//     return value;    
// })
// .then((value)=>{
//     console.log("Final Result :", value);
    
// })

//__________________________________________________



