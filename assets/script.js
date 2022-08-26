let today = moment().format('dddd, MMMM, Do');
let saveBtn = document.getElementById('btn');
let datePrint = document.getElementById('currentDay')
let saveArea = document.getElementById('9-am')
let hour = moment().format('h hh')

// Printing Date to Hero
datePrint.textContent = today

function loadPage() {
    let oldItems = localStorage.getItem('9am');
    console.log (oldItems);
    saveArea.textContent = oldItems;
    checkTime();
}

loadPage()
// Save button functionallity
saveBtn.addEventListener('click',save)

function save() {
    let savedText = saveArea.value;
    console.log(savedText);
    localStorage.setItem('9am',savedText);
}

// check relative time

function checkTime() {
    let saveAreaTime = saveArea.split('-');
    console.log(saveAreaTime);
    if (hour == saveAreaTime) {
        saveArea.classList.add('bg-danger')
    } else if (hour < saveAreaTime) {
        saveArea.classList.add('bg-success');
    } else {console.log("past")}
}
