let students = document.querySelector(".students");
let showStudents = document.querySelector(".show__students");
let displayText = document.querySelector(".display");
let items = document.querySelectorAll(".list-group-item");
let runContent = document.querySelector(".run__content");
let resetContent = document.querySelector(".reset__content");

// for getting random number by arr size
function getRandomPerson(arr) {
    let length = arr.length;
    let randomNumber = Math.floor(Math.random() * length);
    return randomNumber;
}


// Show students output
showStudents.addEventListener('click',function(event){
    let studentsArray = students.value.split(",").sort();

    displayText.innerText = studentsArray.join(' ')
    
})

// Run the lottery
runContent.addEventListener("click", function (event) {
    let studentsArray = students.value.split(",").sort();
    loopPerson(studentsArray);
});


// Reset the lottery
resetContent.addEventListener("click", function (event) {
    location.reload();
});

function loopPerson(arr) {
    let personArray = [...items];
    for (let i = 0; i < personArray.length; i++) {
        let children = personArray[i].children;
        let childrenArray = [...children];
        setTimeout(function () {
            let winner = arr[getRandomPerson(arr)];
            childrenArray[0].innerText = winner;
        }, 2000 * i);
    }
}

