import { db } from 'firebase.js' // for some reason the does not run if this is not commented out

const testbtn = document.getElementById('testbtn')
testbtn.addEventListener('click', e => getRecords())

const testNode = document.getElementById('test')

function getRecords () {
  testNode.innerText = 'entered function'
  const usersRef = db.collection('users').doc('bH00B7SuQGoYl5MYdB41 ')
  const doc = usersRef.get()
  if (!doc.exists) {
    testNode.innerText = 'No such document!'
  } else {
    testNode.innerText = 'TESTERBEDSTERFÆTTER'
  }
}

function testfunct () {
  testNode.innerText = 'TESTERBEDSTERFÆTTER'
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
