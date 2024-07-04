

// The function renderStorageArray() , parses the array from the local.storage //
function renderStorageArray() {
    let storageArray = JSON.parse(localStorage.getItem("userGrade"));
//The getElementbyid fetches the data from array , ie title , user , comments to the tags attached to blog.html //
    if (storageArray !== null && storageArray.length > 0){
        const lastEntry = storageArray[storageArray.length - 1];

        document.getElementById('saved-title-1').textContent = lastEntry.title;
        document.getElementById('saved-name-1').textContent = lastEntry.user;

        document.getElementById('saved-comment-5').textContent = lastEntry.comment;
        document.getElementById('saved-name-5').textContent = lastEntry.user;
    }
}



renderStorageArray();









