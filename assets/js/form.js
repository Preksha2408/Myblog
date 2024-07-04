const user = document.getElementById('user-names');  // Getting all the id's here and assinging a constant 
const title = document.getElementById('title');
const comment = document.getElementById('msg');
const saveButton = document.getElementById('save');
// Parsing the data from string to Array//
let storageArray = JSON.parse(localStorage.getItem("userGrade"));

// console.log(storageArray);

if (storageArray == null){

    storageArray = [];
}

console.log(storageArray);

function saveLastGrade() {
  // Save related form data as an object
  const userGrade = {
    user: user.value,
    title: title.value,
    comment: comment.value.trim(),
  };

  console.log(userGrade);

  storageArray.push(userGrade);

  // Used .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem('userGrade', JSON.stringify(storageArray));
}



// Adding event listener to Submit button //

saveButton.addEventListener('click', function (event) {
  event.preventDefault();
  saveLastGrade();

window.location.href = "blog.html";
});





