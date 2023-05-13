// import { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
// const db = getFirestore();

const testbtn = document.getElementById("testbtn")
testbtn.addEventListener('click', e => testfunct())

const testNode = document.getElementById("test")

// async function getRecords() {
//   const testNode = document.getElementById("test")
//   const usersRef = db.collection('users');
//   const snapshot = await usersRef.get();
//   snapshot.forEach(
//     testNode.innerText = doc.data());
// }

function testfunct() {
    testNode.innerText = "TESTERBEDSTERFÆTTER"
}


// const res = await db.collection('users').add({
//   username: 'Ada',
//   password: 'Lovelace'
// });
// console.log('Added document with ID: ', res.id);


// Add a new document with a generated id.
// const res = await db.collection('users').add({
//     username: 'Ada',
//     password: 'Lovelace'
//   });
//   console.log('Added document with ID: ', res.id);

// const data = {
//     username: 'Ada',
//     password: 'Lovelace'
// };
// const res = await db.collection('users').doc(data.username).set(data);