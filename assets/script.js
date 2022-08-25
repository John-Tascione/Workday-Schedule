let today = moment().format('dddd, MMMM, Do');
let saveBtn = document.getElementById('btn');
let datePrint = document.getElementById('currentDay')
let saveArea = document.getElementById('9am')

// Printing Date to Hero
datePrint.textContent = today

function loadPage() {
    let oldItems = localStorage.getItem('9am');
    console.log (oldItems);
    saveArea.textContent = oldItems;
}

loadPage()
// Save button functionallity
saveBtn.addEventListener('click',save)

function save() {
    let savedText = saveArea.value;
    console.log(savedText);
    localStorage.setItem('9am',savedText);
}