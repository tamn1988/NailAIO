import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAKXU1ms9S--JMcK38G6TneIY2F1EZvB0I",
    authDomain: "nailaio-d9769.firebaseapp.com",
    databaseURL: "https://nailaio-d9769.firebaseio.com",
    projectId: "nailaio-d9769",
    storageBucket: "nailaio-d9769.appspot.com",
    messagingSenderId: "333811187065"
};
firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

//firebase crud practice

//database calls are async

//Set***************

//set will wipe all values and set new values
// database.ref().set({
//     name: "Yami Yamsters",
//     age: 30,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     stressLevel: 6,
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('synced')
// }).catch((error)=>{
//     console.log(error)
// })

// // Can pass value for reference to set specific child elements
// database.ref('age').set(27);


// //Nested elements
// database.ref('location/city').set('Los Angeles')


// // Practice
// database.ref('attributes').set({
//     weight: 140,
//     height: 60
// })

// //Remove************

// // database.ref('location/city').remove();
// database.ref('location/city').set(null);


// //Update************

// //Has to be called with an object
// //Use '/' syntax for updating nested elements.
// // database.ref().update({
// //     name: 'Mike',
// //     age: 29,
// //     job: 'Software Developer'
// //     // 'location/city': 'Boston'
// // })


// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })



//Read Data************

// Get Data once
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })

//Subscription************
// Does not support promises
// database.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val())
// })

//Arrays**************
//Firebase converts array into object like structure with array like indexes

//Firebase generates a uniq id when using push and returns a reference link
// database.ref('notes').push({
//     title: 'To do',
//     body: 'Go for a run'
// });

// //referencing arrays
// database.ref('notes/id').update({
//     body: 'Buy food'
// })


//practice
// const ref = database.ref('expenses');
// const newExpense = ref.push({
//     description: "Pizza",
//     note: "Pompeii",
//     amount: 120000,
//     createdAt: 0
// })

//Reading data off arrays


//snapshot has a foreach method
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((child) => {
//             expenses.push({
//                 id: child.key,
//                 ...child.val()
//             })
//         })
//         console.log(expenses)
//     })
//     .catch((error) => {
//         console.log('Fail to read data', error)
//     })


// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         })
//     })
//     console.log(expenses)
// })

// setTimeout(() => {
//     database.ref('expenses').push({
//         note: 'Taco bell',
//         description: 'crunchwrap supreme',
//         createdAt: 0,
//         amount: 1100
//     })
// }, 5000)


//child_removed event
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

//child_changed event
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })


// const notes = [
//     {
//         id: 12,
//         title: 'First Note',
//         body: 'This is my note'
//     },
//     {
//         id: '741ase',
//         title: 'Another Note',
//         body: 'This is my note'
//     }
// ]

// database.ref('notes').set(notes);



//Promise Practice
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('this is my resolved data');
//         reject('something went wrong')
//     }, 1500)
// })

// console.log('before');

// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })

// console.log('after');





// FIREBASE WITH REDUX ***********
